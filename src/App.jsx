import { useState } from "react";
import mainSvg from "./assets/main.svg";
import logoSvg from "./assets/logo.svg";
import clipBoardSvg from "./assets/icons/clipboard.svg";
import gearSvg from "./assets/icons/gear.svg";
import puzzleSvg from "./assets/icons/puzzle.svg";
import vectorBackgroundSvg from "./assets/VectorBackground.svg";
import rocketSvg from "./assets/rocket.svg";
import megaPhoneSvg from "./assets/megaPhone.svg";
import balloonSvg from "./assets/balloon.svg";
import vectorBackgroundYellowSvg from "./assets/vectorBackgroundYellow.svg";
import teamImageSvg from "./assets/teamImage.svg";
import duarteSvg from './assets/duarte.svg'
import leandroSvg from './assets/leandro.svg'
import pedroSvg from './assets/pedro.svg'
import marianaSvg from './assets/mariana.svg'
import CarouselCr from "./components/carouselCr";
import CarouselMission from "./components/carouselMission";

const teamMembers = [
  {
    name: "Pedro Marques",
    image: pedroSvg,
    linkedin: "#",
  },
  {
    name: "Leandro Sampaio",
    image: leandroSvg,
    linkedin: "#",
  },
  {
    name: "Mariana Almeida",
    image: marianaSvg,
    linkedin: "#",
  },
  {
    name: "Duarte Monteiro",
    image: duarteSvg,
    linkedin: "#",
  },
];

function App() {
  return (
    <div className="bg-[#FBFAF9]">
      {/* Header Section */}
      <img
  src={logoSvg}
  alt="Example SVG"
  className="h-[6vh] w-auto absolute top left m-12 md:mx-20"
/>

<header className="flex flex-col md:flex-row md:justify-between md:items-center h-screen w-full py-16 md:px-24 bg-white">
  <div className="w-full md:w-3/5 text-left pt-24 md:pt-0 mx-12">
    <h1 className="text-5xl md:text-6xl font-medium text-gray-800 pt-8 md:pt-20">
      Transparência. <br />
      Inovação. <br />
      <span className="text-blue-600">Inclusão.</span>
    </h1>
  </div>
  <div className="w-full md:w-3/5 m-0 flex justify-center justify-items-center mt-16 relative">

  
  
  <img
    src={mainSvg}
    alt="Example SVG"
    className="w-4/5 md:w-full h-auto mx-auto p-0 relative z-1"
  />
</div>
<img
    src={vectorBackgroundYellowSvg}
    alt="Background"
    className="absolute bottom-0 right-0 w-[70vw] h-auto z-0 object-cover blur-xl md:hidden"
  />
</header>  

    <div className="w-full md:hidden h-[80vh]">
    <h2 className="text-center text-2xl font-semibold py-[7vh]">
          O que é o Conselho de Representantes?
        </h2>
    <CarouselCr></CarouselCr>
    </div>

      {/* Card Section */}
      <section className="py-20 md:block hidden">
        <h2 className="text-center text-2xl font-semibold mb-[15vh]">
          O que é o Conselho de Representantes?
        </h2>
        <div className="w-3/4 mx-auto flex justify-center space-x-24">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg border-b-[3px] w-1/3 relative">
            <img
              src={gearSvg}
              alt="Example SVG"
              className="absolute top-8 left-8 h-[51px] w-[51px]"
            />
            <h3
              className="text-[25px] leading-[30px] pt-20 text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Supervisão e Avaliação
            </h3>
            <p
              className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#4D4D4D]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Apreciar atos do Diretor e do Conselho Executivo, promovendo uma
              gestão responsável e transparente.
            </p>

            <div className="border-t-[2px] border-black w-3/4 ml-auto"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFF4D2] p-8 rounded-lg shadow-[10px_5px_10px_rgba(0,0,0,0.1)] border-b-[3px] w-1/3 relative">
            <img
              src={clipBoardSvg}
              alt="Example SVG"
              className="absolute top-8 left-8 h-[51px] w-[51px]"
            />
            <h3
              className="text-[25px] leading-[30px] pt-20 text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Supervisão e Avaliação
            </h3>
            <p
              className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#4D4D4D]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Apreciar atos do Diretor e do Conselho Executivo, promovendo uma
              gestão responsável e transparente.
            </p>

            <div className="border-t-[2px] border-[#FFC60D] w-3/4 ml-auto"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg border-b-[3px] w-1/3 relative">
            <img
              src={puzzleSvg}
              alt="Example SVG"
              className="absolute top-8 left-8 h-[51px] w-[51px]"
            />
            <h3
              className="text-[25px] leading-[30px] pt-20 text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Supervisão e Avaliação
            </h3>
            <p
              className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#4D4D4D]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Apreciar atos do Diretor e do Conselho Executivo, promovendo uma
              gestão responsável e transparente.
            </p>

            <div className="border-t-[2px] border-black w-3/4 ml-auto"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}

      <div className="w-full h-auto relative">
  <div className="w-full md:hidden h-auto pb-[7vh]">
    <h2 className="text-center text-2xl font-semibold py-[7vh]">
      A nossa Missão
    </h2>
    <CarouselMission />
  </div>
