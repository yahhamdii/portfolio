import Head from "next/head";
import Left from "./components/Left";
import FunctionalCompetence from "./components/FonctionalCompetence";
import TechnicalSkills from "./components/TechnicalSkills";
import AboutMe from "./components/AboutMe";
import ProfessionalExperiences from './components/ProfessionalExperiences'
import Training from "./components/Training";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Portfolio - Hamdi YAHYAOUI</title>
        <meta
          name="description"
          content="Portfolio de Hamdi YAHYAOUI, Chargé de Communication."
        />
      </Head>

      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full mx-4 p-6">
        <div className="flex flex-col md:flex-row">
          <Left />
          <div className="md:w-2/3 bg-white p-4 rounded-lg md:rounded-l-none">
              <AboutMe />
              <FunctionalCompetence />
              <TechnicalSkills />
              <ProfessionalExperiences />
              <Training />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
