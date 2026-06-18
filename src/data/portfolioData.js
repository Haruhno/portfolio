export const portfolioData = {
  profile: {
    headline: 'Hasmir Boinali',
    currentStatus:
      "Étudiant en 1re année de Cycle Ingénieur Informatique à l'ESIEE Paris (2026-2029), diplômé du BUT Informatique de l'IUT de Créteil-Vitry (UPEC).",
    professionalProject:
      "Construire des applications utiles, solides et bien pensées, avec une attention particulière à l'architecture logicielle, à la clarté du code et à l'expérience utilisateur.",
    qualities: ['Rigueur', 'Créativité', 'Organisation', 'Curiosité', 'Autonomie'],
    interests: ['Football', 'Jeux vidéo', 'Culture japonaise', 'Voyages', 'Programmation'],
  },
  quests: [
    {
      title: 'Stage de 3ème année BUT - DGFiP',
      subtitle: 'Stagiaire Développeur Logiciel - Mars 2026 à Juin 2026 - ESI de Nanterre',
      mission:
        "Analyse de l'existant technique et fonctionnel, puis conception de la nouvelle version de l'application interne PILOTE pour la Direction des Grandes Entreprises.",
      details: [
        "Reprise d'un système historique PHP/MySQL vers une architecture Java Spring Boot plus moderne.",
        "Usage de Lombok, PostgreSQL et d'une approche distribuée pour fiabiliser la cible.",
        "Création d'interfaces connectées aux standards de l'administration via la surcouche interne clir basée sur Vue.js et le framework d'État DSFR.",
        "Intégration continue via Jenkins, gestion du code sur GitLab, et travail en environnement agile avec Jira, Confluence et Draw.io.",
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Vue.js', 'DSFR', 'Jenkins', 'GitLab', 'Jira', 'Confluence'],
      result:
        "Participation à la modernisation d'un socle critique en capitalisant sur l'analyse du legacy et sur les standards de l'écosystème d'État.",
      accent: 'emerald',
    },
    {
      title: 'Stage de 2ème année BUT - THEMAA',
      subtitle: 'Stagiaire Développeur Web - Avril 2025 à Juin 2025',
      mission:
        "Conception et développement de A à Z d'une cartographie interactive nationale de l'offre de formation en arts de la marionnette en France.",
      details: [
        'Architecture Python Flask côté backend, Leaflet.js pour la carte dynamique et MySQL pour la persistance.',
        'Modélisation de données et prototypage sur Figma.',
        'Filtres multicritères dynamiques pour régions, types de diplômes et labels Qualiopi/RNCP.',
        'Formulaires responsives, modération par rôles et conteneurisation Docker avec CI/CD automatisée sur GitHub.',
      ],
      technologies: ['Python', 'Flask', 'Leaflet.js', 'MySQL', 'Figma', 'Docker', 'GitHub Actions'],
      result:
        "Livraison d'un outil métier complet et exploitable, du besoin initial jusqu'à l'intégration finale sur CMS.",
      accent: 'blue',
    },
    {
      title: "Projet de fin d'études BUT3 - EduMate",
      subtitle: 'Co-concepteur et développeur principal - Binôme avec Uyen Nguyen',
      mission:
        "Création d'une plateforme d'enseignement coopératif et d'échange de compétences inter-étudiants.",
      details: [
        'Architecture découpée en microservices indépendants pour la version web et la version mobile native.',
        'Stack React / React Native, Node.js et TypeScript pour une base moderne et réutilisable.',
        'Système de crédits virtuels sécurisé par une infrastructure Blockchain pour le troc de compétences sans transaction financière.',
        "Module d'IA basé sur LLM pour les recommandations pédagogiques, les évaluations et les correspondances de compétences.",
      ],
      technologies: ['React', 'React Native', 'Node.js', 'TypeScript', 'Blockchain', 'LLM', 'Docker Compose', 'GitHub Actions'],
      result:
        'Projet vitrine démontrant une capacité à concevoir un produit distribué, automatisé et orienté valeur utilisateur.',
      accent: 'violet',
    },
  ],
  skills: [
    {
      name: 'Développer une application',
      summary:
        "J'ai appris à concevoir et déployer une application complète, robuste et adaptée à plusieurs supports à partir des besoins du client.",
      evidence: [
        "EduMate m'a amené à concevoir en même temps une version web et une version mobile dans une architecture microservices.",
        "À la DGFiP, j'ai travaillé sur une application critique d'envergure nationale en respectant des standards d'État stricts.",
        "Chez THEMAA, j'ai livré un produit de bout en bout, du besoin métier jusqu'à l'intégration finale sur le CMS.",
      ],
    },
    {
      name: 'Analyser et optimiser une application',
      summary:
        "J'ai appris à analyser, modéliser et optimiser des architectures logicielles complexes pour répondre à un besoin performant et sécurisé.",
      evidence: [
        "À la DGFiP, la rétro-ingénierie du legacy PHP et des batchs m'a permis de cartographier les règles de gestion et de concevoir une cible Spring Boot claire.",
        "EduMate m'a demandé de travailler sur des correspondances plus pertinentes grâce à l'IA et sur des structures légères pour la scalabilité.",
        "Chez THEMAA, j'ai optimisé les filtres côté client pour garder une carte fluide malgré de nombreux marqueurs.",
      ],
    },
    {
      name: 'Travailler avec une équipe informatique',
      summary:
        "J'ai appris à situer mon rôle dans une équipe informatique, coordonner des actions et utiliser des méthodes de travail structurées pour garantir la qualité du produit livré.",
      evidence: [
        "À la DGFiP, j'ai travaillé avec des acteurs métiers, OPS et ergonomes en suivant Jira, Confluence, Draw.io et les Merge Requests GitLab.",
        "EduMate m'a amené à travailler en binôme avec une démarche Scrum et collaboratif avec par GitHub.",
        "Chez THEMAA, le travail en binôme partagée a été rythmé par des retours fonctionnels réguliers et des livrables concrets.",
      ],
    },
    {
      name: 'Manager un projet informatique',
      summary:
        "J'ai appris à organiser le travail, suivre les étapes et garder une vision claire des priorités sur des projets concrets.",
      evidence: [
        'Sur EduMate, la répartition des tâches et le suivi des sprints ont structuré notre progression.',
        "À la DGFiP, le suivi sur Jira et Confluence m'a aidé à garder une vision claire des étapes du projet.",
        "Chez THEMAA, j'ai tenu un rythme de travail régulier pour livrer une application complète dans les délais.",
      ],
    },
  ],
}