</div>


      <section className="py-16 px-16 bg-white md:block hidden">
        <h2 className="text-center text-2xl font-semibold my-[10vh]">
          A nossa Missão
        </h2>

        {/* Mission Block 1 */}
        <div
          className="flex items-center bg-[#E7EEFF] pl-24 rounded-xl"
          style={{
            boxShadow: "-10px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex-1 pt-14">
            <h3
              className="font-[500] text-[3em] leading-[76px] text-[#1E5BFE] tracking-[-0.01em] text-justify"
              style={{
                fontFamily: "Outfit, sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Modernizar a FEUP
            </h3>
            <p className="text-gray-600 mt-2 font-bold text-xl">
              Modernizar o Ensino
            </p>
            <p className="text-gray-600 mt-4">
              Elevar a qualidade de ensino da FEUP, alinhando-a aos padrões das{" "}
              <br />
              melhores universidades globais, promovendo excelência académica{" "}
              <br />e o sucesso profissional dos alunos, pensando no futuro.
            </p>
            <p className="text-gray-600 mt-10 font-bold text-xl">
              Fomentar a Inovação
            </p>
            <p className="text-gray-600 mt-4 mb-14">
              Ampliar os incentivos financeiros e a exposição dos estudantes a{" "}
              <br />
              projetos pioneiros, através de hackathons, impulsionando a <br />
              criatividade, o impacto tecnológico e social.
            </p>
          </div>
          <div className="relative w-1/2 h-[50vh] mx-auto">
            <img
              src={vectorBackgroundSvg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover blur-xl"
            />
            <img
              src={rocketSvg}
              alt="Foreground"
              className="absolute inset-0 m-auto w-auto h-4/5 object-contain z-10"
            />
            <div className="absolute bottom-[4vh] right-[2vw] border-t-[2px] border-[#1E5BFE] w-1/4"></div>
          </div>
        </div>

        {/* Mission Block 2 */}
        <div
          className="flex items-center bg-[#FFF4D2] pl-24 rounded-2xl"
          style={{
            boxShadow: "-10px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex-1 pt-14">
            <h3
              className="font-[500] text-[3em] leading-[76px] text-[#FFCE2F] "
              style={{
                fontFamily: "Outfit, sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Dar uma Voz aos Estudantes
            </h3>
            <p className="text-gray-600 mt-2 font-bold text-xl">
              Fortalecer a Representação
            </p>
            <p className="text-gray-600 mt-4">
              Trabalhar para amplificar a voz dos estudantes em todas as esferas{" "}
              <br />
              de decisão dentro da FEUP, garantindo que as suas preocupações{" "}
              <br />
              sejam ouvidas e resolvidas.
            </p>
            <p className="text-gray-600 mt-10 font-bold text-xl">
              Aumentar a Inclusão
            </p>
            <p className="text-gray-600 mt-4 mb-14">
              Criar oportunidades para que todos os estudantes,
              independentemente <br />
              do contexto, possam participar ativamente em iniciativas e
              atividades.
            </p>
          </div>
          <div className="relative w-1/2 h-[50vh] mx-auto">
            <img
              src={vectorBackgroundSvg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover blur-xl"
            />
            <img
              src={megaPhoneSvg}
              alt="Foreground"
              className="absolute inset-0 m-auto w-auto h-full object-contain z-10"
            />
            <div className="absolute bottom-[4vh] right-[2vw] border-t-[2px] border-[#FFCE2F] w-1/4"></div>
          </div>
        </div>

        {/* Mission Block 3 */}
        <div
          className="flex items-center bg-[#E7EEFF] pl-24 rounded-xl"
          style={{
            boxShadow: "-10px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex-1 pt-14">
            <h3
              className="font-[500] text-[3em] leading-[76px] text-[#1E5BFE] tracking-[-0.01em] text-justify"
              style={{
                fontFamily: "Outfit, sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Modernizar a FEUP
            </h3>
            <p className="text-gray-600 mt-2 font-bold text-xl">
              Modernizar o Ensino
            </p>
            <p className="text-gray-600 mt-4">
              Elevar a qualidade de ensino da FEUP, alinhando-a aos padrões das{" "}
              <br />
              melhores universidades globais, promovendo excelência académica{" "}
              <br />e o sucesso profissional dos alunos, pensando no futuro.
            </p>
            <p className="text-gray-600 mt-10 font-bold text-xl">
              Fomentar a Inovação
            </p>
            <p className="text-gray-600 mt-4 mb-14">
              Ampliar os incentivos financeiros e a exposição dos estudantes a{" "}
              <br />
              projetos pioneiros, através de hackathons, impulsionando a <br />
              criatividade, o impacto tecnológico e social.
            </p>
          </div>
          <div className="relative w-1/2 h-[50vh] mx-auto">
            <img
              src={vectorBackgroundSvg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover blur-xl"
            />
            <img
              src={balloonSvg}
              alt="Foreground"
              className="absolute inset-0 m-auto w-auto h-3/5 object-contain z-10"
            />
            <div className="absolute bottom-[4vh] right-[2vw] border-t-[2px] border-[#1E5BFE] w-1/4"></div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col md:flex-row items-center relative mt-[5vh]">
  <div className="relative md:w-4/5 w-full flex flex-col md:flex-row items-center w-5/6 mx-auto p-8 rounded-lg">
    {/* Background Image */}
    <div className="absolute inset-0 flex justify-center items-center z-0">
      <img
        src={vectorBackgroundYellowSvg}
        alt="Background"
        className="w-2/3 h-auto object-cover blur-xl"
      />
    </div>

    {/* Title Section */}
    <div className="w-full relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 pl-0 md:pl-8 mb-4 md:mb-0">
      <h1
        className="font-[500] text-[2.5em] md:text-[3.5em] leading-[40px] md:leading-[60px] tracking-[-0.01em]"
        style={{
          fontFamily: "Outfit, sans-serif",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        2 de dezembro
      </h1>
      <p
        className="font-[500] text-[2.5em] md:text-[3.5em] leading-[40px] md:leading-[60px] tracking-[-0.01em] text-blue-600"
        style={{
          fontFamily: "Outfit, sans-serif",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Vota A!
      </p>
    </div>

    {/* Image Section */}
    <div className="relative z-10 flex-shrink-0 w-full md:w-[60%]">
      <img
        src={teamImageSvg}
        alt="Team photo"
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
</section>

     {/* Team Section */}
<section className="container mx-auto pt-24">
  <h2 className="text-3xl font-bold text-center mb-12">
    Conhece a Equipa
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:pb-20 pb-[25vh] ">
   {teamMembers.map((member, index) => (
     <div
       key={index}
       className="text-center flex flex-col items-center w-4/5 mx-auto"
     >
       <img
         src={member.image}
         alt={member.name}
         className="h-full w-auto md:h-3/4 object-cover rounded-full"
       />
       <h3 className="font-medium text-lg md:mt-4 -mt-[2vh]">{member.name}</h3>
       <a
         href={member.linkedin}
         className="text-gray-600 hover:text-blue-600 text-sm mt-2"
       >
         LinkedIn
       </a>
     </div>
   ))}
 </div>

</section>

    </div>
  );
}

export default App;
