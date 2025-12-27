import React from 'react';
import { Lightbulb, ArrowLeft, Code, Brain, LineChart, FileCode, Rocket, Shield, CheckCircle2 } from 'lucide-react';

const ConsultingPage = ({ onBack }) => {
  const services = [
    {
      title: 'Code Review & Ottimizzazione',
      icon: Code,
      description: 'Analisi approfondita del codice ML/Data Science con suggerimenti per performance, leggibilità e best practices.',
      features: [
        'Review completa del codice Python',
        'Ottimizzazione algoritmi e performance',
        'Refactoring con design patterns',
        'Documentazione e testing'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Architettura ML Systems',
      icon: Brain,
      description: 'Progettazione di architetture ML scalabili, dalla prototipazione al deployment in produzione.',
      features: [
        'Design architetturale end-to-end',
        'Scelta tech stack ottimale',
        'Scalabilità e performance',
        'MLOps best practices'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Analisi Dati & Strategia',
      icon: LineChart,
      description: 'Trasformo i tuoi dati in insight actionable per decisioni di business data-driven.',
      features: [
        'Analisi esplorativa (EDA)',
        'Dashboard e visualizzazioni',
        'Identificazione KPI rilevanti',
        'Report strategici'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sviluppo Progetti ML',
      icon: Rocket,
      description: 'Supporto hands-on nello sviluppo di progetti ML completi, dall\'idea al deploy.',
      features: [
        'Prototipazione rapida',
        'Feature engineering',
        'Model selection & tuning',
        'Deployment e monitoring'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Mentorship & Formazione 1-on-1',
      icon: Shield,
      description: 'Percorsi personalizzati di crescita professionale in ML e Data Science.',
      features: [
        'Sessioni individuali dedicate',
        'Piano di studio personalizzato',
        'Code review progetti personali',
        'Career guidance'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Revisione Paper & Ricerca',
      icon: FileCode,
      description: 'Supporto nella scrittura e revisione di paper scientifici in ambito ML e Bioinformatica.',
      features: [
        'Review metodologia e risultati',
        'Feedback su chiarezza espositiva',
        'Suggerimenti sperimentali',
        'Preparazione submission'
      ],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consulenza Iniziale Gratuita',
      description: 'Call di 30 minuti per capire le tue esigenze e valutare se posso aiutarti'
    },
    {
      number: '02',
      title: 'Proposta & Preventivo',
      description: 'Ricevi una proposta dettagliata con scope, tempistiche e costi'
    },
    {
      number: '03',
      title: 'Kick-off & Pianificazione',
      description: 'Definiamo insieme gli obiettivi e il piano di lavoro operativo'
    },
    {
      number: '04',
      title: 'Esecuzione & Follow-up',
      description: 'Lavoro sul progetto con aggiornamenti regolari e supporto continuo'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold mb-4 sm:mb-6 group text-sm sm:text-base"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
            Torna alla home
          </button>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="p-2.5 sm:p-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl sm:rounded-2xl shadow-lg">
              <Lightbulb className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
              Consulenze
            </h1>
          </div>
          <p className="text-base sm:text-xl text-gray-600 sm:ml-20">
            Supporto tecnico e strategico per i tuoi progetti di Machine Learning e Data Science
          </p>
        </div>

        {/* Hero Value Proposition */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 md:p-10 text-white mb-8 sm:mb-12 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Oltre la teoria: soluzioni concrete per sfide reali
          </h2>
          <p className="text-base sm:text-lg mb-6 text-orange-50 leading-relaxed">
            Non ti offro solo consigli generici. Metto a disposizione la mia esperienza pratica in 
            <strong> Machine Learning, HPC, e Bioinformatica</strong> per aiutarti a risolvere problemi 
            concreti, ottimizzare il tuo codice, e portare i tuoi progetti al livello successivo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1">5+</div>
              <div className="text-sm">Anni di esperienza</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1">100%</div>
              <div className="text-sm">Approccio pratico</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-black mb-1">24h</div>
              <div className="text-sm">Risposta media</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Servizi di Consulenza
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                >
                  <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                    <Icon className="w-12 h-12 mb-3" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Come Funziona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-6xl font-black text-orange-100 mb-2">{step.number}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Info */}
        <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 border-2 border-orange-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Modalità e Tariffe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">📞 Consulenza Oraria</h3>
              <p className="text-gray-600 mb-4">
                Sessioni singole da 1-2 ore per questioni specifiche, code review, o supporto puntuale.
              </p>
              <p className="text-2xl font-black text-orange-600">Su richiesta</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">🚀 Progetti</h3>
              <p className="text-gray-600 mb-4">
                Collaborazione su progetti più ampi con preventivo personalizzato basato su scope e tempistiche.
              </p>
              <p className="text-2xl font-black text-orange-600">Preventivo custom</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 text-sm">
            💡 <strong>Prima consulenza sempre gratuita</strong> per valutare insieme se posso aiutarti
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-6 sm:p-8 md:p-10 text-white text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Hai un progetto in mente?
          </h2>
          <p className="text-base sm:text-lg mb-6 text-orange-50 max-w-2xl mx-auto">
            Che tu abbia bisogno di una singola code review o di supporto continuativo, 
            parliamone! Fissiamo una call gratuita di 30 minuti per capire come posso aiutarti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lorenzo.arcioni2000@gmail.com?subject=Richiesta Consulenza"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Scrivimi una Email
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 text-white font-bold rounded-xl hover:bg-orange-800 transition-all duration-300 shadow-lg"
            >
              Prenota Call Gratuita
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;