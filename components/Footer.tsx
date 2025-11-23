'use client';

import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { translations } from '@/utils/translations';

interface FooterProps {
  language: string;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language as keyof typeof translations].footer;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:your.email@example.com',
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Erhan</h3>
            <p className="text-gray-400">
              {language === 'de'
                ? 'Softwareentwickler spezialisiert auf Java, Test-Automatisierung und Workflow-Automatisierung.'
                : language === 'en'
                ? 'Software developer specialized in Java, test automation, and workflow automation.'
                : 'Java, test otomasyonu ve iş akışı otomasyonunda uzmanlaşmış yazılım geliştirici.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              {language === 'de' ? 'Schnelllinks' : language === 'en' ? 'Quick Links' : 'Hızlı Bağlantılar'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  {language === 'de' ? 'Über mich' : language === 'en' ? 'About' : 'Hakkımda'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">
                  {language === 'de' ? 'Projekte' : language === 'en' ? 'Projects' : 'Projeler'}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">
                  {language === 'de' ? 'Kenntnisse' : language === 'en' ? 'Skills' : 'Yetenekler'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  {language === 'de' ? 'Kontakt' : language === 'en' ? 'Contact' : 'İletişim'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              {language === 'de' ? 'Folgen Sie mir' : language === 'en' ? 'Follow Me' : 'Beni Takip Edin'}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Erhan. {t.rights}.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            {t.builtWith}{' '}
            <Heart size={16} className="text-red-500 inline" />{' '}
            {language === 'de' ? 'und' : language === 'en' ? 'and' : 've'} Next.js, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
