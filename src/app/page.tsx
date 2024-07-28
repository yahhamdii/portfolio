import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Portfolio - Hamdi YAHYAOUI</title>
        <meta
          name="description"
          content="Portfolio de Hamdi YAHYAOUI, Chargé de Communication."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full mx-4 p-6">
        <div className="flex flex-col md:flex-row">
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
              <p className="text-sm">Trilingue : Français, Anglais, Arabe </p>
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
          <div className="md:w-2/3 bg-white p-4 rounded-lg md:rounded-l-none">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-blue-900">
                Hamdi YAHYAOUI
              </h2>
              <p className="text-sm font-semibold text-blue-900">
                8 ans d'expérience, Développeur Full stack NodeJs/React
              </p>
              <p className="text-xs mt-2 font-sans">
                Développeur Full Stack avec 8 ans d'expérience dans la
                conception et la mise en œuvre de solutions web innovantes.
                Expert en JavaScript et technologies associées, spécialisé dans
                le développement d'applications robustes et performantes.
                Proactif et orienté résultats, je m'adapte rapidement aux
                nouvelles technologies et méthodologies, et je m'épanouis dans
                des environnements collaboratifs et dynamiques.
              </p>

              <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
                Compétences fonctionnelle
              </h2>
              <div className="text-xs font-sans">
                <p>
                  ● Création des interfaces attrayantes, intuitives et réactives
                </p>
                <p>
                  {" "}
                  ● Expertise dans la création de SPA pour offrir une expérience
                  utilisateur fluide sans rechargement de page.
                </p>
                <p>
                  ● Connaissance des principes de design UX pour améliorer
                  l'expérience utilisateur
                </p>
                <p>
                  ● Création d'APIs RESTful et GraphQL robustes et sécurisées.
                </p>
                <p>
                  ● Gestion des authentifications, autorisations et contrôle
                  d'accès.
                </p>
                <p>
                  ● Connaissance approfondie des bases de données relationnelles
                  et NoSQL
                </p>
                <p>
                  ● Compétence en ORM (Object-Relational Mapping) avec des
                  outils comme Prisma, Sequelize, Doctrine.
                </p>
                <p>
                  ● Mise en place de pipelines CI/CD pour automatiser les tests
                  et les déploiements
                </p>
                <p>
                  ● Connaissance des pratiques DevOps pour l'intégration et le
                  déploiement continus.
                </p>
                <p>
                  ● Utilisation de Docker pour la création et la gestion de
                  conteneurs.
                </p>
                <p>● Maîtrise des méthodologies Agile (Scrum, Kanban)</p>
                <p>
                  ● Capacité à animer des workshops, à faire des présentations
                  techniques, et à former des équipes.
                </p>
                <p>
                  ● Expertise dans les tests unitaires, d'intégration et
                  end-to-end
                </p>
                <p>
                  ● Connaissance des pratiques de refactoring pour maintenir un
                  code propre et maintenable.
                </p>
                <p>
                  ● Connaissance des mécanismes d'authentification et
                  d'autorisation sécurisés (OAuth, JWT)
                </p>
                <p>
                  ● Capacité à analyser et à résoudre rapidement les problèmes
                  complexes rencontrés lors du développement.
                </p>
              </div>
              <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
                Compétences technique
              </h2>
              <div>
                <p className="text-xs">
                  Back-end et Front-end : Nodejs (nestjs, nextjs,expressjs),
                  Reactjs, Nextjs BASES DE DONNÉES : MySQL,PostgresQL, MongoDB,
                  firebase DEVOPS : Docker, CI/CD, Gitlab, GIT, Bitbucket Test :
                  Cypress, Tests unitaires et d'intégration Méthodologies :
                  Agile (Scrum) Documentation : Confluence, Notion Gestion de
                  projet : Jira, Azure DevOps
                </p>
              </div>
              <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
                Expériences Professionnelles
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Ingénieur d'étude</h3>
                <p className="text-sm text-gray-600">
                  OGF : Juin 2023 - février 2024
                </p>
                <p className="text-sm mt-2">
                  Refonte du site web pfg.fr, réduisant les temps de chargement
                  de 30%. Conception et développement d’une application
                  configurateur marbrerie innovant pour les conseillers,
                  augmentant les ventes de 15%.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Ingénieur d'étude</h3>
                <p className="text-sm text-gray-600">
                  Symolia Technologie : Novembre 2022 - Avril 2023
                </p>
                <p className="text-sm mt-2">
                  Piloter la migration des applications vers Docker, réduisant
                  les coûts d'infrastructure de 25%.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold bg-blue-900 text-white mt-4">
                Formations
              </h2>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  Master Informatique de Gestion- Spécialité Commerce
                  Électronique{" "}
                </h3>
                <p className="text-sm text-gray-600">
                  2011 - 2013, Université de Jendouba - Tunis
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  Licence fondamentale en informatique de gestion{" "}
                </h3>
                <p className="text-sm text-gray-600">
                  2007 - 2010, Université de Jendouba - Tunis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
