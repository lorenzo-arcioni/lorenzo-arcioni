import React from 'react';
import { Rocket, ExternalLink, ArrowLeft } from 'lucide-react';

const ProjectsPage = ({ onBack }) => {
  const projects = [
    {
      title: 'Identifying Age-Related Conditions (ICR)',
      badge: 'Top 2% Kaggle - Medaglia d\'Argento',
      badgeColor: 'bg-gray-300 text-gray-800',
      description: `"ICR" è una competizione su Kaggle. Sono orgoglioso di condividere che ho ottenuto una Medaglia d'Argento, classificandomi nella top 2% della classifica della competizione. L'obiettivo della competizione è utilizzare il machine learning per prevedere se una persona ha una delle tre specifiche condizioni mediche.`,
      image: '/images/project-icr.png',
      link: 'https://github.com/lorenzo-arcioni/icr-identify-age-related-conditions',
      tags: ['Machine Learning', 'Kaggle', 'Healthcare']
    },
    {
      title: 'Water Potability',
      description: `In questo studio, abbiamo condotto un'analisi di un dataset contenente varie caratteristiche relative alla qualità dell'acqua per determinarne la potabilità. Dopo aver analizzato il dataset, abbiamo utilizzato tecniche di machine learning per sviluppare un modello per predire la potabilità dell'acqua.`,
      image: '/images/project-water.jpg',
      link: 'https://github.com/lorenzo-arcioni/water-potability-analysis',
      tags: ['Data Analysis', 'Classification', 'Environmental']
    },
    {
      title: 'HPC-T-Annotator',
      description: `HPC-T-Annotator è uno strumento avanzato progettato per parallelizzare l'annotazione del trascrittoma, riducendo drasticamente i tempi di attesa. Utilizza un'architettura HPC per l'annotazione parallela delle trascrizioni, gestendo simultaneamente più attività tramite un sistema a code.`,
      image: '/images/project-hpc-t-annotator.jpeg',
      link: 'https://github.com/lorenzo-arcioni/HPC-T-Annotator',
      tags: ['HPC', 'Bioinformatics', 'Python']
    },
    {
      title: 'BioSwiftAnalytics',
      description: `BioSwiftAnalytics offre una suite di notebook Jupyter per semplificare l'analisi dei dati biologici. Grazie all'uso di Docker e Jupyter Notebook, garantisce un ambiente modulare e facilmente replicabile. Progettato per ricercatori, bioinformatici e biologi computazionali.`,
      image: '/images/project-bioswift.jpeg',
      link: 'https://github.com/lorenzo-arcioni/BioSwiftAnalytics',
      tags: ['Bioinformatics', 'Docker', 'Jupyter']
    },
    {
      title: 'Waste Image Classification',
      description: `Approccio avanzato basato sull'apprendimento profondo per la classificazione dei rifiuti utilizzando il Real Waste Dataset. Grazie a tecniche di transfer learning, data augmentation e CNN personalizzate, proponiamo soluzioni innovative per questa importante sfida.`,
      image: 'https://cdn-images-1.medium.com/max/800/1*iAOh8xMffpG_9Rzl2ZsYXw.png',
      link: 'https://github.com/lorenzo-arcioni/waste-image-classification',
      article: 'https://medium.com/@lorenzo.arcioni2000/deep-learning-per-la-classificazione-sul-dataset-realwaste-db6367f5ab19',
      tags: ['Deep Learning', 'CNN', 'Computer Vision']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-4 sm:mb-6 group text-sm sm:text-base"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            Torna alla home
          </button>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="p-2.5 sm:p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl shadow-lg">
              <Rocket className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
              I Miei Progetti
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 sm:ml-20">
            Una selezione dei miei progetti più significativi in Machine Learning e Data Science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.badge && (
                    <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  )}
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Vedi su GitHub
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    
                    {project.article && (
                      <a 
                        href={project.article}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-purple-500 text-purple-600 text-sm sm:text-base font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300"
                      >
                        Leggi articolo
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;