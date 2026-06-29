GlowScript 2.9 VPython

t = 0

#parametres
m = 95                  # kg
v0 = 0                  # m/s
g = vec(0,-9.81,0)      # m/s2
cx = 0.6
A , Af = 1 , 80         # m2
rho = 1.2               # kg/m3
y0 = 1200               # m
dt = 0.001    

W = 480
H = 300

#initialisation
position = vec(0,y0,0)  # y0
vitesse = vec(0,v0,0)   # v0 = 0 m/s

g1 = graph(width=W, height=2*H, fast=False, align='left', ymin=0, ymax=y0, xtitle='<i>t</i> (s)', ytitle='<i>y</i> (m)')
g2 = graph(width=W, height=H, fast=False, align='right', xtitle='<i>t</i> (s)', ytitle='<i>v<sub>y</sub></i> (m/s)')
g3 = graph(width=W, height=H, fast=False, align='right', xtitle='<i>t</i> (s)', ytitle='<i>a<sub>y</sub></i> (m/s²)')
graph_pos = gcurve(graph=g1,color=vec(0.2,0.4,0.8))
graph_vit = gcurve(graph=g2,color=vec(1,0,0))
graph_acc = gcurve(graph=g3,color=vec(0,0.7,0))


while(position.y>0):

    rate(10/dt)        
    t = t + dt
    
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

    # graphes
    graph_pos.plot(pos=(t, position.y))
    graph_vit.plot(pos=(t, vitesse.y))
    graph_acc.plot(pos=(t, force_resultante.y/m))
    