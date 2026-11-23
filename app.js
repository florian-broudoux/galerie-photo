
// Récupération des éléments HTML
const grille = document.querySelector("#grille-photos");
const compteur = document.querySelector("#compteur-photos");
const modalePhoto = document.querySelector("#modale-photo");
const modaleImg = document.querySelector("#modale-img");
const modaleTitre = document.querySelector("#modale-titre");
const modaleInfos = document.querySelector("#modale-infos");
const modaleResume = document.querySelector("#modale-resume");
const btnFermer = document.querySelector("#btn-fermer");
const champRecherche = document.querySelector("#recherche-photo");
const listeTri = document.querySelector("#tri-photos");
const groupeFiltres = document.querySelector(".filtres-genres");
const btnFiltre = document.querySelectorAll(".btn-genre");
const vide = document.querySelector("#message-vide");

// Clé utilisée pour enregistrer les favoris
const CLE_FAVORIS = "photos-favoris";

let categorieActuelle = "Toutes";
let favoris = chargerFavori();

// Récupère les favoris enregistrés dans le localStorage
function chargerFavori() {
    const donnees = localStorage.getItem(CLE_FAVORIS);
    if (donnees === null) {
        return [];
    }
    return JSON.parse(donnees);
}

// Enregistre les favoris dans le localStorage
function sauvegarderFavori() {
    localStorage.setItem(CLE_FAVORIS, JSON.stringify(favoris));
}

// Ajoute ou retire une photo des favoris
function basculerFavori(bouton) {
    const id = Number(bouton.dataset.id);
    const estFavori = bouton.classList.toggle("est-favori");

    if (estFavori) {
        favoris.push(id);
    } else {
        favoris = favoris.filter((element) => element !== id);
    }

    sauvegarderFavori();

    bouton.textContent = estFavori ? "♥" : "♡";
    bouton.setAttribute("aria-pressed", estFavori ? "true" : "false");
}

// Crée une carte photo avec ses informations et ses boutons
function creerCarte(photo) {
    const carte = document.createElement("article");
    carte.classList.add("carte-photo");
    carte.dataset.id = photo.id;
    carte.dataset.categorie = photo.categorie;

    const img = document.createElement("img");
    img.src = photo.url;
    img.alt = photo.alt;
    img.loading = "lazy";

    const titre = document.createElement("h2");
    titre.textContent = photo.titre;

    const infos = document.createElement("p");
    infos.textContent = `${photo.auteur} - ${photo.categorie}`;

    const btnDetail = document.createElement("button");
    btnDetail.textContent = "Voir le détail";
    btnDetail.setAttribute("aria-label", `Voir le détail : ${photo.titre}`);
    btnDetail.classList.add("btnDetail");

    const btnFavori = document.createElement("button");
    const estFavori = favoris.includes(photo.id);
    btnFavori.textContent = estFavori ? "♥" : "♡";
    btnFavori.classList.add("btn-favori");
    btnFavori.classList.toggle("est-favori", estFavori);
    btnFavori.setAttribute("aria-label", `Mettre ${photo.titre} en favori`);
    btnFavori.dataset.id = photo.id;
    btnFavori.setAttribute("aria-pressed", estFavori ? "true" : "false");

    carte.append(img, titre, infos, btnDetail, btnFavori);
    return carte;
}

// Met à jour le nombre de photos affichées
function mettreAJourCompteur(nombre) {
    compteur.textContent = `${nombre} photos`;
}

// Affiche les cartes correspondant aux critères sélectionnés
function afficherCarte() {
    const visibles = photosAAfficher();
    grille.innerHTML = "";
    mettreAJourCompteur(visibles.length);
    if (visibles.length === 0) {
        vide.hidden = false;
    } else {
        vide.hidden = true;
        const cartes = visibles.map(creerCarte);
        grille.append(...cartes);
    }
}

// Ouvre la modale avec les informations de la photo sélectionnée
function ouvrirModale(id) {
    const photo = photos.find((element) => element.id === id);
    if (photo === undefined) {
        return;
    }
    modaleImg.src = photo.url;
    modaleImg.alt = photo.alt;
    modaleTitre.textContent = photo.titre;
    modaleInfos.textContent = `${photo.auteur} - ${photo.date} - ${photo.categorie}`;
    modaleResume.textContent = photo.description;
    modalePhoto.showModal();
}

// Filtre, recherche et trie les photos à afficher
function photosAAfficher() {
    const recherche = champRecherche.value.trim().toLowerCase();
    let resultat = photos.filter((photo) => {
        if (categorieActuelle === "Nature") {
            return photo.categorie === "Nature";
        }

        if (categorieActuelle === "Ville") {
            return photo.categorie === "Ville";
        }

        if (categorieActuelle === "Portrait") {
            return photo.categorie === "Portrait";
        }

        if (categorieActuelle === "Architecture") {
            return photo.categorie === "Architecture";
        }
        return true;
    });

    resultat = resultat.filter(
        (photo) =>
            photo.titre.toLowerCase().includes(recherche) ||
            photo.auteur.toLowerCase().includes(recherche),
    );

    if (listeTri.value === "titre") {
        resultat = [...resultat].sort((a, b) => a.titre.localeCompare(b.titre));
    } else if (listeTri.value === "auteur") {
        resultat = [...resultat].sort((a, b) =>
            a.auteur.localeCompare(b.auteur),
        );
    } else {
        resultat = [...resultat].sort((a, b) => b.date.localeCompare(a.date));
    }
    return resultat;
}

// Gère les clics sur les boutons des cartes
grille.addEventListener("click", (event) => {
    const btnFavori = event.target.closest(".btn-favori");
    if (btnFavori !== null) {
        basculerFavori(btnFavori);
        return;
    }

    const btnDetail = event.target.closest(".btnDetail");
    if (btnDetail !== null) {
        const carte = btnDetail.closest(".carte-photo");
        ouvrirModale(Number(carte.dataset.id));
    }
});

// Ferme la modale avec le bouton Fermer
btnFermer.addEventListener("click", () => {
    modalePhoto.close();
});

// Ferme la modale lors d'un clic sur son arrière-plan
modalePhoto.addEventListener("click", (event) => {
    if (event.target === modalePhoto) {
        modalePhoto.close();
    }
});

// Gère la sélection d'un filtre par catégorie
groupeFiltres.addEventListener("click", (event) => {
    const bouton = event.target.closest(".btn-genre");
    if (bouton === null) {
        return;
    }

    btnFiltre.forEach((element) => {
        element.classList.remove("actif");
        element.setAttribute("aria-pressed", "false");
    });

    bouton.classList.add("actif");
    bouton.setAttribute("aria-pressed", "true");

    categorieActuelle = bouton.dataset.genre;
    afficherCarte();
});

// Actualise les photos lors d'une recherche
champRecherche.addEventListener("input", afficherCarte);

// Actualise les photos lors d'un changement de tri
listeTri.addEventListener("change", afficherCarte);

// Affiche les photos au chargement de la page
afficherCarte();
