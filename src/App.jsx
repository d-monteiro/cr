import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

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
            <div className="text-gray-500 mb-4">Icon</div>
            <h3 className="font-bold text-lg">Gestão <br /> Institucional</h3>
            <p className="text-gray-600 mt-2">
              Coordenar a eleição para Diretor da FEUP e aprovar a reorganização interna e alterações estruturais da instituição.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-64">
            <div className="text-gray-500 mb-4">Icon</div>
            <h3 className="font-bold text-lg">Supervisão <br /> e Avaliação</h3>
            <p className="text-gray-600 mt-2">
              Apreciar atos do Diretor e do Conselho Executivo, promovendo uma gestão responsável e transparente.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <div className="text-gray-500 mb-4">Icon</div>
            <h3 className="font-bold text-lg">Desenvolvimento Estratégico</h3>
            <p className="text-gray-600 mt-2">
              Propor iniciativas para melhorar o funcionamento da FEUP e decidir sobre medidas em unidades de investigação.
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
              <p className="text-gray-600 mt-2">
                Criar uma FEUP + Inclusiva.
              </p>
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex items-center bg-blue-100 p-8 rounded-lg shadow-md">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-blue-600">Promover a Transparência</h3>
              <p className="text-gray-600 mt-2">
                Meritocracia e Abertura.
              </p>
            </div>
            <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
