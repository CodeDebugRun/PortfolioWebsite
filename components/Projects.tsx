'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { translations } from '@/utils/translations';

interface ProjectsProps {
  language: string;
}

export default function Projects({ language }: ProjectsProps) {
  const t = translations[language as keyof typeof translations].projects;
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: 'LEBO Application',
      category: 'development',
      description: language === 'de'
        ? 'Full-Stack-Anwendung mit Next.js Frontend und Node.js Backend, umfassende Security Middleware und SQL Server Integration.'
        : language === 'en'
        ? 'Full-stack application with Next.js frontend and Node.js backend, comprehensive security middleware and SQL Server integration.'
        : 'Next.js frontend ve Node.js backend ile full-stack uygulama, kapsamlı güvenlik middleware ve SQL Server entegrasyonu.',
      technologies: ['Next.js', 'Node.js', 'SQL Server', 'TypeScript'],
      image: '📱',
    },
    {
      title: 'JasperReports Integration',
      category: 'development',
      description: language === 'de'
        ? 'Umfassende JasperReports-Implementierung mit SQL Server-Integration, Master-Detail-Beziehungen und Subreport-Funktionalität.'
        : language === 'en'
        ? 'Comprehensive JasperReports implementation with SQL Server integration, master-detail relationships and subreport functionality.'
        : 'SQL Server entegrasyonu, master-detail ilişkileri ve subreport fonksiyonelliği ile kapsamlı JasperReports uygulaması.',
      technologies: ['Java', 'JasperReports', 'SQL Server', 'JDBC'],
      image: '📊',
    },
    {
      title: 'Merkmal Verwaltung',
      category: 'development',
      description: language === 'de'
        ? 'Electron Desktop-Anwendung für Feature-Management mit komplexem Window Lifecycle und Backend-Server-Initialisierung.'
        : language === 'en'
        ? 'Electron desktop application for feature management with complex window lifecycle and backend server initialization.'
        : 'Karmaşık window lifecycle ve backend sunucu başlatma ile özellik yönetimi için Electron masaüstü uygulaması.',
      technologies: ['Electron', 'JavaScript', 'Node.js'],
      image: '🖥️',
    },
    {
      title: 'Label Printing System',
      category: 'development',
      description: language === 'de'
        ? 'Etikettendruck-Anwendung mit ZPL für Zebra-Drucker, Web-Interface mit Barcode-Scanner-Integration.'
        : language === 'en'
        ? 'Label printing application using ZPL for Zebra printers, web interface with barcode scanner integration.'
        : 'Zebra yazıcılar için ZPL kullanan etiket yazdırma uygulaması, barkod tarayıcı entegrasyonlu web arayüzü.',
      technologies: ['ZPL', 'JavaScript', 'Barcode Scanner'],
      image: '🏷️',
    },
    {
      title: 'E-Commerce Test Automation',
      category: 'qa',
      description: language === 'de'
        ? 'UI-Testautomatisierung mit Selenium WebDriver, TestNG Framework und Page Object Model (POM) Design-Pattern.'
        : language === 'en'
        ? 'UI test automation using Selenium WebDriver, TestNG framework and Page Object Model (POM) design pattern.'
        : 'Selenium WebDriver, TestNG framework ve Page Object Model (POM) tasarım deseni kullanarak UI test otomasyonu.',
      technologies: ['Selenium', 'TestNG', 'Java', 'POM'],
      image: '🛒',
    },
    {
      title: 'Car Rental Test Suite',
      category: 'qa',
      description: language === 'de'
        ? 'End-to-End-Tests mit BDD Cucumber Framework, Smoke- und Regressions-Testsuiten, Datenbank-Validierung.'
        : language === 'en'
        ? 'End-to-end testing with BDD Cucumber framework, smoke and regression test suites, database validation.'
        : 'BDD Cucumber framework ile end-to-end test, smoke ve regresyon test süitleri, veritabanı doğrulama.',
      technologies: ['Cucumber', 'BDD', 'Selenium', 'SQL'],
      image: '🚗',
    },
    {
      title: 'InStore Application Testing',
      category: 'qa',
      description: language === 'de'
        ? 'Automatisierte Testfälle, Backend-Tests und Lokalisierungstests für große Touchscreen-Anwendung.'
        : language === 'en'
        ? 'Automated test cases, backend testing and localization testing for large touchscreen application.'
        : 'Büyük dokunmatik ekran uygulaması için otomatik test senaryoları, backend testleri ve yerelleştirme testleri.',
      technologies: ['Selenium', 'Cypress', 'Postman', 'SQL'],
      image: '🖱️',
    },
    {
      title: 'Email Automation Workflow',
      category: 'n8n',
      description: language === 'de'
        ? 'Automatisierte E-Mail-Workflows mit n8n, Integration verschiedener E-Mail-Dienste und Benachrichtigungssysteme.'
        : language === 'en'
        ? 'Automated email workflows with n8n, integration of various email services and notification systems.'
        : 'n8n ile otomatik e-posta iş akışları, çeşitli e-posta hizmetleri ve bildirim sistemlerinin entegrasyonu.',
      technologies: ['n8n', 'Email APIs', 'Webhooks'],
      image: '📧',
    },
    {
      title: 'Data Synchronization',
      category: 'n8n',
      description: language === 'de'
        ? 'Automatische Datensynchronisation zwischen verschiedenen Systemen mit n8n Workflows.'
        : language === 'en'
        ? 'Automatic data synchronization between different systems using n8n workflows.'
        : 'n8n iş akışlarını kullanarak farklı sistemler arasında otomatik veri senkronizasyonu.',
      technologies: ['n8n', 'REST APIs', 'Databases'],
      image: '🔄',
    },
    {
      title: 'Task Management Automation',
      category: 'n8n',
      description: language === 'de'
        ? 'Automatisierung von Aufgabenverwaltungs-Workflows mit Jira, Slack und anderen Tools Integration.'
        : language === 'en'
        ? 'Automation of task management workflows with Jira, Slack and other tools integration.'
        : 'Jira, Slack ve diğer araç entegrasyonları ile görev yönetimi iş akışlarının otomasyonu.',
      technologies: ['n8n', 'Jira API', 'Slack API'],
      image: '✅',
    },
  ];

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'development', label: t.categories.development },
    { id: 'qa', label: t.categories.qa },
    { id: 'n8n', label: t.categories.n8n },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">{t.title}</h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeCategory === category.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="card group hover:scale-105 transition-all duration-300"
          >
            {/* Project Icon */}
            <div className="text-6xl mb-4">{project.image}</div>
            
            {/* Project Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h3>
            
            {/* Project Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Action Buttons (Optional - can be customized) */}
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline">
                <ExternalLink size={16} />
                {t.viewDetails}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
