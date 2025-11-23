'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { translations } from '@/utils/translations';

interface HeroProps {
  language: string;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language as keyof typeof translations].hero;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
            {t.greeting}
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Erhan
          </h1>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-6">
            {t.title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              {t.cta1}
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center"
            >
              {t.cta2}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
