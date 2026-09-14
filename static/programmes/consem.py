Web VPython 3.2


# — Constantes physiques et paramètres initiaux —
g = 9.81                # accélération de la pesanteur (m/s²)

m = 0.05                # masse de la balle (kg)
v0 = 15                 # vitesse initiale (m/s)
alpha = radians(60)     # angle de tir (rad)

# Calculs initiaux
vec_v0 = vector(v0*cos(alpha), v0*sin(alpha), 0)  # vecteur vitesse initiale

# Durée maximale simulée (pour éviter la boucle infinie si oubli du sol)
# Ici on calcule la portée théorique : 2 v0² sin α cos α / g
portee = v0*v0*sin(2*alpha)/g
T_max = 2*v0*sin(alpha)/g * 1.1  # 10 % de marge
hmax = v0*v0*sin(alpha)**2/(2*g)

# — Scène VPython —
scene.background = vec(0,39,65)/255
scene.align = "left"
scene.width = 300
scene.height = 525
#scene.center = vector(portee/2, hmax/2, 0)
scene.range = 5

# Sol (plan infini représenté par une boîte extra‑large et fine)
plane = box(pos=vector(portee/2, -0.01, 0), size=vector(portee*1.1, 0.02, 5), color=vector(0, 108, 101)/255, emissive=True)

# Balle
ball_radius = 0.2
ball = sphere(pos=vector(0, ball_radius, 0), radius=ball_radius, color=color.red, make_trail=True, trail_type="curve", emissive=True)

# Flèche de vitesse
arrow_v0 = arrow(pos=ball.pos, axis=hat(vec_v0)*2, color=vec(255,217,50)/255, shaftwidth=2/15, round=True, emissive=True)

# — Graphique des énergies —
energy_graph = graph(title="Énergies", xtitle="t (s)", ytitle="Énergie (J)", fast=False, width=480, height=480, align="right")

Ec_curve  = gcurve(graph=energy_graph, color=vec(254,174,0)/255,   label="Ec")
Epp_curve  = gcurve(graph=energy_graph, color=vec(0,162,255)/255,  label="Epp")
Em_curve  = gcurve(graph=energy_graph, color=vec(255,100,75)/255, label="Em")

# — Boucle d'animation —

t = 0
ball.v = vec_v0
ball.a = vector(0, -g, 0)

# Pas de temps : compromis précision/fluide
# dt basé sur v0 et petite fraction du temps caractéristiques
# Ici 200 fps max :
dt = 1/200

while t < T_max and ball.pos.y >= ball_radius:
    rate(200)
    # Mise à jour des équations horaires :
    ball.v = vec(vec_v0.x,-g*t+vec_v0.y,0)
    ball.pos = vec(vec_v0.x*t,-1/2*g*t**2+vec_v0.y*t+ball_radius,0)

    # Déplacement de la flèche vitesse :
    arrow_v0.pos = ball.pos
    arrow_v0.axis = hat(ball.v)*2

    # Énergies
    Ec = 0.5*m*mag2(ball.v)
    Epp = m*g*ball.pos.y
    Em = Ec + Epp

    # Tracé
    Ec_curve.plot(t, Ec)
    Epp_curve.plot(t, Epp)
    Em_curve.plot(t, Em)

    t += dt
    scene.center = ball.pos

i = 0
N = 200
while i < N:
  rate(200)
  scene.center = ball.pos + (vector(portee/2, hmax/2, 0) - ball.pos)/N*i
  scene.range = 5 + 8/200*i
  i += 1
