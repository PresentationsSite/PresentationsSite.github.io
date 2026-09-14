Web VPython 3.2


# — Paramètres du condensateur —
plate_length = 4      # longueur (x) des plaques en unités arbitraires
plate_width = 4       # largeur  (y) des plaques
plate_separation = 2  # distance (z) entre les faces internes des plaques
plate_thickness = 0.06  # épaisseur visuelle (uniquement pour le rendu)
q_per_point = 1e-9    # charge de chaque élément discret (Coulombs)

# — Scène —
scene.background = vec(0,56,53)/255
scene.width = 800
scene.height = 500
scene.camera.pos = vec(5,5,0)
scene.camera.axis = -scene.camera.pos
scene.range = 5

# — Création des plaques (boîtes translucides) —
positive_plate = box(
    pos=vector(0, 0, -plate_separation / 2),
    size=vector(plate_length, plate_width, plate_thickness),
    color=color.red,
    opacity=1,
    emissive=True
)

negative_plate = box(
    pos=vector(0, 0,  plate_separation / 2),
    size=vector(plate_length, plate_width, plate_thickness),
    color=color.blue,
    opacity=1,
    emissive=True
)

# — Discrétisation des plaques en charges ponctuelles —
charges = []  # liste de dicts {pos: vector, q: float}

nx = ny = 20  # nombre de points par dimension pour discrétiser chaque plaque
for i in range(nx):
    for j in range(ny):
        x = -plate_length / 2 + (i + 0.5) * plate_length / nx
        y = -plate_width  / 2 + (j + 0.5) * plate_width  / ny
        # plaque positive (rouge)
        charges.append({"pos": vector(x, y, -plate_separation / 2), "q":  q_per_point})
        # plaque négative (bleue)
        charges.append({"pos": vector(x, y,  plate_separation / 2), "q": -q_per_point})

# — Paramètres d'affichage du champ —
max_arrow_len = 0.3   # longueur max d'une flèche (pour éviter qu'elles se chevauchent)
scale_E = 3e-4       # facteur de conversion champ➔longueur flèche (à ajuster)

# Grille d'échantillonnage pour les flèches
grid_nx = grid_ny = 15
grid_nz = 12

margin = 1            # marge autour des plaques pour afficher les flèches extérieures
x_min, x_max = -plate_length / 2 - margin, plate_length / 2 + margin
y_min, y_max = -plate_width  / 2 - margin, plate_width  / 2 + margin
z_min, z_max = -plate_separation / 2 - margin, plate_separation / 2 + margin

k = 8.988e9  # constante de Coulomb (N·m²/C²)

# — Calcul et affichage du champ —

for ix in range(grid_nx):
    for iy in range(grid_ny):
        for iz in range(grid_nz):
            # Coordonnées du point d'échantillonnage
            x = x_min + ix * (x_max - x_min) / (grid_nx - 1)
            y = y_min + iy * (y_max - y_min) / (grid_ny - 1)
            z = z_min + iz * (z_max - z_min) / (grid_nz - 1)
            point = vector(x, y, z)

            # Calcul du champ E au point considéré
            E = vector(0, 0, 0)
            for c in charges:
                r = point - c["pos"]
                r_mag2 = mag2(r)
                if r_mag2 < 1e-10:
                    # Point trop proche d'une charge discrète → on ignore pour éviter les singularités
                    E = None
                    break
                E += k * c["q"] * r / (r_mag2 * sqrt(r_mag2))

            if E is None or mag(E) == 0:
                continue  # on passe ce point

            # Longueur de flèche proportionnelle à |E| mais limitée
            arrow_len = min(max_arrow_len, mag(E) * scale_E)
            arrow(pos=point,
                  axis=hat(E) * arrow_len,
                  color=vec(255,217,50)/255,
                  shaftwidth = mag(hat(E) * arrow_len)/15,
                  round = True,
                  opacity=1,
                  emissive=True)


scene.append_to_caption("Rotation : souris + touche Ctrl\n")
scene.append_to_caption("Zoom : molette\nPan : Maj + glisser\n")

