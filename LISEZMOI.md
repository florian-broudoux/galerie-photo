# Kit de démarrage — Galerie photo interactive

Ce kit accompagne le projet d'application de la mission « Le DOM et les événements JavaScript » (jalon 3). Il vous évite de chercher des images et de saisir les données : vous vous concentrez sur le DOM et les événements.

## Contenu

| Élément | Rôle |
|---|---|
| `images/photo-01.jpg` … `photo-12.jpg` | Les 12 images de la galerie (1200 × 800 px) : 3 par catégorie (Nature, Ville, Portrait, Architecture) |
| `photos.js` | La constante `photos` : un tableau de 12 objets (`id`, `titre`, `categorie`, `description`, `url`, `date`, `auteur`, `alt`) |
| `CREDITS.md` | L'origine des images et ce que vous avez le droit d'en faire |
| `LISEZMOI.md` | Ce fichier |

## Utilisation

1. Décompressez le kit, puis copiez le dossier `images/` et le fichier `photos.js` dans votre dossier de projet, `C:\dev\galerie-photo`, à côté de `index.html`, `style.css` et `app.js`.
2. Dans le `<head>` de `index.html`, chargez `photos.js` **avant** `app.js`, tous deux avec `defer` :

   ```html
   <script src="photos.js" defer></script>
   <script src="app.js" defer></script>
   ```

   Les scripts `defer` s'exécutent dans l'ordre où ils sont écrits : quand `app.js` démarre, la constante `photos` existe déjà.
3. Vérifiez dans la console (`F12`) : `photos.length` doit afficher `12`.

Vous préférez tout regrouper ? Vous pouvez aussi coller le tableau en haut de `app.js` et ne pas charger `photos.js`.

## Vos propres photos

Vous pouvez remplacer ces images par les vôtres, à condition d'en avoir les droits (photos que vous avez prises vous-même, par exemple). Gardez alors le même format d'objet et mettez à jour `url`, `titre`, `description` et `alt`. N'utilisez pas de photo d'une personne sans son accord.
