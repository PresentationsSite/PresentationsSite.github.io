Web VPython 3.2

scene.height,scene.width = 600,800

RT = 5
Terre = sphere(pos=vec(0,0,0),radius=RT,texture=textures.earth,emissive=True)

a = 0.1
Pt1 = vec((RT+a)*sin(-pi/10),0,(RT+a)*cos(-pi/10))
vit = vec((RT+a)*cos(-pi/10),0,-(RT+a)*sin(-pi/10))
rayon = 0.01
c = 1

scene.center = vec(0,0,RT)
scene.forward = vec(0,1,0)
scene.range = 2.5
scene.up = vec(0,0,1)

rayon = sphere(pos=Pt1,radius=rayon,vitesse=c*hat(vit),color=vec(1,1,0.8),emissive=True,make_trail=True,trail_radius=rayon)

H = RT/5
N = 200
epaisseur = H/N
Couches = [extrusion(shape=shapes.rectangle(width=epaisseur, height=0.02), path=paths.circle(radius=RT+epaisseur/2+epaisseur*i), color=vec(i/N,0,1-i/N), opacity = 0.5) for i in range(N)]

# Chaud-Froid
#Nmax = 1.1057
Nmax = 1.104
Indices = [1] + [1+i/(N+1)*(Nmax-1) for i in range(1,N+1)]
# Froid-Chaud
Indices = [Nmax] + [Nmax-i/(N+1)*(Nmax-1) for i in range(1,N+1)]

def snell(n1,n2,vecteurincident,normale):
    """
    vecteurincident et normale doivent etre de norme = 1
    """
    r = n1/n2
    costheta1 = -dot(vecteurincident,normale)
    if 1-r**2*(1-costheta1**2) >= 0:
        v = hat((r*vecteurincident + (r*costheta1-sqrt(1-r**2*(1-costheta1**2)))*normale))#*c/n2
    else:
        v = hat(vecteurincident + 2*costheta1*normale)#*c/n2
    return v


dt = 1e-3
t = 0

while mag(rayon.pos)>RT and t < 100:
    rate(5/dt)
    oldpos = rayon.pos
    newpos = rayon.pos + rayon.vitesse*dt
    for i in range(1,N+1):
        if (mag(oldpos) - RT-H/N*i)*(mag(newpos) - RT-H/N*i) < 0:
            if mag(newpos) > mag(oldpos): 
                rayon.vitesse = snell(Indices[i-1],Indices[i],hat(rayon.vitesse),-hat(oldpos))
            else:
                rayon.vitesse = snell(Indices[i],Indices[i-1],hat(rayon.vitesse),hat(oldpos)) # on change le sens de la normale
    t += dt
    rayon.pos += rayon.vitesse*dt
    
print("fini",t)