import React from 'react';
import { Heart, Linkedin, Github, Mail, Instagram, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative text-white py-8 sm:py-12 mt-12 sm:mt-16" style={{ backgroundColor: '#383838' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Main content */}
          <div className="space-y-3">
            <p className="text-base sm:text-lg font-semibold">
              © {new Date().getFullYear()} Lorenzo Arcioni
            </p>
            <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto px-4">
              Machine Learning Engineer, Data Scientist & Formatore
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="https://www.linkedin.com/in/lorenzo-arcioni-216b921b5/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-white/10 rounded-xl border border-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://github.com/lorenzo-arcioni" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-white/10 rounded-xl border border-white/20"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.kaggle.com/lorenzoarcioni" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-white/10 rounded-xl border border-white/20 font-bold text-xl sm:text-2xl flex items-center justify-center"
              aria-label="Kaggle"
            >
              K
            </a>
            <a 
              href="https://www.instagram.com/lorenzo_arcioni/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-white/10 rounded-xl border border-white/20"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://medium.com/@lorenzo.arcioni2000/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 bg-white/10 rounded-xl border border-white/20"
              aria-label="Medium"
            >
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:lorenzo.arcioni2000@gmail.com"
              className="p-2.5 sm:p-3 bg-white/10 rounded-xl border border-white/20"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm sm:text-base text-white/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-red-400 text-red-400" />
            <span>in Italy</span>
          </div>

          {/* Bottom text */}
          <p className="text-xs sm:text-sm text-white/70 px-4">
            Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;