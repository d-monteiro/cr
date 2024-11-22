import { useState } from 'react'

const teamMembers = [
  {
    name: "Pedro Marques",
    image: "/pedro.png?height=400&width=300",
    linkedin: "#"
  },
  {
    name: "Leandro Sampaio",
    image: "/leandro.png?height=400&width=300",
    linkedin: "#"
  },
  {
    name: "Mariana Almeida",
    image: "/mariana.png?height=400&width=300",
    linkedin: "#"
  },
  {
    name: "Duarte Monteiro",
    image: "/duarte.png?height=400&width=300",
    linkedin: "#"
  }
];


function App() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="flex justify-between items-center h-screen w-full py-16 px-24 bg-white">
      <div className="w-2/5">
        <h1 className="text-4xl font-bold">
          Transparência. <br />
          Inovação. <br />
          <span className="text-blue-600">Inclusão.</span>
        </h1>
      </div>
      <div className="w-3/5 flex space-x-2">
        <div className="w-1/4 h-64 bg-blue-600 rounded-lg"></div>
        <div className="w-1/4 h-64 bg-yellow-200 rounded-lg"></div>
        <div className="w-1/4 h-64 bg-blue-600 rounded-lg"></div>
        <div className="w-1/4 h-64 bg-yellow-200 rounded-lg"></div>
      </div>
      </header>


      {/* Card Section */}
      <section className="py-16">
        <h2 className="text-center text-2xl font-semibold mb-8">
          O que é o Conselho de Representantes?
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <div className="flex flex-col items-start text-gray-500 mb-4">
              <img src="/src/assets/icon1.png" alt="Icon" className="h-8 w-8 mb-2" />
              <h3 className="font-bold text-lg text-black">Gestão <br /> Institucional</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Coordenar a eleição para Diretor da FEUP e aprovar a reorganização interna e alterações estruturais da instituição.
            </p>
          </div>
          
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-64">
            <div className="flex flex-col items-start text-gray-500 mb-4">
              <img src="/src/assets/icon2.png" alt="Icon" className="h-8 w-8 mb-2" />
              <h3 className="font-bold text-lg text-black">Supervisão <br /> e Avaliação</h3>
            </div>
              <p className="text-gray-600 mt-2">
                Apreciar atos do Diretor e do Conselho Executivo, promovendo uma gestão responsável e transparente.
              </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <div className="flex flex-col items-start text-gray-500 mb-4">
              <img src="/src/assets/icon3.png" alt="Icon" className="h-8 w-8 mb-2" />
              <h3 className="font-bold text-lg text-black">Desenvolvimento Estratégico</h3>
            </div>
              <p className="text-gray-600 mt-2">
                Promover o desenvolvimento estratégico da instituição através de iniciativas inovadoras e sustentáveis.
              </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-16 bg-gray-50">
        <h2 className="text-center text-2xl font-semibold mb-8">A nossa Missão</h2>
        <div>
          <div className="flex items-center bg-blue-100 p-8 rounded-lg shadow-md">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-600">Modernizar a FEUP</h3>
              <p className="text-gray-600 mt-2 font-bold">
                Modernizar o Ensino
              </p>
              <p className="text-gray-600 mt-2">
                Elevar a qualidade de ensino da FEUP, alinhando-a aos padrões das <br /> melhores universidades globais, promovendo excelência académica <br /> e o sucesso profissional dos alunos, pensando no futuro.
              </p>
              <p className="text-gray-600 mt-2 font-bold">
                Fomentar a Inovação
              </p>
              <p className="text-gray-600 mt-2">
                Ampliar os incentivos financeiros e a exposição dos estudantes a <br /> projetos pioneiros, através de hackathons, impulsionando a <br /> criatividade, o impacto tecnológico e social.
              </p>
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex items-center bg-yellow-100 p-8 rounded-lg shadow-md">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-yellow-600">Dar uma Voz aos Estudantes</h3>
              <p className="text-gray-600 mt-2 font-bold">
                Criar uma FEUP + Inclusiva.
              </p>
              <p className="text-gray-600 mt-2 ">
                Promover uma representação próxima da realidade dos <br /> estudantes, disponibilizando um formulário de preenchimento aberto, <br /> que demonstra o nosso compromisso com a voz dos estudantes.
              </p>
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex items-center bg-blue-100 p-8 rounded-lg shadow-md">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-600">Promover a Transparência</h3>
              <p className="text-gray-600 mt-2 font-bold">
                Meritocracia
              </p>
              <p className="text-gray-600 mt-2">
                Promover a transparência dos processos  eleitorais das organizações estudantis. <br /> Quebrando os monopólios e práticas anti-democráticas.
              </p>
              <p className="text-gray-600 mt-2 font-bold">
                Abertura
              </p>
              <p className="text-gray-600 mt-2">
                Publicar uma  newsletter mensal enviada através de email <br /> institucional dinâmico, partilhando atualizações claras e objetivas <br /> sobre as nossas decis~pes e os seus impactos.
              </p>
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-white p-8">
      {/* Team Section */}
      <section className="container mx-auto flex items-center justify-between mb-32">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">
            2 de dezembro
          </h1>
          <p className="text-4xl font-bold text-blue-600">
            Vota A!
          </p>
        </div>
        <div>
          <img 
            src="/team.png?height=300&width=500" 
            alt="Team photo"
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Conhece a Equipa
        </h2>
        
        <div className="grid grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">{member.name}</h3>
              <a 
                href={member.linkedin}
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}

export default App
