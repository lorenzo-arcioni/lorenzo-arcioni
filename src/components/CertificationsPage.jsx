import React from 'react';
import { Award, ExternalLink, ArrowLeft, Calendar, CheckCircle } from 'lucide-react';

const CertificationsPage = ({ onBack }) => {
  const certifications = [
    {
      title: 'Introduzione al Machine Learning',
      issuer: 'Kaggle',
      date: 'Feb 2023',
      link: 'https://drive.google.com/file/d/1_KthHpXzeT6ec5f_kKwvx20SOzrhyjc1/view',
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500',
      icon: '🤖',
      skills: ['Supervised Learning', 'Model Evaluation', 'Python']
    },
    {
      title: 'Pandas',
      issuer: 'Kaggle',
      date: 'Feb 2023',
      link: 'https://drive.google.com/file/d/13nl3T5cwl8_T8bcaqGSq5d11TTN6MVUv/view',
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-500',
      icon: '🐼',
      skills: ['Data Manipulation', 'Data Analysis', 'Python']
    },
    {
      title: 'Data Science for Bioinformatics',
      issuer: 'Deep Learning Italia',
      date: 'Gen 2023',
      link: '/images/lorenzo-arcioni-bio-certification.jpeg',
      color: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-500',
      icon: '🧬',
      skills: ['Bioinformatics', 'Data Science', 'Genomics']
    },
    {
      title: 'Fondamenti di Python',
      issuer: 'HackerRank',
      date: 'Set 2020',
      link: 'https://www.hackerrank.com/certificates/aa03010a7d90',
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-500',
      icon: '🐍',
      skills: ['Python', 'Programming', 'Data Structures']
    },
    {
      title: 'CISCO CCNA',
      issuer: 'Cisco Networking Academy',
      date: 'Set 2019',
      color: 'from-gray-500 to-gray-600',
      borderColor: 'border-gray-400',
      icon: '🌐',
      skills: ['Networking', 'TCP/IP', 'Routing']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold mb-4 sm:mb-6 group text-sm sm:text-base"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            Torna alla home
          </button>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="p-2.5 sm:p-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl shadow-lg">
              <Award className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
              Certificazioni
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 sm:ml-20">
            Le mie certificazioni professionali e riconoscimenti nel campo tech
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group border-l-4 sm:border-l-8 ${cert.borderColor}`}
            >
              {/* Header with gradient */}
              <div className={`relative h-24 sm:h-32 bg-gradient-to-r ${cert.color} overflow-hidden`}>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-3 sm:top-5 right-3 sm:right-5 w-12 sm:w-20 h-12 sm:h-20 bg-white rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 w-16 sm:w-32 h-16 sm:h-32 bg-white rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <span className="text-4xl sm:text-6xl transform group-hover:scale-125 transition-transform duration-500">
                    {cert.icon}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3 sm:mb-4">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <span className="font-semibold text-sm sm:text-base">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 mb-3 sm:mb-4">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Emesso {cert.date}</span>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Button */}
                {cert.link && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${cert.color} text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    Mostra credenziale
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 mb-1 sm:mb-2">5</div>
            <div className="text-sm sm:text-base text-gray-700 font-semibold">Certificazioni Ottenute</div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1 sm:mb-2">4</div>
            <div className="text-sm sm:text-base text-gray-700 font-semibold">Organizzazioni Riconosciute</div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-green-600 mb-1 sm:mb-2">2023</div>
            <div className="text-sm sm:text-base text-gray-700 font-semibold">Anno Ultima Certificazione</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;