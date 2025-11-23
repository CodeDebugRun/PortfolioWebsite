'use client';

import { Briefcase, Calendar } from 'lucide-react';
import { translations } from '@/utils/translations';

interface ExperienceProps {
  language: string;
}

export default function Experience({ language }: ExperienceProps) {
  const t = translations[language as keyof typeof translations].experience;

  const experiences = [
    {
      company: 'Lebodoors GmbH',
      role: language === 'de' ? 'Softwareentwickler' : language === 'en' ? 'Software Developer' : 'Yazılım Geliştirici',
      period: language === 'de' ? 'Aktuell' : language === 'en' ? 'Current' : 'Güncel',
      description: language === 'de' 
        ? 'Entwicklung von Java-Anwendungen, JasperReports-Integration, Datenbank-Management und Modernisierung von Legacy-Anwendungen. Arbeit an verschiedenen Projekten einschließlich Desktop- und Web-Anwendungen.'
        : language === 'en'
        ? 'Development of Java applications, JasperReports integration, database management, and modernization of legacy applications. Working on various projects including desktop and web applications.'
        : 'Java uygulamaları geliştirme, JasperReports entegrasyonu, veritabanı yönetimi ve eski uygulamaların modernizasyonu. Masaüstü ve web uygulamaları dahil çeşitli projeler üzerinde çalışma.',
      technologies: ['Java', 'JavaFX', 'JasperReports', 'SQL Server', 'PostgreSQL', 'Next.js', 'Node.js'],
    },
    {
      company: 'Touchtech',
      role: t.touchtech.role,
      period: t.touchtech.period,
      description: t.touchtech.description,
      technologies: ['Selenium', 'Cypress', 'Postman', 'SQL', 'Jira', 'TestNG'],
    },
  ];

  const projects = [
    {
      name: 'E-Commerce Project',
      role: 'QA Automation Engineer',
      description: language === 'de'
        ? 'UI-Tests für eine E-Commerce-Anwendung mit Selenium WebDriver und TestNG Framework. Verwendung des Page Object Model (POM) Design-Patterns. Datengetriebenes Testen mit DataProvider.'
        : language === 'en'
        ? 'UI tests for an e-commerce application using Selenium WebDriver with TestNG framework. Used Page Object Model (POM) design pattern. Data-driven testing with DataProvider.'
        : 'Selenium WebDriver ve TestNG framework kullanarak e-ticaret uygulaması için UI testleri. Page Object Model (POM) tasarım deseni kullanımı. DataProvider ile veri odaklı test.',
      technologies: ['Selenium', 'TestNG', 'Java', 'POM'],
    },
    {
      name: 'Car Rental Project',
      role: 'QA Automation Engineer',
      description: language === 'de'
        ? 'UI-Testfälle basierend auf User Stories. End-to-End (E2E)-Tests mit UI- und Datenbank-Validierung. Smoke- und Regressions-Testsuiten mit BDD Cucumber Framework.'
        : language === 'en'
        ? 'UI test cases based on user stories. End-to-end (E2E) testing with UI and database validation. Smoke and Regression test suites using BDD Cucumber framework.'
        : 'User storylere dayalı UI test senaryoları. UI ve veritabanı doğrulaması ile end-to-end (E2E) test. BDD Cucumber framework kullanarak Smoke ve Regresyon test süitleri.',
      technologies: ['Cucumber', 'BDD', 'SQL', 'Jira XRay'],
    },
  ];

  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">{t.title}</h2>
      
      <div className="max-w-4xl mx-auto">
        {/* Work Experience */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="card border-l-4 border-primary-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold">
                    <Briefcase size={18} className="mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar size={18} className="mr-2" />
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notable Projects */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          {language === 'de' ? 'Bemerkenswerte Projekte' : language === 'en' ? 'Notable Projects' : 'Önemli Projeler'}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h4>
              <p className="text-sm text-primary-600 dark:text-primary-400 mb-3 font-semibold">
                {project.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
