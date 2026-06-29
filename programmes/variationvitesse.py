Web VPython 3.2

rayon = 0.2
m = 0.5
e = 0.1
v0 = vec(5,10,0)
g = vec(0,-9.81,0)
scale = 3
scene.center = vec(v0.x*v0.y/mag(g),mag(v0)**2/(8*mag(g)),0)
scene.range = 1.1*v0.x*v0.y/mag(g)
scene.width,scene.height = 900,600

Sol = box(pos=vec(v0.x*v0.y/mag(g),-e/2,0),length=v0.x*v0.y/mag(g)*2+2, width=1, height=e/2, color=color.orange, opacity=0.5)
M = sphere(pos=vec(0,rayon,0),radius=rayon,color=color.red,vit=v0)
Vecteur_vitesse = arrow(pos=M.pos,axis=M.vit/scale,round=True,shaftwidth=rayon/3,color=color.yellow)
Vecteur_Dv = arrow(pos=M.pos,axis=vec(0.01,0,0),round=True,shaftwidth=rayon/2,color=color.green)

dt = 1e-6
t = 0
i = 0

liste_positions = []
liste_vitesses = []
liste_vecteurs_Dv = []

while M.vit.y > 0 or M.pos.y > e/2:
  rate(2/dt)
  M.vit = M.vit + g*dt
  M.pos = M.pos + M.vit*dt
  Vecteur_vitesse.pos = M.pos
  Vecteur_vitesse.axis = M.vit/scale
  Vecteur_Dv.pos = M.pos
  if i%200000 == 0:
    M.clone()
    Vecteur_vitesse.clone()
    liste_vitesses.append(M.vit)
    liste_positions.append(M.pos)
    liste_vecteurs_Dv.append(Vecteur_Dv.clone())
  t = t+dt
  i = i+1
  
M.visible = False

vitanim = 1000

for i in range(len(liste_vitesses)-1):
  sleep(0.1)
  vitanim += vitanim*4*i/len(liste_vitesses)
  position = liste_positions[i]
  vec_v_plus_un = arrow(pos=liste_positions[i+1],axis=liste_vitesses[i+1]/scale,shaftwidth=rayon/5,color=color.orange,opacity=0.5,round=True)
  for j in range(1000):
    rate(vitanim)
    vec_v_plus_un.pos += (liste_positions[i]-liste_positions[i+1])/1000
  moins_vec_v = arrow(pos=position,axis=liste_vitesses[i]/scale,shaftwidth=rayon/5,color=color.red,opacity=0.5,round=True)
  for j in range(1000):
    rate(vitanim)
    moins_vec_v.rotate(angle=pi/1000, axis=vector(0, 0, 1), origin=moins_vec_v.pos)
  for j in range(1000):
    rate(vitanim)
    moins_vec_v.pos += vec_v_plus_un.axis/1000
  Dv = liste_vitesses[i+1]-liste_vitesses[i]
  for j in range(1000):
    rate(vitanim)
    liste_vecteurs_Dv[i].axis += Dv/scale/1000

for i in range(len(liste_vitesses)-1):
  position = liste_positions[i]
  curve(pos=[position,vec(position.x,0,position.z)],color=color.blue,radius=0)
  