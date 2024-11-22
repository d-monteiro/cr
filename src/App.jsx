import { useState } from 'react'
import mainSvg from './assets/main.svg'
import logoSvg from './assets/logo.svg'
import clipBoardSvg from './assets/icons/clipboard.svg'
import gearSvg from './assets/icons/gear.svg'
import puzzleSvg from './assets/icons/puzzle.svg'
import vectorBackgroundSvg from './assets/VectorBackground.svg'
import rocketSvg from './assets/rocket.svg'
import megaPhoneSvg from './assets/megaPhone.svg'
import balloonSvg from './assets/balloon.svg'

function App() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <img
        src={logoSvg}
        alt="Example SVG"
        className="h-[49px] w-[129] absolute left top m-12"
      />
      <header className="flex justify-between items-center h-screen w-full py-16 px-24 bg-white">


      <div className="w-3/5">
        <h1 className="text-6xl font-medium text-gray-800">
          Transparência. <br />
          Inovação. <br />
          <span className="text-blue-600">Inclusão.</span>
        </h1>
      </div>
      <div className="w-3/5 flex space-x-2">
        <img src={mainSvg} alt="Example SVG" className="w-full h-auto" />
    </div>

    </header>

{/* Card Section */}
<section className="py-20">
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
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Supervisão e Avaliação
      </h3>
      <p
        className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#4D4D4D]"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Apreciar atos do Diretor e do Conselho Executivo, promovendo uma gestão responsável e transparente.
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
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Supervisão e Avaliação
      </h3>
      <p
        className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#4D4D4D]"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Apreciar atos do Diretor e do Conselho Executivo, promovendo uma gestão responsável e transparente.
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
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Supervisão e Avaliação
      </h3>
      <p
        className="text-[14px] leading-[20.94px] pt-5 pb-16 text-left text-[#4D4D4D]"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Apreciar atos do Diretor e do Conselho Executivo, promovendo uma gestão responsável e transparente.
      </p>

      <div className="border-t-[2px] border-black w-3/4 ml-auto"></div>
    </div>
  </div>
</section>



      {/* Mission Section */}

<section className="py-16 px-16 bg-gray-50">
  <h2 className="text-center text-2xl font-semibold mb-[10vh]">A nossa Missão</h2>
  
  {/* Mission Block 1 */}
  <div
    className="flex items-center bg-[#E7EEFF] pl-24 rounded-xl"
    style={{
      boxShadow: '-10px 5px 15px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div className="flex-1 pt-14">
      <h3
        className="font-[500] text-[3em] leading-[76px] text-[#1E5BFE] tracking-[-0.01em] text-justify"
        style={{
          fontFamily: 'Outfit, sans-serif',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
        }}
      >
        Modernizar a FEUP
      </h3>
      <p className="text-gray-600 mt-2 font-bold text-xl">Modernizar o Ensino</p>
      <p className="text-gray-600 mt-4">
        Elevar a qualidade de ensino da FEUP, alinhando-a aos padrões das <br />
        melhores universidades globais, promovendo excelência académica <br />
        e o sucesso profissional dos alunos, pensando no futuro.
      </p>
      <p className="text-gray-600 mt-10 font-bold text-xl">Fomentar a Inovação</p>
      <p className="text-gray-600 mt-4 mb-14">
        Ampliar os incentivos financeiros e a exposição dos estudantes a <br />
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
      boxShadow: '-10px 5px 15px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div className="flex-1 pt-14">
      <h3
        className="font-[500] text-[3em] leading-[76px] text-[#FFCE2F] tracking-[-0.01em] text-justify"
        style={{
          fontFamily: 'Outfit, sans-serif',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
        }}
      >
        Dar uma Voz aos Estudantes
      </h3>
      <p className="text-gray-600 mt-2 font-bold text-xl">Fortalecer a Representação</p>
      <p className="text-gray-600 mt-4">
        Trabalhar para amplificar a voz dos estudantes em todas as esferas <br />
        de decisão dentro da FEUP, garantindo que as suas preocupações <br />
        sejam ouvidas e resolvidas.
      </p>
      <p className="text-gray-600 mt-10 font-bold text-xl">Aumentar a Inclusão</p>
      <p className="text-gray-600 mt-4 mb-14">
        Criar oportunidades para que todos os estudantes, independentemente <br />
        do contexto, possam participar ativamente em iniciativas e atividades.
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
      boxShadow: '-10px 5px 15px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div className="flex-1 pt-14">
      <h3
        className="font-[500] text-[3em] leading-[76px] text-[#1E5BFE] tracking-[-0.01em] text-justify"
        style={{
          fontFamily: 'Outfit, sans-serif',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none',
        }}
      >
        Modernizar a FEUP
      </h3>
      <p className="text-gray-600 mt-2 font-bold text-xl">Modernizar o Ensino</p>
      <p className="text-gray-600 mt-4">
        Elevar a qualidade de ensino da FEUP, alinhando-a aos padrões das <br />
        melhores universidades globais, promovendo excelência académica <br />
        e o sucesso profissional dos alunos, pensando no futuro.
      </p>
      <p className="text-gray-600 mt-10 font-bold text-xl">Fomentar a Inovação</p>
      <p className="text-gray-600 mt-4 mb-14">
        Ampliar os incentivos financeiros e a exposição dos estudantes a <br />
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

    </div>
  )
}

export default App
