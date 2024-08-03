import React from 'react';

type Formation = {
    id: number;
    title: string;
    period: string;
    institution: string;
}

const formations: Formation[] = [
    {
        id: 1,
        title: 'Master Informatique de Gestion - Spécialité Commerce Électronique',
        period: '2011 - 2013',
        institution: 'Université de Jendouba - Tunis'
    },
    {
        id: 2,
        title: 'Licence fondamentale en informatique de gestion',
        period: '2007 - 2010',
        institution: 'Université de Jendouba - Tunis'
    }
];

const Training: React.FC = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
                Formations
            </h2>
            {formations.map((formation) => (
                <div key={formation.id} className="mt-4">
                    <h3 className="text-xl font-semibold">
                        {formation.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {formation.period}, {formation.institution}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Training;
