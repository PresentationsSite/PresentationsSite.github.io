Web VPython 3.2

L,H,W = 10,5,5

posM1 = vec(-3.5,3,0)
scene.width = 900
scene.height = 600

rayon = 0.2
aquarium = box(pos=vector(0,-H/2,0),length=L, height=H, width=W, color=vec(86,193,255)/255, opacity=0.5)
M1 = sphere(pos=posM1,radius=rayon)

# indices optiques des milieux 1 et 2
n1 = 1
n2 = 1.33
c = 1

Vincid = - posM1
normale = vec(0,1,0)

N = 1000
points(pos=[vector(0,-7+2*7/N*i,0) for i in range(N)], radius=1, color=vec(0.5,0.5,0.5))

r = n1/n2
costheta1 = -dot(normale,hat(Vincid))
costheta2 = sqrt(1-r**2*(1-costheta1**2))

Rs = ((n1*costheta1-n2*costheta2)/(n1*costheta1+n2*costheta2))**2
Rp = ((n1*costheta2-n2*costheta1)/(n1*costheta2+n2*costheta1))**2
R = (Rs+Rp)/2
T = 1-R

epaisseur = 0.2
Vrefle = hat(Vincid) + 2*costheta1*normale
Vrefra = r*hat(Vincid) + (r*costheta1-costheta2)*normale
RayonIncid = arrow(pos=posM1,axis=Vincid,color=vec(29,177,0)/255,round=True,shaftwidth=epaisseur)
RayonRefle = arrow(pos=vec(0,0,0),axis=hat(Vrefle)*5,color=vec(212,24,118)/255,round=True,shaftwidth=epaisseur,opacity=R)
RayonRefra = arrow(pos=vec(0,0,0),axis=hat(Vrefra)*5,color=vec(254,174,0)/255,round=True,shaftwidth=epaisseur,opacity=T)

drag = False

theta1 = acos(costheta1)
theta2 = acos(costheta2)

angleIncid2D = shapes.circle(radius=2,angle1=pi/2,angle2=pi/2+theta1)
angleIncid = extrusion(path=[-hat(cross(normale,Vincid))*0.05, hat(cross(normale,Vincid))*0.05], shape=angleIncid2D, color=vec(29,177,0)/255, opacity=0.5)
angleRefle2D = shapes.circle(radius=2,angle1=pi/2-theta1,angle2=pi/2)
angleRefle = extrusion(path=[-hat(cross(normale,Vincid))*0.05, hat(cross(normale,Vincid))*0.05], shape=angleRefle2D, color=vec(212,24,118)/255, opacity=0.5)
angleRefra2D = shapes.circle(radius=2,angle1=3*pi/2,angle2=3*pi/2+theta2)
angleRefra = extrusion(path=[-hat(cross(normale,Vincid))*0.05, hat(cross(normale,Vincid))*0.05], shape=angleRefra2D, color=vec(254,174,0)/255, opacity=0.5)

Labeltheta1 = label(pos=angleIncid.pos,text=f'{theta1/pi*180:.1f}°', xoffset=0.5, yoffset=1, height=9, font='sans', line=False, box=False, opacity=0, color=vec(136,250,78)/255)
Labelrefle = label(pos=angleRefle.pos,text=f'{theta1/pi*180:.1f}°', xoffset=0.5, yoffset=1, height=9, font='sans', line=False, box=False, opacity=0, color=vec(255,149,202)/255)
Labeltheta2 = label(pos=angleRefra.pos,text=f'{theta2/pi*180:.1f}°', xoffset=0, yoffset=-1, height=9, font='sans', line=False, box=False, opacity=0, color=vec(255,240,86)/255)

plan2D = shapes.rectangle(width=10, height=10)
plan = extrusion(path=[-vec(0,0,0.02), vec(0,0,0.02)], shape=plan2D, axis=hat(Vincid-proj(Vincid,normale)), opacity=0.1)


def down():
    global drag, M1
    drag = True

