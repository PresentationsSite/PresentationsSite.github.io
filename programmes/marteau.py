Web VPython 3.2

scene.width,scene.height = 850,440
scene.background = vec(25,25,25)/255
scene.ambient = vec(0.5,0.5,0.5)
v_0 = 8
pesanteur = 10
g = pesanteur*vec(0,-1,0)
theta0 = pi/4
v0 = v_0*vec(cos(theta0),sin(theta0),0)
toursparseconde = 1.3
w0 = -toursparseconde*2*pi*vec(0,0,1) 

scene.center = vector(v0.x*v0.y/pesanteur*1.5,0, 0) # ou pour y : v0.y/(2*pesanteur)
scene.range = 4.5

manche = cylinder(size=vector(1,.2,.2),color=vector(0.72,0.42,0))
tete = box(size=vector(.2,.6,.2), pos=vector(1,0,0),color=color.gray(.6))
marteau = compound([manche, tete],origin=vec(0.95,0,0),v=v0)
decal = vec(0,0,0.1)
centreG = sphere(pos=marteau.pos+decal, radius=0.05, color=vec(1,0,0), emissive=True, make_trail=False)
pointmanche = sphere(pos=marteau.pos+decal-marteau.axis*0.85, radius=0.05, color=vec(0,162,255)/255, emissive=True, make_trail=False)

gridlines = []

def make_grid():
  thickness = 0.01
  dx = 0.5
  xmax = 10
  ymax = 4
  x = 0
  while (x <= xmax):
    y = -ymax
    gridline = curve(pos=[vector(x,y,-thickness)],color=vec(0.4,0.4,0.4),radius=thickness)
    gridlines.append(gridline)
    while (y <= ymax):
      gridline.append(vector(x,y,-thickness))
      y = y + dx
    x = x + dx
  y = -ymax
  while (y <= ymax):
    x = 0
    gridline = curve(pos=[vector(x,y,-thickness)],color=vec(0.4,0.4,0.4),radius=thickness)
    gridlines.append(gridline)
    while (x <= xmax):
      gridline.append(vector(x,y,-thickness))
      x = x + dx
    y = y + dx

make_grid()

t = 0
dt = 1e-5
k = 0


def toggle_trails():
    centreG.make_trail = not centreG.make_trail
    pointmanche.make_trail = not pointmanche.make_trail

marteau_frame = False

def toggle_frame():
    global marteau_frame
    marteau_frame = not marteau_frame

def toggle_pause():
    global paused
    paused = not paused

def reset():
    global paused, marteau, centreG, pointmanche
    paused = True
    marteau.v = v0
    marteau.pos = vec(0.95,0,0) 
    marteau.axis = vector(1.1, 0, 0) 
    centreG.pos = marteau.pos + decal
    pointmanche.pos = marteau.pos + decal - marteau.axis * 0.85
    centreG.clear_trail()
    pointmanche.clear_trail()
#    for trail in trails:
#        trail[0].visible = False
    run_animation()

moinvite = False

def vamoinsvite():
    global moinsvite
    moinsvite = not moinsvite

grille_visible = False

def affichergrille():
    global grille_visible, gridline
    for gridline in gridlines:
        gridline.visible = grille_visible
    grille_visible = not grille_visible
    
trails = []

def run_animation():
    global t, marteau, centreG, pointmanche, moinsvite
    t = 0
    k = 0
    duree_trace = 0.1
    while marteau.pos.y >= -3:
        if not moinsvite:
            rate(1/dt)
        else:
            rate(0.1/dt)
        if not paused:
            t += dt
            if t>=0:
                marteau.v += g*dt
                marteau.pos += marteau.v*dt 
                marteau.axis += cross(marteau.axis,w0)*dt
                centreG.pos = marteau.pos+decal
                pointmanche.pos = marteau.pos+decal-marteau.axis*0.85
        if marteau_frame:
            scene.center = centreG.pos
            scene.range = 2
#            if k%1000 == 0:
#                trails.append((sphere(pos=pointmanche.pos, radius=0.05, color=vec(0,162,255)/255, emissive=True),t))
#            for trail in trails:
#                if t - trail[1] > duree_trace:
#                    trail[0].visible = False
#                    trails.remove(trail)
#            if not paused:
#                for trail in trails:
#                    trail[0].pos += marteau.v*dt
        else:
            scene.center = vector(v0.x*v0.y/pesanteur*1.5,0, 0)
            scene.range = 4.5
        k += 1

pause_button = button(text="Lecture/Pause", bind=toggle_pause)
reset_button = button(text="Raz", bind=reset)
vit_button = button(text="Lent/Normal", bind=vamoinsvite)
trail_button = button(text="Trace", bind=toggle_trails)
grille_button = button(text="grille", bind=affichergrille)
frame_button = button(text="Référentiel", bind=toggle_frame)

paused = True
run_animation()
  