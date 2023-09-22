import os

# Dossier à lister
dossier = "C:/Users/Thomas/Desktop/identif_entrainement/##transition/source"
vhl = "BMP3 KHRIZANTHEMA"

# Vérifier si le dossier existe
if not os.path.exists(dossier):
    print("Le dossier spécifié n'existe pas.")
    exit()

os.mkdir("C:/Users/Thomas/Desktop/identif_entrainement/"+vhl+"/")
cpt = 0
# Parcourir les fichiers du dossier
for fichier in os.listdir(dossier):
    # Chemin complet du fichier
    chemin_fichier = os.path.join(dossier, fichier)
    
    # Vérifier si c'est un fichier
    if os.path.isfile(chemin_fichier):
        # Nouveau nom du fichier avec numéro
        nouveau_nom = vhl+"-"+str(cpt)+".jpg"
        # Chemin complet du nouveau fichier
        nouveau_chemin = os.path.join("C:/Users/Thomas/Desktop/identif_entrainement/"+vhl+"/", nouveau_nom)
        os.rename(chemin_fichier, nouveau_chemin)
        cpt+=1

print("Conversion finie")
