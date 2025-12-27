import React from 'react';
import { Linkedin, Github, Instagram, BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative text-white py-12 sm:py-16 md:py-24 shadow-2xl" style={{ backgroundColor: '#383838' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 sm:mb-8">
            <img 
              src="/images/selfie.jpeg" 
              alt="Lorenzo Arcioni"
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 tracking-tight">
            Lorenzo Arcioni
          </h1>

          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-6">
            Computer Scientist specializzato in Machine Learning e Data Science
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
            <span className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white/20 rounded-full text-sm sm:text-base md:text-lg font-bold border border-white/30">
              Machine Learning
            </span>
            <span className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white/20 rounded-full text-sm sm:text-base md:text-lg font-bold border border-white/30">
              Data Science
            </span>
            <span className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white/20 rounded-full text-sm sm:text-base md:text-lg font-bold border border-white/30">
              Bioinformatics
            </span>
          </div>
          
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
            <a 
              href="https://www.linkedin.com/in/lorenzo-arcioni-216b921b5/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl border border-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://github.com/lorenzo-arcioni" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl border border-white/20"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://www.kaggle.com/lorenzoarcioni" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl font-bold text-2xl sm:text-3xl md:text-4xl border border-white/20 flex items-center justify-center"
              aria-label="Kaggle"
            >
              K
            </a>
            <a 
              href="https://www.instagram.com/lorenzo_arcioni/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl border border-white/20"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://medium.com/@lorenzo.arcioni2000/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 md:p-4 bg-white/10 rounded-xl md:rounded-2xl border border-white/20"
              aria-label="Medium"
            >
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;