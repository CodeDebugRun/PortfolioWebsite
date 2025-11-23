'use client';

import { translations } from '@/utils/translations';
import { BookOpen } from 'lucide-react';

interface SkillsProps {
  language: string;
}

export default function Skills({ language }: SkillsProps) {
  const t = translations[language as keyof typeof translations].skills;

  const skillCategories = [
    {
      title: t.languages,
      skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
      title: t.frameworks,
      skills: ['Next.js', 'Node.js', 'JavaFX', 'React', 'Express.js'],
    },
    {
      title: t.testing,
      skills: ['Selenium WebDriver', 'Cypress', 'TestNG', 'JUnit', 'Cucumber BDD', 'Postman'],
    },
    {
      title: t.databases,
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'Azure Data Studio'],
    },
    {
      title: t.other,
      skills: [
        'Git/GitHub',
        'Jira',
        'JasperReports',
        'n8n',
        'Electron',
        'Jenkins',
        'Agile/SCRUM',
        'REST APIs',
        'Maven',
      ],
    },
  ];

  const currentlyLearning = [
    {
      name: 'SAP ABAP',
      progress: 40,
      description: language === 'de'
        ? 'Strukturierte 12-Wochen-Lernplan zur Ergänzung meiner Java-Expertise'
        : language === 'en'
        ? 'Structured 12-week learning plan to complement my Java expertise'
        : 'Java uzmanlığımı tamamlamak için yapılandırılmış 12 haftalık öğrenme planı',
    },
  ];

  return (
    <section id="skills" className="section-container bg-white dark:bg-gray-900">
      <h2 className="section-title">{t.title}</h2>
      
      <div className="max-w-6xl mx-auto">
        {/* Currently Learning Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <BookOpen className="text-primary-600 dark:text-primary-400" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t.currentlyLearning}
            </h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {currentlyLearning.map((item, index) => (
              <div key={index} className="card bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-2xl font-bold text-primary-700 dark:text-primary-400">
                    {item.name}
                  </h4>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {item.progress}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-3">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b-2 border-primary-600">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full ${
                            dotIndex < 4
                              ? 'bg-primary-600 dark:bg-primary-400'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Methodologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'de' ? 'Methodologien & Praktiken' : language === 'en' ? 'Methodologies & Practices' : 'Metodolojiler & Uygulamalar'}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Agile', 'SCRUM', 'SDLC', 'STLC', 'Defect Life Cycle', 'CI/CD', 'Test-Driven Development'].map((methodology, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-600 text-white rounded-full font-semibold shadow-lg hover:bg-primary-700 transition-colors"
              >
                {methodology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
