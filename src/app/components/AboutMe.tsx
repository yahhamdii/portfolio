import React from 'react';

type Section = {
    id: number;
    content: string;
    className: string;
}

const sections: Section[] = [
    { id: 1, content: 'Hamdi YAHYAOUI', className: 'text-2xl font-semibold text-blue-900' },
    { id: 2, content: "8 ans d'expérience, Développeur Full stack NodeJs/React", className: 'text-sm font-semibold text-blue-900' },
    { id: 3, content: "Développeur Full Stack avec 8 ans d'expérience dans la conception et la mise en œuvre de solutions web innovantes. Expert en JavaScript et technologies associées, spécialisé dans le développement d'applications robustes et performantes. Proactif et orienté résultats, je m'adapte rapidement aux nouvelles technologies et méthodologies, et je m'épanouis dans des environnements collaboratifs et dynamiques.", className: 'text-xs mt-2 font-sans' },
];

const AboutMe: React.FC = () => {
    return (
        <>
            {sections.map((section) => (
                <p key={section.id} className={section.className}>
                    {section.content}
                </p>
            ))}
        </>
    );
}

export default AboutMe;
