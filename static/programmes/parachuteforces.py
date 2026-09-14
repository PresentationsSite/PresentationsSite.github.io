GlowScript 2.9 VPython

#parametres
m = 95                  # kg
v0 = 0                  # m/s
g = vec(0,-9.81,0)      # m/s2
cx = 0.6
A , Af = 1 , 80         # m2
rho = 1.2               # kg/m3
y0 = 1200               # m
dt = 0.001    
t = 0
W = 400
H = 460
delt = 150

# scene.userzoom=False
scene.width = W+20
scene.height = H
scene.align = 'left'
ball = sphere(pos=vector(0,y0,0), velocity = vec(0,0,0), radius=1, color=vec(1,1,1))
#attach_arrow(ball, "force", scale=0.01, color=vec(0,0.7,0),shaftwidth=0.5)
#attach_arrow(ball, "velocity", scale=1, color=vec(1,0,0),shaftwidth=0.5)
sol = box(pos=vector(0,-1,0),length=1000, height=2, width=10, color=vec(0.6,0.6,0.6))
scene.camera.axis = vec(0,0,-1)
scene.range = 40
make_grid()

#initialisation
position = vec(0,y0,0)  # y0
vitesse = vec(0,v0,0)   # v0 = 0 m/s
vecpoids = arrow(pos = ball.pos, axis = vec(0,0,0), shaftwidth=0.5, color=vec(0.9,0.7,0))
vecfrottements = arrow(pos = ball.pos, axis = vec(0,0,0), shaftwidth=0.5, color=vec(0.9,0.4,0.9))
g1 = graph(width=W+delt, height=H/3, fast=False, align='right', ymin=0, ymax=y0,  ytitle='<i>y</i> (m)')
g2 = graph(width=W+delt, height=H/3, fast=False, align='right',  ytitle='<i>v<sub>y</sub></i> (m/s)')
g3 = graph(width=W+delt, height=H/3, fast=False, align='right',  ytitle='<i>a<sub>y</sub></i> (m/s²)')
graph_pos = gcurve(graph=g1,color=vec(0.2,0.4,0.8))
graph_vit = gcurve(graph=g2,color=vec(1,0,0))
graph_acc = gcurve(graph=g3,color=vec(0,0.7,0))


while(position.y>0):
  
    rate(4/dt)        
    t = t + dt
    scene.center = ball.pos
    # deploiment parachute
    tdep = 5
    if t > 25 & t < 25+tdep :
      cx = 1.35
      A = 1+Af*(t-25)/tdep
    
    # forces agissant sur la masse
    poids = m*g
    force_trainee = - 0.5*cx*rho*A*vitesse*vitesse.mag
    
    force_resultante = poids + force_trainee           

    # incrementation de la vitesse en suivant la methode d'Euler (2eme loi de Newton)
    vitesse = vitesse + (force_resultante / m) * dt
    # incrementation de la position
    position = position + vitesse * dt      
    
    ball.pos = position
    ball.velocity = vitesse
    ball.force = force_resultante
    
    vecpoids.pos = ball.pos
    vecpoids.axis = poids/100
    vecfrottements.pos = ball.pos
    vecfrottements.axis = force_trainee/100
    scene.camera.follow(ball)
    
    # graphes
    graph_pos.plot(pos=(t, position.y))
    graph_vit.plot(pos=(t, vitesse.y))
    graph_acc.plot(pos=(t, force_resultante.y/m))


vitesse = vec(0,0,0)
ball.velocity = vitesse
vecfrottements.axis = vec(0,0,0)
vecreaction = arrow(pos = ball.pos, axis = -poids/100*4, shaftwidth=0.5, color=vec(0.5,0.7,0.8))
while vecreaction.axis.y > -poids.y/100 :
  rate(2/dt)
  vecreaction.axis.y = vecreaction.axis.y - dt*120

def make_grid():
  thickness = 0.1
  dx = 10
  xmax = 40
  ymax = 1400
  x = -xmax
  while (x <= xmax):
    y = 0
    gridline = curve(pos=[vector(x,y,-thickness)],color=vec(0.4,0.4,0.4),radius=thickness)
    while (y <= ymax):
      gridline.append(vector(x,y,-thickness))
      y = y + dx
    x = x + dx
  y = 10
  while (y <= ymax):
    x = -xmax
    gridline = curve(pos=[vector(x,y,-thickness)],color=vec(0.4,0.4,0.4),radius=thickness)
    while (x <= xmax):
      gridline.append(vector(x,y,-thickness))
      x = x + dx
    y = y + dx