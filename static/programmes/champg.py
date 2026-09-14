Web VPython 3.2
import random

# ------------------------------------------------------------------
# 1. Scène et Terre
# ------------------------------------------------------------------
R = 1
scene.width  = 900
scene.height = 600
scene.background = color.black

earth = sphere(pos=vec(0,0,0), radius=R, texture=textures.earth)

# ------------------------------------------------------------------
# 2. Paramètres des flèches
# ------------------------------------------------------------------
N_arrows = 20000
k_len    = 0.08*R

r_min, r_max = R + k_len, 2*R
a4, b4 = r_min**-4, r_max**-4     # pour la loi 1/r⁴


# ------------------------------------------------------------------
# 3. Clic souris « se placer sur la surface »
# ------------------------------------------------------------------
Obs_pole = vec(0,0,R*1.02)        # position caméra “au sol”
surface = False

def au_sol(surface):
    if scene.mouse.pick == earth:         # on ne réagit que si la Terre est cliquée
        surface = True
        scene.up = vec(0,0,1)
        scene.camera.pos = Obs_pole
        scene.camera.axis = vec(1,0,0)
        scene.range = 0.5

scene.bind('click', au_sol)   # un clic gauche déclenche au_sol

# ------------------------------------------------------------------
# 4. Nuage de vecteurs
# ------------------------------------------------------------------
for _ in range(N_arrows):
    # rayon distribué selon 1/r⁴
    u   = random.random()
    r = (a4 - u*(a4 - b4))**(-1/4)

    # orientation uniforme
    phi   = 2*pi*random.random()
    cos_t = random.uniform(-1, 1)
    sin_t = sqrt(1 - cos_t*cos_t)
    r_hat = vec(sin_t*cos(phi),
                sin_t*sin(phi),
                cos_t)

    # longueur ∝ 1/r²
    L = k_len / r**2

    arrow(pos        = r*r_hat,
          axis       = -L*r_hat,
          shaftwidth = L/20,
          color      = color.cyan,
          round      = True)
 
while True:
    rate(1)
    
