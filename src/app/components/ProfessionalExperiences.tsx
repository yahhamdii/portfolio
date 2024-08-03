const ProfessionalExperiences = () => {

    interface Experience {
        poste: string;
        societe: string;
        periode: string;
        description: string;
        tasks: string[];
        techno: string[];
        id: number;
      }
      
      const experiences :  Experience[] = [
        {
          poste: "Ingénieur d'étude",
          societe: "OGF",
          periode: "Juin 2023 - février 2024",
          description: "Refonte du site web pfg.fr, réduisant les temps de chargement. Conception et développement d’une application configurateur marbrerie innovant pour les conseillers, augmentant les ventes",
          tasks: [
            "Conception et implémentation des composants UI réutilisables avec Reactjs",
            "Développement des pages dynamiques et statiques en utilisant Next.js, améliorant les performances et le SEO",
            "Consommation des APIs RESTful gérant les états globaux avec Context API",
            "Optimisation des performances des applications web avec le code splitting, lazy loading, et pré-rendu",
            "Écriture des tests unitaires et d'intégration avec Jest et React Testing Library",
            "Participation aux revues de code et collaboration avec les équipes backend et UX/UI",
            "Identification et correction des bugs, utilisant Azure devops pour la gestion des tickets",
            "Résolution des problématiques de performance pour assurer des temps de réponse",
            "Respect des délais stricts avec une capacité à gérer plusieurs priorités simultanément"
          ],
          techno: ["Nextjs", "reactjs", "tailwind", "php laravel", "microsoft azure"],
          id: 1
        },
        {
          poste: "Ingénieur d'étude",
          societe: "Symolia Technologie",
          periode: "Novembre 2022 - Avril 2023",
          description: "Piloter la migration des applications vers Docker, réduisant les coûts d'infrastructure",
          tasks: [
            "Mise en place des pipelines CI/CD avec tests automatisés, augmentant la rapidité des déploiements",
            "Formation de l'équipe sur les nouvelles technologies DevOps, améliorant la productivité et la sécurité des applications",
            "Conception et développement des POC pour valider de nouvelles idées et technologies",
            "Respecter les normes de qualité en vigueur au numérique",
            "Monitoring et suivi des performances des différents livrables",
            "Correction des bugs et participation à la rédaction de post-mortem pour améliorer les processus"
          ],
          techno: ["Docker", "Git", "react js", "nodejs", "nestjs"],
          id: 2
        },
        {
          poste: "Développeur full stack",
          societe: "OYEZ : FOX INTELLIGENCE",
          periode: "Mai 2022 – Septembre 2022",
          description: "Développé des API robustes pour les applications analytiques, facilitant l'intégration de données externes.",
          tasks: [
            "Optimiser les pipelines CI/CD, réduisant les temps de déploiement",
            "Implémenter des mesures de sécurité avancées, renforçant l'intégrité des données",
            "Rédiger et faire évoluer les différentes documentations techniques",
            "Participer aux rituels Agile, comités de suivi et ateliers techniques",
            "Accompagner l’équipe dans la veille technologique pour rester à la pointe des innovations"
          ],
          techno: ["Nodejs", "API RESTful", "GraphQL", "Docker", "gitlab"],
          id: 3
        },
        {
          poste: "Développeur full stack",
          societe: "Oyez : VGF (Volkswagen Group France)",
          periode: "Octobre 2021 – Avril 2022",
          description: "Conception et développement le site E-commerce VGF, améliorant l'expérience utilisateur et augmentant le taux de conversion.",
          tasks: [
            "Intégrer les données de Pimcore à Algolia, améliorant la recherche de produits",
            "Collaborer avec les équipes de design et de produit pour créer une interface utilisateur intuitive",
            "Concevoir et développer des connecteurs et middlewares pour l'interface avec des services internes et tiers"
          ],
          techno: ["Algolia", "pimcore", "next js", "reactjs", "nodejs", "postgresql", "prisma", "bitbucket"],
          id: 4
        },
        {
          poste: "Développeur full stack",
          societe: "Oyez : AAG (Alliance Automotive Group)",
          periode: "Janvier 2021 – Septembre 2021",
          description: "Maintenir et évoluer la plateforme AAG, réduisant les erreurs de traitement",
          tasks: [
            "Développer des fonctionnalités clé pour améliorer l'efficacité du traitement des devis et factures via OCR",
            "Monitorer et suivre les performances des applications",
            "Participer à l’accompagnement et à la veille technologique de l’équipe",
            "Développer des fonctions nécessaires selon les problèmes rencontrés"
          ],
          techno: ["Nest Js", "NodeJS", "Javascript ES6", "ReactJS", "bitbucket", "Agile/ Scrum", "fireBase", "GCP", "bitbucket"],
          id: 5
        },
        {
          poste: "Développeur full stack",
          societe: "Oyez : Scope Renault",
          periode: "Juillet 2020 – Décembre 2020",
          description: "Développer une application web pour l'assistance client automatisée, réduisant les coûts de support.",
          tasks: [
            "Analyser et concevoir des solutions techniques et de l’architecture de l’application",
            "Développer de l’interface web",
            "Gestion des Apis REST avec l’application",
            "Utiliser les bonnes pratiques du web et les dernières nouveautés du Reactjs (Hooks, Context...)",
            "Rédiger les documentations sur notion"
          ],
          techno: ["Strapi", "Reactjs", "Graphql", "Javascript ES6", "HTML5/CSS3", "bitbucket", "Agile/ Scrum"],
          id: 6
        },
        {
          poste: "Développeur full stack",
          societe: "Oyez : E-Leclerc",
          periode: "Janvier 2020 – Juin 2020",
          description: "Refonte des interfaces web du site e.leclerc, améliorant la satisfaction client",
          tasks: [
            "Développer et optimiser des modules réutilisables, accélérant les cycles de développement",
            "Concevoir et déployer des architectures sécurisées pour les applications web",
            "Implémenter des interfaces graphiques",
            "Corriger les bugs et optimisation du code avec l’utilisation des bonnes pratiques du web (code review)"
          ],
          techno: ["TypeScript", "Reactjs", "Nodejs", "Graphql", "API REST", "CSS3", "ES6/7", "bitbucket", "Agile/ Scrum"],
          id: 7
        },
        {
          poste: "Développeur full stack",
          societe: "OYEZ : COMMANDE.COM",
          periode: "Juin 2018 – Décembre 2019",
          description: "Développer la plateforme B2B commande.com, augmentant l'efficacité des commandes.",
          tasks: [
            "Concevoir des plugins personnalisés en PHP, ajoutant des fonctionnalités critiques à la plateforme",
            "Développer des modules de communication avec l’ETL en nodejs",
            "Concevoir la base des données"
          ],
          techno: ["PHP Symfony", "Reactjs", "Redux", "Node", "API REST", "MySQL", "MongoDB", "HTML 5", "CSS3", "jest", "JAVASCRIPT ES6", "Bitbucket", "Ubuntu", "Agile/ Scrum"],
          id: 8
        },
        {
          poste: " Developpeur web",
          societe: "LTM (Livraison Transport Meuble)",
          periode: "Octobre 2015 – Juin 2018",
          description: "Création des applications mobiles internes dans le contexte de la livraison.",
          tasks: [
            "Développer des applications mobiles internes pour la livraison, améliorant la logistique interne",
            "Concevoir et suivre les architectures des applications et bases de données",
            "Participer activement aux rituels Agile et comités de suivi"
          ],
          techno: ["PHP", "Symfony2", "twig", "mysql", "sqlite", "cordova", "javascript", "jquery", "Ajax", "git"],
          id: 9
        }
      ];
      
      
  return (
    <>
      <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
        Expériences Professionnelles
      </h2>
      {experiences.map((experience) => (
  <div className="mt-4" key={experience.id}>
    <h3 className="text-xl font-semibold">{experience.poste}</h3>
    <p className="text-sm text-gray-600">{experience.societe} : {experience.periode}</p>
    <p className="text-sm mt-2">
      {experience.description}
    </p>
    <p className="font-black">Missions :</p>
    <ul className="text-xs mt-2">
      {experience.tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
    <p className="font-black">Environnement technique : </p>
    <p className="text-xs mt-2">
    {experience.techno.join(', ')} </p>
  </div>
))}

    </>
  );
};
export default ProfessionalExperiences;
