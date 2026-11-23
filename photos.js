// =============================================================
// photos.js — les données de la galerie (kit de démarrage)
// -------------------------------------------------------------
// Ce fichier crée la constante « photos » : un tableau de 12 objets.
// Chargez-le AVANT app.js, dans le <head> de index.html :
//     <script src="photos.js" defer></script>
//     <script src="app.js" defer></script>
// Les scripts « defer » s'exécutent dans l'ordre : app.js peut donc utiliser « photos ».
// Les images sont des illustrations créées pour la formation (voir CREDITS.md) ;
// les noms des auteurs sont fictifs.
// =============================================================

const photos = [
    {
        id: 1,
        titre: "Lever de soleil sur le lac",
        categorie: "Nature",
        description: "Le soleil se lève entre deux collines et dessine un chemin de lumière sur l'eau calme. Une barque glisse près des roseaux, dans des tons de rose et de violet.",
        url: "images/photo-01.jpg",
        date: "2026-06-14",
        auteur: "Camille Martin",
        alt: "Soleil levant sur un lac violet, une barque près des roseaux"
    },
    {
        id: 2,
        titre: "Forêt de pins dans la brume",
        categorie: "Nature",
        description: "Au petit matin, la brume enveloppe une forêt de pins. Les arbres du premier plan, sombres et nets, encadrent une clairière qui s'efface dans le blanc.",
        url: "images/photo-02.jpg",
        date: "2025-10-03",
        auteur: "Hugo Bernard",
        alt: "Rangées de pins vert sombre noyées dans une brume blanche"
    },
    {
        id: 3,
        titre: "Champ de lavande en été",
        categorie: "Nature",
        description: "Des rangs de lavande en fleur filent jusqu'à l'horizon, sous un grand ciel bleu. Au loin, une maison aux tuiles orange et quelques cyprès.",
        url: "images/photo-03.jpg",
        date: "2026-07-08",
        auteur: "Léa Petit",
        alt: "Rangs de lavande violette jusqu'à une maison sous un ciel bleu"
    },
    {
        id: 4,
        titre: "La ville la nuit",
        categorie: "Ville",
        description: "Sous un croissant de lune, les immeubles allument leurs fenêtres une à une. Leurs lumières se reflètent dans le fleuve qui traverse la ville.",
        url: "images/photo-04.jpg",
        date: "2026-01-22",
        auteur: "Nadia Haddad",
        alt: "Immeubles illuminés sous la lune, reflétés dans un fleuve"
    },
    {
        id: 5,
        titre: "Tramway au petit matin",
        categorie: "Ville",
        description: "Un tramway blanc et vert traverse la ville au lever du jour, devant une rangée d'immeubles aux façades claires. Les premiers voyageurs sont déjà à bord.",
        url: "images/photo-05.jpg",
        date: "2025-11-12",
        auteur: "Thomas Moreau",
        alt: "Tramway blanc et vert devant des immeubles aux façades claires"
    },
    {
        id: 6,
        titre: "Pont suspendu au crépuscule",
        categorie: "Ville",
        description: "Les deux piliers d'un pont suspendu se découpent sur un ciel violet et orangé. Le pont et ses câbles se reflètent dans l'eau immobile.",
        url: "images/photo-06.jpg",
        date: "2026-03-30",
        auteur: "Camille Martin",
        alt: "Pont suspendu sombre sur un ciel de crépuscule, reflété dans l'eau"
    },
    {
        id: 7,
        titre: "Portrait au chapeau de paille",
        categorie: "Portrait",
        description: "Une jeune femme souriante, coiffée d'un chapeau de paille à ruban rouge, pose devant un champ de blé doré. Une lumière d'été douce et chaude.",
        url: "images/photo-07.jpg",
        date: "2026-05-02",
        auteur: "Inès Lefèvre",
        alt: "Jeune femme souriante au chapeau de paille devant des blés"
    },
    {
        id: 8,
        titre: "Profil en contre-jour",
        categorie: "Portrait",
        description: "La silhouette d'une personne de profil se détache sur un grand soleil couchant, au bord de la mer. Seule la forme du visage et des cheveux reste visible.",
        url: "images/photo-08.jpg",
        date: "2025-12-18",
        auteur: "Hugo Bernard",
        alt: "Silhouette de profil devant un grand soleil couchant sur la mer"
    },
    {
        id: 9,
        titre: "Éclat de rire",
        categorie: "Portrait",
        description: "Une femme âgée aux cheveux blancs et aux lunettes rondes éclate de rire. Son pull jaune moutarde ressort sur un fond turquoise parsemé de reflets.",
        url: "images/photo-09.jpg",
        date: "2026-08-25",
        auteur: "Léa Petit",
        alt: "Femme âgée aux cheveux blancs et aux lunettes qui rit"
    },
    {
        id: 10,
        titre: "Les arches de la halle",
        categorie: "Architecture",
        description: "Sous les arches métalliques vertes d'une halle de marché, l'allée centrale file vers la lumière, entre les étals et les fanions colorés.",
        url: "images/photo-10.jpg",
        date: "2025-09-07",
        auteur: "Nadia Haddad",
        alt: "Allée d'une halle de marché sous des arches métalliques vertes"
    },
    {
        id: 11,
        titre: "Phare sur la falaise",
        categorie: "Architecture",
        description: "Un phare rayé de rouge et de blanc veille au sommet d'une falaise, à côté de la maison du gardien. En contrebas, un voilier passe sur la mer bleue.",
        url: "images/photo-11.jpg",
        date: "2026-04-16",
        auteur: "Thomas Moreau",
        alt: "Phare rouge et blanc au sommet d'une falaise au-dessus de la mer"
    },
    {
        id: 12,
        titre: "Escalier en colimaçon",
        categorie: "Architecture",
        description: "Vu d'en haut, un escalier en colimaçon déroule ses marches de bois en spirale jusqu'à un sol en damier, tout au fond.",
        url: "images/photo-12.jpg",
        date: "2026-02-11",
        auteur: "Inès Lefèvre",
        alt: "Escalier en colimaçon en bois vu d'en haut, en spirale"
    }
];
