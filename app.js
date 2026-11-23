const grille = document.querySelector("#grille-photos");

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


afficherCarte();
