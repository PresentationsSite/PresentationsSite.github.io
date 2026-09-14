GlowScript 3.0 VPython

scene.width, scene.height = 800, 600
scene.range = 9
scene.center = vec(0,2,0)
scene.background = vec(0.2,0.2,0.4)

l,h,w = 22,.4,2
r = 0.1
v0 = 10
theta = 30*pi/180
sol = box(pos=vec(0,-.2,0),size=vec(l,h,w),color=vec(0.6,0.3,0.2))
balles = []

N = 50
dtheta = 2*pi/N
theta = 0
for i in range(N+1) :
  balle = sphere(pos=vec(0,.1,0),radius=r,color=vec(1,0.8,0.5),make_trail=True)
  balle.v = v0*vec(cos(theta),sin(theta),0)
  balle.m = 0.2
  balles += balle
  theta += dtheta
g = vector(0,-9.8,0)
balle.m = 0.2


t = 0
dt = .01

while t<5 :
  rate(1/dt)
  Fres = balle.m*g
  if t > 0.2 :
    for balle in balles :
      balle.v += Fres*dt/balle.m
      balle.pos += balle.v*dt
      if balle.pos.y <= 0 :
        balle.v = vec(0,0,0)
        balle.pos.y = 0
  t += dt
