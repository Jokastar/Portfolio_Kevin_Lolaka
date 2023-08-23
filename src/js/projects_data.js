function Project(p_number, title, role ,year, techStack, shortPresentation, presentation, mission,  realisation, img, github){
    this.p_number = p_number, 
    this.title = title; 
    this.role = role;
    this.year = year; 
    this.techStack = techStack; 
    this.shortPresentation = shortPresentation, 
    this.presentation = presentation;
    this.presentation = presentation; 
    this.mission = mission;  
    this.realisation = realisation; 
    this.img=img;
    this.github = github; 
}

const booki = new Project(
"01",
"Booki", 
"integration maquette",
 2023,
 ["html", "css"],
 "Le projet est un site Internet qui permet aux utilisateurs de trouver facilement des hébergements et des activités dans leur ville préférée.",
  "Le projet Booki est un site Internet qui permet aux utilisateurs de trouver facilement des hébergements et des activités dans leur ville préférée.",
  "Dans ce projet ma mission principale était de transformer les maquettes du site en une interface web fonctionnelle et esthétique.",
  [{fonctionality_name:"1.responsive", fonctionality_desc:"L'un des principaux défis était de rendre le site responsive sur tous les appareils. J'ai utilisé des media queries pour ajuster les styles en fonction de la taille de l'écran, ce qui a permis de garantir une expérience utilisateur optimale."}, {fonctionality_name:"2.versioning", fonctionality_desc:"Tout au long du développement, j'ai versionné le projet en utilisant Git et GitHub, ce qui a facilité la collaboration avec l'équipe et m'a permis de garder une trace de toutes les modifications apportées au code."}],
  ["/img/booki/booki_screenshot_1.png"],
  "https://github.com/Jokastar/Booki/"
  ); 

  const portfolio = new Project(
    "02",
    "Portfolio Architecte", 
    "Developpement front end",
    2023, 
   ["html", "css", "javascript"],
   "Site portfolio d'une architecte d'intérieur. Le projet permet à l'architecte de présenter ses travaux et d'offrir une expérience interactive à ses visiteurs",
   "J'ai eu l'opportunité de contribuer au développement du site portfolio d'une architecte d'intérieur. Le projet permet à l'architecte de présenter ses travaux et d'offrir une expérience interactive à ses visiteurs.",
   " Ma mission était d'intégrer de nouvelles fonctionnalités en utilisant les maquettes fournies et de créer des pages clés pour le site.",
   [{fonctionality_name:" Ma mission était d'intégrer de nouvelles fonctionnalités en utilisant les maquettes fournies et de créer des pages clés pour le site.", fonctionality_desc:"À partir du HTML fourni, j'ai mis en place une page attrayante et réactive pour mettre en valeur les réalisations de l'architecte."},
   {fonctionality_name:"1.Conception de la page de connexion de l'administrateur", fonctionality_desc:"J'ai développé cette page à partir de zéro en utilisant HTML, CSS et JavaScript pour permettre à l'architecte de se connecter et de gérer son portfolio en toute sécurité."},
   {fonctionality_name:" 2.Implémentation d'une modale pour uploader de nouveaux médias", fonctionality_desc:"J'ai créé cette fonctionnalité à partir de zéro, en me basant sur les besoins spécifiques de l'architecte pour ajouter facilement de nouveaux médias à son site"}
  ],
  ["/img/portfolio/portfolio_screenshot_1.png", "/img/portfolio/portfolio_screenshot_2.png"],
  "https://github.com/Jokastar/Portfolio-architecte-sophie-bluel-master"
  ); 

  const kasa = new Project(
    "03",
    "Kasa",
    "Developpement front end", 
    2023,
    ["html", "css", "react"],
    " Le projet est un site de location d'appartements entre particuliers",
    "J'ai eu l'opportunité de travailler sur la refonte totale de la plateforme web de Kasa,  un site de location d'appartements entre particuliers.",
    "J'ai été engagé pour démarrer le projet avec React et développer les fonctionnalités front-end en accord avec les nouvelles maquettes et contraintes techniques.",
    [{fonctionality_name:" 1.Intégration des maquettes Figma", fonctionality_desc:"J'ai utilisé les maquettes fournies par le designer Paul pour concevoir l'interface de l'application en respectant la logique de composants sur Figma"},
    {fonctionality_name:"2.Développement des fonctionnalités front-end", fonctionality_desc:"J'ai créé les composants React ainsi que les routes avec React Router pour offrir une expérience utilisateur fluide et responsive"},
    {fonctionality_name:"3.Gestion de la galerie d'images", fonctionality_desc:"J'ai implémenté une galerie d'images avec des fonctionnalités avancées, permettant à l'utilisateur de naviguer de manière circulaire entre les photos et de profiter d'animations dynamiques"},
    {fonctionality_name:"4.Collapses interactives", fonctionality_desc:"J'ai créé des Collapses interactifs qui s'ouvrent ou se ferment en fonction des actions de l'utilisateur, améliorant ainsi l'ergonomie du site."}
     ],
     ["/img/kasa/kasa_screenshot_1.png", "/img/kasa/kasa_screenshot_2.png"],
     "https://github.com/Jokastar/Kasa"
  ); 

  const mon_vieux_grimoire = new Project(
    "04",
    "Mon Vieux Grimoire",
    "Developpement back end",
    2023,
    ["node", "express", "mongo"], 
    "Le projet une plateforme de référencement et de notation de livres, permettant aux utilisateurs d'ajouter de nouveaux livres et de les noter publiquement",
    "Le site Mon Vieux Grimoire, une plateforme de référencement et de notation de livres, permettant aux utilisateurs d'ajouter de nouveaux livres et de les noter publiquement.",
    "J'ai été chargé de mettre en place le back-end pour gérer les données du site et les fonctionnalités de notation des livres.", 
    [
        {fonctionality_name:"1.Gestion des livres et des notations", fonctionality_desc:" J'ai créé des contrôleurs et des routeurs pour gérer les opérations CRUD (Create, Read, Update, Delete) des livres et des notations dans la base de données."}, 
        {fonctionality_name:"2.Sécurité des données ", fonctionality_desc:"J'ai mis en œuvre des méthodes pour assurer la sécurité du site et de la base de données  notamment en garantissant que les adresses électroniques dans la base de données sont uniques, en utilisant la librairie json web token (JWT) pour assurer l’authentification et autorisation sur le site et enfin  en utilisant la librairie Bcrypt pour hasher les mots de passe des utilisateurs"}, 
        {fonctionality_name:"3.Optimisation des images", fonctionality_desc:" j'ai optimisé les images envoyées par les utilisateurs pour réduire leur taille afin de respecter le Green Code"}
    ],
    ["/img/mvg/mon_vieux_grimoire_screenshot_1.png","/img/mvg/mon_vieux_grimoire_screenshot_2.png"],
    "https://github.com/Jokastar/mon_vieux_grimoire_back_end"
  ); 

   export const projects = [booki, portfolio, kasa, mon_vieux_grimoire]; 
   export const techLogo = [{tech:"html", img:"/logo/html5.svg"}, {tech:"css", img:"/logo/css3.svg"}, {tech:"javascript",img:"/logo/js.svg" }, {tech:"react", img:"/logo/react.svg"}, {tech:"node", img:"/logo/node.svg"}, {tech:"express", img:"/logo/express.svg"}, {tech:"mongo", img:"/logo/mongodb.svg"}]
