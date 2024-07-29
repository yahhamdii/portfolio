import Image from "next/image"

const Left = () => {
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
          Autonome, Sens d’adaptation et du résultat, Déterminé, Travail
          en équipe
        </p>
        <p className="text-sm">Trilingue : Français, Anglais, Arabe</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Informations</h2>
        <ul className="text-sm mt-2">
          <li>07.45.74.58.84</li>
          <li>hamdi_yahyaoui@yahoo.fr</li>
          <li>1 rue bagno à ripoli Le Plessis Robinson</li>
          <li>
            <a href="https://www.linkedin.com/in/hamdi-yahyaoui-230ba153">
              https://www.linkedin.com/in/hamdi-yahyaoui-230ba153
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Compétences</h2>
        <ul className="text-sm mt-2">
          <li>Expertise dans le développement frontend avec ReactJS</li>
          <li>
            Conception, implémentation et gestion d'APIs RESTful et
            GraphQL
          </li>
          <li>Optimisation des Performances et Référencement (SEO)</li>
          <li>
            Mise en place de tests unitaires, d'intégration et end-to-end
          </li>
          <li>Collaboration et Animation des Workshops</li>
        </ul>
      </div>
    </div>
  );
}

export default Left;
