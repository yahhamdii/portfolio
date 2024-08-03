import React from 'react';

type Competence = {
    id: number;
    description: string;
}

const competences: Competence[] = [
    { id: 1, description: 'Création des interfaces attrayantes, intuitives et réactives' },
    { id: 2, description: 'Expertise dans la création de SPA pour offrir une expérience utilisateur fluide sans rechargement de page.' },
    { id: 3, description: "Connaissance des principes de design UX pour améliorer l'expérience utilisateur" },
    { id: 4, description: "Création d'APIs RESTful et GraphQL robustes et sécurisées." },
    { id: 5, description: 'Gestion des authentifications, autorisations et contrôle d’accès.' },
    { id: 6, description: 'Connaissance approfondie des bases de données relationnelles et NoSQL' },
    { id: 7, description: 'Compétence en ORM (Object-Relational Mapping) avec des outils comme Prisma, Sequelize, Doctrine.' },
    { id: 8, description: 'Mise en place de pipelines CI/CD pour automatiser les tests et les déploiements' },
    { id: 9, description: 'Connaissance des pratiques DevOps pour l’intégration et le déploiement continus.' },
    { id: 10, description: 'Utilisation de Docker pour la création et la gestion de conteneurs.' },
    { id: 11, description: 'Maîtrise des méthodologies Agile (Scrum, Kanban)' },
    { id: 12, description: 'Capacité à animer des workshops, à faire des présentations techniques, et à former des équipes.' },
    { id: 13, description: 'Expertise dans les tests unitaires, d’intégration et end-to-end' },
    { id: 14, description: 'Connaissance des pratiques de refactoring pour maintenir un code propre et maintenable.' },
    { id: 15, description: 'Connaissance des mécanismes d’authentification et d’autorisation sécurisés (OAuth, JWT)' },
    { id: 16, description: 'Capacité à analyser et à résoudre rapidement les problèmes complexes rencontrés lors du développement.' },
];

const FunctionalCompetence: React.FC = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
                Compétences fonctionnelle
            </h2>
            <div className="text-xs font-sans">
                {competences.map((competence) => (
                    <p key={competence.id}>● {competence.description}</p>
                ))}
            </div>
        </>
    );
}

export default FunctionalCompetence;
