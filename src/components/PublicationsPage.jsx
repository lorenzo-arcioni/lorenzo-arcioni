import React from 'react';
import { FileText, ExternalLink, ArrowLeft } from 'lucide-react';

const PublicationsPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4 sm:mb-6 group text-sm sm:text-base"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            Torna alla home
          </button>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="p-2.5 sm:p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl shadow-lg">
              <FileText className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
              Pubblicazioni
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 sm:ml-20">
            I miei contributi alla ricerca scientifica in bioinformatica e HPC
          </p>
        </div>

        {/* Publication Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
          <div className="relative h-40 sm:h-56 md:h-64 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-24 sm:w-40 h-24 sm:h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-32 sm:w-60 h-32 sm:h-60 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="relative h-full flex items-center justify-center p-4 sm:p-8">
              <div className="text-center text-white">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold">BMC Bioinformatics</p>
                <p className="text-sm sm:text-base md:text-lg opacity-90">2024</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight">
              HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation
            </h2>
            
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 rounded-full">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-blue-800 font-semibold text-xs sm:text-sm">Peer-Reviewed</span>
              </div>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-800 rounded-full font-semibold text-xs sm:text-sm">
                Open Access
              </span>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Un tool innovativo per l'annotazione parallela di trascrittomi che sfrutta architetture 
              HPC per ridurre i tempi di elaborazione da giorni a ore, mantenendo alta accuratezza nei risultati.
            </p>
            
            {/* Key Points */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Punti chiave della ricerca</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Riduzione drastica dei tempi di elaborazione grazie al parallelismo HPC</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Sistema a code per gestione ottimizzata delle risorse computazionali</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Integrazione con strumenti di annotazione standard (Diamond, BLAST)</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Testato su supercomputer Leonardo e Galileo100 del CINECA</span>
                </li>
              </ul>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-800 rounded-full font-semibold text-xs sm:text-sm">
                Bioinformatica
              </span>
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-800 rounded-full font-semibold text-xs sm:text-sm">
                HPC
              </span>
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-purple-100 text-purple-800 rounded-full font-semibold text-xs sm:text-sm">
                Transcriptomics
              </span>
              <span className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-800 rounded-full font-semibold text-xs sm:text-sm">
                Parallel Computing
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a 
                href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-024-05887-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg"
              >
                Leggi la pubblicazione
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              
              <a 
                href="https://github.com/lorenzo-arcioni/HPC-T-Annotator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-blue-500 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base md:text-lg"
              >
                Codice su GitHub
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
          <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center leading-relaxed">
            <span className="font-bold">Citazione:</span> Arcioni, L., Barghini, E., Giordani, T. et al. 
            HPC-T-Annotator: an HPC tool for de novo transcriptome assembly annotation. 
            BMC Bioinformatics 25, 267 (2024).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;