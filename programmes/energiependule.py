GlowScript 2.9 VPython

scene = canvas(width=250, height=565, align='left', background=vec(14,42,53)/255)

# paramètres
theta = 60                        # °
masse = 0.50                      # kg
v0 = 0                            # m/s
g = vector(0,-9.8,0)              # m/s2
alpha = 0.1                       # kg/m coefficient de frottement fluide
L = 0.8                           # m
rayon = 0.05                      # m
theta *= pi/180
omega = 0

O = vec(0,L,0)
Attache = sphere(pos=vec(0,L,0), radius=rayon/5, color=color.white, emissive=True)

# initialisation
M = sphere(pos=L*vec(sin(theta),1-cos(theta),0), radius=rayon, color=color.red) 
M.mass = masse
M.vitesse = vector(0,v0,0) 
OM = M.pos - O
corde = cylinder(pos=O,axis=OM,color=vec(255,150,141)/255,radius=0.005)

scene.center = vec(0,L/2,0)

g1=graph(width=650, height=565, align='right', fast = False, xtitle ='<i>t<i> (en s)', ytitle='<i>E</i> (en J)')
Epgraph = gcurve(graph=g1,color=vec(0.2,0.3,0.7),label="Énergie potentielle")
Ecgraph = gcurve(graph=g1,color=vec(0.8,0.3,0.2),label="Énergie cinétique")
Emgraph = gcurve(graph=g1,color=vec(0.3,0.7,0.2),label="Énergie mécanique")

Poids = M.mass*g
echelle = 0.05
vec_P = arrow(pos=M.pos,axis=Poids*echelle, shaftwidth=0.02, color=vec(86,193,255)/255, round=True, emissive=True)
vec_T = arrow(pos=M.pos, axis=-proj(Poids,OM)*echelle, shaftwidth=0.02, color=vec(255,100,78)/255, round=True, emissive=True)
vec_F = arrow(pos=M.pos, axis=vec(0,0,0), shaftwidth=0.02, color=vec(255,240,86)/255, round=True, emissive=True)

dt = 1e-4
t = 0

while t<10:
  
    rate(1/dt)
    
    OM = M.pos-O
    corde.axis = OM

    omega += -mag(g)*sin(theta)/L*dt - sign(omega)*L/M.mass*alpha*(omega)**2*dt
    theta += omega*dt

    M.pos = L*vec(sin(theta),1-cos(theta),0)
    M.vitesse = L*omega*vec(cos(theta),sin(theta),0)
    
    vec_P.pos = M.pos
    vec_T.pos = M.pos
    vec_F.pos = M.pos
    vec_T.axis = (- omega**2*OM - proj(Poids,OM))*echelle
    vec_F.axis = (- alpha*M.vitesse)*echelle*15 # pas à l'échelle du coup !

    Ec = 0.5*M.mass*(L*omega)**2
    Ep = M.pos.y*mag(g)*M.mass

    t = t + dt

    Epgraph.plot(pos=(t, Ep))
    Ecgraph.plot(pos=(t, Ec))
    Emgraph.plot(pos=(t, Ec+Ep))