def move():
    global drag, M1, angleIncid, angleRefle, angleRefra, plan
    if drag: # mouse button is down
      angleIncid.visible = False
      angleRefle.visible = False
      angleRefra.visible = False
      M1.pos = scene.mouse.pos
      posM1 = M1.pos
      Vincid = - posM1
      if posM1.y > 0:
        RayonRefra.visible = True
        Labeltheta2.visible = True
        r = n1/n2
        normale = vec(0,1,0)
        costheta1 = -dot(normale,hat(Vincid))
        costheta2 = sqrt(1-r**2*(1-costheta1**2))
        theta1 = acos(costheta1)
        theta2 = acos(costheta2)
        if abs(theta1)>0.1:
          angleIncid2D = shapes.circle(radius=2,angle1=pi/2,angle2=pi/2+theta1)
          angleIncid = extrusion(path=[-hat(cross(normale,Vincid))*0.05, hat(cross(normale,Vincid))*0.05], shape=angleIncid2D, color=vec(29,177,0)/255, opacity=0.6)
          angleRefle2D = shapes.circle(radius=2,angle1=pi/2-theta1,angle2=pi/2)
          angleRefle = extrusion(path=[-hat(cross(normale,Vincid))*0.05, hat(cross(normale,Vincid))*0.05], shape=angleRefle2D, color=vec(212,24,118)/255, opacity=0.5)
          angleRefra2D = shapes.circle(radius=2,angle1=3*pi/2,angle2=3*pi/2+theta2)
          angleRefra = extrusion(path=[-hat(cross(normale,Vincid))*0.05, hat(cross(normale,Vincid))*0.05], shape=angleRefra2D, color=vec(254,174,0)/255, opacity=0.5)
        Rs = ((n1*costheta1-n2*costheta2)/(n1*costheta1+n2*costheta2))**2
        Rp = ((n1*costheta2-n2*costheta1)/(n1*costheta2+n2*costheta1))**2
        R = (Rs+Rp)/2
        T = 1-R
        RayonRefra.opacity = T
        RayonRefle.opacity = R
        Labeltheta1.pos = angleIncid.pos
        Labeltheta1.yoffset = 1
        Labeltheta1.text = f'{theta1/pi*180:.1f}°'
        Labelrefle.pos = angleRefle.pos
        Labelrefle.yoffset = 1
        Labelrefle.text = f'{theta1/pi*180:.1f}°'
        Labeltheta2.pos = angleRefra.pos
        Labeltheta2.yoffset = -1
        Labeltheta2.text = f'{theta2/pi*180:.1f}°'
        Vrefra = r*hat(Vincid) + (r*costheta1-costheta2)*normale
        RayonRefra.axis = hat(Vrefra)*5

      else:
        r = n2/n1
        normale = vec(0,-1,0)
        costheta1 = -dot(normale,hat(Vincid))
        costheta2 = sqrt(1-r**2*(1-costheta1**2))
        theta1 = acos(costheta1)
        theta2 = acos(costheta2)
        if abs(theta1)>0.1:
          angleIncid2D = shapes.circle(radius=2,angle1=3*pi/2-theta1,angle2=3*pi/2)
          angleIncid = extrusion(path=[hat(cross(normale,Vincid))*0.05, -hat(cross(normale,Vincid))*0.05], shape=angleIncid2D, color=vec(29,177,0)/255, opacity=0.6)
          angleRefle2D = shapes.circle(radius=2,angle1=3*pi/2,angle2=3*pi/2+theta1)
          angleRefle = extrusion(path=[hat(cross(normale,Vincid))*0.05, -hat(cross(normale,Vincid))*0.05], shape=angleRefle2D, color=vec(212,24,118)/255, opacity=0.5)
        Labeltheta1.pos = angleIncid.pos
        Labeltheta1.yoffset = -1
        Labeltheta1.text = f'{theta1/pi*180:.1f}°'
        Labelrefle.pos = angleRefle.pos
        Labelrefle.yoffset = -1
        Labelrefle.text = f'{theta1/pi*180:.1f}°'
        Rs = ((n1*costheta1-n2*costheta2)/(n1*costheta1+n2*costheta2))**2
        Rp = ((n1*costheta2-n2*costheta1)/(n1*costheta2+n2*costheta1))**2
        R = (Rs+Rp)/2
        T = 1-R
        if 1-r**2*(1-costheta1**2) < 0:
          RayonRefra.visible = False
          Labeltheta2.visible = False
        else:
          RayonRefra.visible = True
          Labeltheta2.visible = True
          Vrefra = r*hat(Vincid) + (r*costheta1-costheta2)*normale
          RayonRefra.axis = hat(Vrefra)*5
          if abs(theta1)>0.1:
            angleRefra2D = shapes.circle(radius=2,angle1=pi/2,angle2=pi/2-theta2)
            angleRefra = extrusion(path=[hat(cross(normale,Vincid))*0.05, -hat(cross(normale,Vincid))*0.05], shape=angleRefra2D, color=vec(254,174,0)/255, opacity=0.5)
          RayonRefra.opacity = T
          RayonRefle.opacity = R
          Labeltheta2.pos = angleRefra.pos
          Labeltheta2.yoffset = 1
          Labeltheta2.text = f'{theta2/pi*180:.1f}°'
      Vrefle = hat(Vincid) + 2*costheta1*normale
      RayonIncid.pos = posM1
      RayonIncid.axis = Vincid
      RayonRefle.axis = hat(Vrefle)*5
      plan.axis = hat(Vincid-proj(Vincid,normale))

def up():
    global drag, s
    s.color = color.cyan
    drag = False

scene.bind("mousedown", down)
scene.bind("mousemove", move)
scene.bind("mouseup", up)
  