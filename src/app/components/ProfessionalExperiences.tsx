const ProfessionalExperiences = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
        Expériences Professionnelles
      </h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Ingénieur d'étude</h3>
        <p className="text-sm text-gray-600">OGF : Juin 2023 - février 2024</p>
        <p className="text-sm mt-2">
          Refonte du site web pfg.fr, réduisant les temps de chargement de 30%.
          Conception et développement d’une application configurateur marbrerie
          innovant pour les conseillers, augmentant les ventes de 15%.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Ingénieur d'étude</h3>
        <p className="text-sm text-gray-600">
          Symolia Technologie : Novembre 2022 - Avril 2023
        </p>
        <p className="text-sm mt-2">
          Piloter la migration des applications vers Docker, réduisant les coûts
          d'infrastructure de 25%.
        </p>
      </div>
    </>
  );
};
export default ProfessionalExperiences;
