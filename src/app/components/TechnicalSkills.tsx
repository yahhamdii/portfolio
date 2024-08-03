interface TechnicalSkill {
    category: string;
    skills: string[];
  }
  
  const technicalSkills: TechnicalSkill[] = [
    {
      category: "Back-end et Front-end",
      skills: ["Nodejs (nestjs, nextjs,expressjs)", "Reactjs", "Nextjs"]
    },
    {
      category: "Bases de données",
      skills: ["MySQL", "PostgresQL", "MongoDB", "firebase"]
    },
    {
      category: "DevOps",
      skills: ["Docker", "CI/CD", "Gitlab", "GIT", "Bitbucket"]
    },
    {
      category: "Test",
      skills: ["Cypress", "Tests unitaires et d'intégration"]
    },
    {
      category: "Méthodologies",
      skills: ["Agile (Scrum)"]
    },
    {
      category: "Documentation",
      skills: ["Confluence", "Notion"]
    },
    {
      category: "Gestion de projet",
      skills: ["Jira", "Azure DevOps"]
    }
  ];
  
  const TechnicalSkills: React.FC = () => {
    return (
      <>
        <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
          Compétences technique
        </h2>
        <div>
          {technicalSkills.map((section, index) => (
            <p className="text-xs" key={index}>
              <strong>{section.category} :</strong> {section.skills.join(', ')}
            </p>
          ))}
        </div>
      </>
    );
  };
  
  export default TechnicalSkills;
  