import Image from "next/image"
import React from "react";

type Info = {
  id: number;
  value: string;
  isLink?: boolean;
}

type Competence = {
  id: number;
  description: string;
}

const informations: Info[] = [
  { id: 1, value: '07.45.74.58.84' },
  { id: 2, value: 'hamdi_yahyaoui@yahoo.fr' },
  { id: 3, value: '1 rue bagno à ripoli Le Plessis Robinson' },
  { id: 4, value: 'https://www.linkedin.com/in/hamdi-yahyaoui-230ba153', isLink: true },
];

const competences: Competence[] = [
  { id: 1, description: 'Expertise dans le développement frontend avec ReactJS' },
  { id: 2, description: "Conception, implémentation et gestion d'APIs RESTful et GraphQL" },
  { id: 3, description: 'Optimisation des Performances et Référencement (SEO)' },
  { id: 4, description: "Mise en place de tests unitaires, d'intégration et end-to-end" },
  { id: 5, description: 'Collaboration et Animation des Workshops' },
];

const Left: React.FC = () => {
  return (
    <div className="md:w-1/3 bg-blue-900 text-white p-4 rounded-lg md:rounded-r-none">
      <Image
        src="/hamdi.jpg"
        alt="Profile Picture"
        className="rounded-full mx-auto"
        width={128}
        height={128}
      />
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold"></h1>

        <p className="text-sm">
          Autonome, Sens d’adaptation et du résultat, Déterminé, Travail en équipe
        </p>
        <p className="text-sm">Trilingue : Français, Anglais, Arabe</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Informations</h2>
        <ul className="text-sm mt-2">
          {informations.map((info) => (
            <li key={info.id}>
              {info.isLink ? (
                <a href={info.value} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              ) : (
                info.value
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Compétences</h2>
        <ul className="text-sm mt-2">
          {competences.map((competence) => (
            <li key={competence.id}>● {competence.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Left;
