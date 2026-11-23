const grille = document.querySelector("#grille-photos");
const compteur = document.querySelector("#compteur-photos");
const modalePhoto = document.querySelector("#modale-photo");
const modaleImg = document.querySelector("#modale-img");
const modaleTitre = document.querySelector("#modale-titre");
const modaleInfos = document.querySelector("#modale-infos");
const modaleResume = document.querySelector("#modale-resume");
const btnFermer = document.querySelector("#btn-fermer");
const btnDetail = document.querySelector(".btnDetail");

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

    carte.append(img, titre, infos, btnDetail);
    return carte;
}

function afficherCarte() {
    grille.innerHTML = "";
    const cartes = photos.map(creerCarte);
    grille.append(...cartes);
    mettreAJourCompteur();
}

function mettreAJourCompteur() {
    compteur.textContent = `${photos.length} photos`;
}

grille.addEventListener("click", (event) => {
    const btn = event.target.closest(".btnDetail");
    if (btn !== null) {
        const carte = btn.closest(".carte-photo");
        ouvrirModale(Number(carte.dataset.id));
    }
});

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

btnFermer.addEventListener("click", () => {
    modalePhoto.close();
});

modalePhoto.addEventListener("click", (event) => {
    if (event.target === modalePhoto) {
        modalePhoto.close();
    }
});

afficherCarte();
