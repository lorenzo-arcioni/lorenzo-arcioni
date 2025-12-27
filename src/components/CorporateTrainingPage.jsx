import React from 'react';
import { Building2, ArrowLeft, Users, MapPin, Clock, Target, CheckCircle, Briefcase, Zap } from 'lucide-react';

const CorporateTrainingPage = ({ onBack, onCourseSelect }) => {
  const trainingOptions = [
    {
      id: 'workshop-python-avanzato',
      title: 'Workshop Python Avanzato',
      description: 'Approfondimento su Python per Data Science: pandas, numpy, gestione dati complessi e best practices.',
      duration: '1-2 giorni',
      audience: 'Developer, Data Analyst',
      topics: ['Pandas avanzato', 'NumPy', 'Data Cleaning', 'Performance optimization'],
      icon: '🐍'
    },
    {
      id: 'workshop-ml-fundamentals',
      title: 'Machine Learning Fundamentals',
      description: 'Introduzione pratica al Machine Learning: algoritmi supervisionati, unsupervised, valutazione modelli.',
      duration: '2-3 giorni',
      audience: 'Team tecnici, Manager',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Scikit-learn'],
      icon: '🤖'
    },
    {
      id: 'workshop-deep-learning',
      title: 'Deep Learning & Neural Networks',
      description: 'Corso avanzato su reti neurali, CNN, RNN e applicazioni pratiche con TensorFlow/PyTorch.',
      duration: '3-5 giorni',
      audience: 'Data Scientists, ML Engineers',
      topics: ['Neural Networks', 'CNN', 'RNN', 'Transfer Learning'],
      icon: '🧠'
    },
    {
      id: 'workshop-data-science-business',
      title: 'Data Science per il Business',
      description: 'Come tradurre dati in decisioni strategiche: analisi, visualizzazione e comunicazione efficace.',
      duration: '1 giorno',
      audience: 'Manager, Business Analyst',
      topics: ['Business Analytics', 'Data Visualization', 'KPI', 'Storytelling con i dati'],
      icon: '📊'
    },
    {
      id: 'workshop-mlops',
      title: 'MLOps & Production ML',
      description: 'Best practices per portare modelli ML in produzione: deployment, monitoring, versioning.',
      duration: '2 giorni',
      audience: 'ML Engineers, DevOps',
      topics: ['Model Deployment', 'CI/CD per ML', 'Monitoring', 'MLflow'],
      icon: '⚙️'
    },
    {
      id: 'workshop-bioinformatics-hpc',
      title: 'Bioinformatics & HPC',
      description: 'Analisi di dati biologici su larga scala con tecniche di High Performance Computing.',
      duration: '2-3 giorni',
      audience: 'Ricercatori, Bioinformatici',
      topics: ['Transcriptomics', 'HPC', 'Parallel Computing', 'Data Analysis'],
      icon: '🧬'
    }
  ];

  const modalities = [
    {
      title: 'In Presenza',
      icon: MapPin,
      description: 'Formazione presso la vostra sede con massima interazione',
      features: ['Ambiente familiare', 'Team building', 'Hands-on immediato']
    },
    {
      title: 'Online Live',
      icon: Zap,
      description: 'Sessioni sincrone via videocall con interazione real-time',
      features: ['Flessibilità geografica', 'Recording inclusi', 'Q&A in tempo reale']
    },
    {
      title: 'Ibrido',
      icon: Briefcase,
      description: 'Mix di sessioni in presenza e online per massima flessibilità',
      features: ['Best of both', 'Adattabile', 'Follow-up online']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
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
            <div className="p-2.5 sm:p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg">
              <Building2 className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
              Formazione Aziendale
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 sm:ml-20">
            Workshop e percorsi formativi su misura per la tua organizzazione
          </p>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 sm:p-8 md:p-10 text-white mb-8 sm:mb-12 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Perché scegliere la mia formazione aziendale?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-blue-50 leading-relaxed">
            Non offro semplici lezioni teoriche: creo <strong>esperienze formative intensive</strong> dove 
            il tuo team acquisisce competenze concrete, immediatamente applicabili. Ogni corso è personalizzato 
            sulle esigenze specifiche della tua azienda, con un approccio pratico che bilancia teoria solida 
            e hands-on intensivo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Target className="w-8 h-8 flex-shrink-0" />
              <span className="font-semibold">Contenuti su misura</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Users className="w-8 h-8 flex-shrink-0" />
              <span className="font-semibold">Piccoli gruppi</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Zap className="w-8 h-8 flex-shrink-0" />
              <span className="font-semibold">Risultati rapidi</span>
            </div>
          </div>
        </div>

        {/* Modalities */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Modalità di Erogazione
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalities.map((modality, index) => {
              const Icon = modality.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{modality.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{modality.description}</p>
                  <ul className="space-y-2">
                    {modality.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Options */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Workshop e Percorsi Disponibili
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingOptions.map((training, index) => (
              <div key={index} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-5xl">{training.icon}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{training.title}</h3>
                  </div>
                  <p className="text-blue-50">{training.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">{training.audience}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">Argomenti principali:</p>
                    <div className="flex flex-wrap gap-2">
                      {training.topics.map((topic, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => onCourseSelect(training.id)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    Scopri di più
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 sm:p-8 md:p-10 text-center border-2 border-blue-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Interessato? Parliamone!
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Ogni azienda ha esigenze uniche. Contattami per discutere un programma formativo 
            personalizzato per il tuo team. Fissiamo una call conoscitiva gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lorenzo.arcioni2000@gmail.com?subject=Richiesta Formazione Aziendale"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Richiedi Preventivo
            </a>
            <a
              href="#contatti"
              onClick={(e) => {
                e.preventDefault();
                onBack();
                setTimeout(() => {
                  document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              Prenota Consulenza Gratuita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainingPage;