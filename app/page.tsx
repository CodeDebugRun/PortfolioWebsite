'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Mail, Linkedin, Github, Code2, TestTube, Workflow, Database, ChevronDown, ExternalLink, Calendar, MapPin, Briefcase } from 'lucide-react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [language, setLanguage] = useState<'en' | 'de' | 'tr'>('de')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hi, I\'m Erhan',
        title: 'Softwareentwickler',
        subtitle: 'QA Automation Engineer & Workflow Automation Specialist',
        description: 'Passionate about building robust applications, automating workflows, and ensuring software quality through comprehensive testing strategies.',
        cta1: 'View Projects',
        cta2: 'Contact Me',
        location: 'Stadtlohn, Germany'
      },
      about: {
        title: 'About Me',
        text: 'Self-disciplined and success-oriented software developer with a unique combination of practical development skills and profound expertise in quality assurance. I specialize in building scalable Java applications, automating business workflows with n8n, and implementing comprehensive test automation strategies. Currently expanding my expertise in SAP ABAP to provide end-to-end enterprise solutions.'
      },
      services: {
        title: 'What I Do',
        items: [
          {
            icon: 'Code2',
            title: 'Full-Stack Development',
            description: 'Building robust applications with Java, JavaFX, Next.js, and Node.js. Specialized in JasperReports, database management, and enterprise solutions.'
          },
          {
            icon: 'TestTube',
            title: 'QA Test Automation',
            description: 'Comprehensive test automation using Selenium WebDriver, Cypress, and TestNG. Experienced in BDD Cucumber, API testing with Postman, and database testing.'
          },
          {
            icon: 'Workflow',
            title: 'n8n Workflow Automation',
            description: 'Designing and implementing business process automation solutions to streamline operations and increase efficiency for companies.'
          },
          {
            icon: 'Database',
            title: 'Database Management & Testing',
            description: 'Expert in SQL Server, PostgreSQL, and MySQL. Proficient in writing complex queries, database testing, and ensuring data integrity.'
          }
        ]
      },
      experience: {
        title: 'Professional Experience',
        current: 'Current',
        items: [
          {
            role: 'Java Developer',
            company: 'Lebodoors',
            location: 'Stadtlohn, Germany',
            period: '2023 - Present',
            description: 'Developing enterprise applications with Java, JavaFX, and JasperReports. Managing database systems and modernizing legacy applications. Working on full-stack projects with Next.js and Node.js.',
            achievements: [
              'Successfully refactored large monolithic classes (800+ lines) into smaller, maintainable services',
              'Implemented JasperReports subreport functionality with master-detail relationships',
              'Developed label printing applications using ZPL for Zebra printers',
              'Created full-stack applications with comprehensive security middleware'
            ]
          },
          {
            role: 'QA Automation Engineer',
            company: 'Touchtech',
            location: 'Remote',
            period: '2022 - 2023',
            description: 'Responsible for testing the InStore application for large touchscreen product purchases. Automated test cases, conducted backend testing, and ensured database integrity.',
            achievements: [
              'Automated UI test cases reducing testing time by 60%',
              'Performed localization testing for multiple European markets',
              'Collaborated with AI team and developers to maintain high quality standards',
              'Tested event tracking features and verified design specifications'
            ]
          }
        ]
      },
      projects: {
        title: 'Featured Projects',
        categories: ['All', 'Development', 'QA Automation', 'n8n Automation'],
        items: [
          {
            title: 'LEBO Application',
            category: 'Development',
            description: 'Full-stack enterprise application with Next.js frontend and Node.js backend, featuring comprehensive security middleware and SQL Server integration.',
            technologies: ['Next.js', 'Node.js', 'SQL Server', 'JavaScript'],
            link: null
          },
          {
            title: 'JasperReports Integration',
            category: 'Development',
            description: 'Implemented comprehensive reporting solution with master-detail relationships, subreports, and dynamic data visualization.',
            technologies: ['Java', 'JasperReports', 'SQL Server', 'JDBC'],
            link: null
          },
          {
            title: 'E-Commerce Test Automation',
            category: 'QA Automation',
            description: 'Created comprehensive UI test suite using Selenium WebDriver with TestNG framework. Implemented Page Object Model (POM) design pattern for maintainable code.',
            technologies: ['Selenium', 'TestNG', 'Java', 'POM'],
            link: null
          },
          {
            title: 'Car Rental Testing Suite',
            category: 'QA Automation',
            description: 'Developed end-to-end testing solution with BDD Cucumber framework. Created smoke and regression test suites with database validation.',
            technologies: ['Cucumber', 'BDD', 'Selenium', 'SQL', 'Jira'],
            link: null
          },
          {
            title: 'Invoice Processing Automation',
            category: 'n8n Automation',
            description: 'Automated invoice processing workflow including email parsing, data extraction, database updates, and notification system.',
            technologies: ['n8n', 'REST API', 'PostgreSQL', 'Email'],
            link: null
          },
          {
            title: 'Customer Onboarding Workflow',
            category: 'n8n Automation',
            description: 'End-to-end customer onboarding automation integrating CRM, email marketing, and internal systems.',
            technologies: ['n8n', 'Webhooks', 'APIs', 'Integration'],
            link: null
          }
        ]
      },
      skills: {
        title: 'Skills & Technologies',
        currently: 'Currently Learning',
        expert: 'Expert',
        proficient: 'Proficient',
        categories: {
          languages: {
            title: 'Programming Languages',
            items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS']
          },
          testing: {
            title: 'Testing & QA',
            items: ['Selenium WebDriver', 'Cypress', 'TestNG', 'JUnit', 'Cucumber BDD', 'Postman', 'API Testing', 'Database Testing']
          },
          development: {
            title: 'Development Tools',
            items: ['Next.js', 'Node.js', 'React', 'JavaFX', 'JasperReports', 'Maven', 'Git', 'Jenkins']
          },
          databases: {
            title: 'Databases',
            items: ['SQL Server', 'PostgreSQL', 'MySQL', 'JDBC']
          },
          automation: {
            title: 'Automation',
            items: ['n8n', 'Workflow Automation', 'Business Process Automation']
          },
          learning: {
            title: 'Currently Learning',
            items: ['SAP ABAP']
          },
          tools: {
            title: 'Tools & Methodologies',
            items: ['IntelliJ IDEA', 'VS Code', 'Jira', 'Agile/SCRUM', 'CI/CD', 'Test Automation Frameworks']
          }
        }
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Interested in working together? Let\'s connect!',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      }
    },
    de: {
      nav: {
        home: 'Startseite',
        about: 'Über mich',
        services: 'Dienstleistungen',
        experience: 'Erfahrung',
        projects: 'Projekte',
        skills: 'Fähigkeiten',
        blog: 'Blog',
        contact: 'Kontakt'
      },
      hero: {
        greeting: 'Hallo, ich bin Erhan',
        title: 'Softwareentwickler',
        subtitle: 'QA Automatisierungsingenieur & Workflow-Automatisierungsspezialist',
        description: 'Leidenschaftlich beim Erstellen robuster Anwendungen, Automatisierung von Workflows und Sicherstellung der Softwarequalität durch umfassende Teststrategien.',
        cta1: 'Projekte ansehen',
        cta2: 'Kontaktieren',
        location: 'Stadtlohn, Deutschland'
      },
      about: {
        title: 'Über mich',
        text: 'Selbstdisziplinierter und erfolgsorientierter Softwareentwickler mit einer einzigartigen Kombination aus praktischen Entwicklungsfähigkeiten und fundiertem Fachwissen in der Qualitätssicherung. Ich bin spezialisiert auf die Entwicklung skalierbarer Java-Anwendungen, die Automatisierung von Geschäftsprozessen mit n8n und die Implementierung umfassender Testautomatisierungsstrategien. Derzeit erweitere ich meine Expertise in SAP ABAP, um End-to-End-Unternehmenslösungen anzubieten.'
      },
      services: {
        title: 'Was ich mache',
        items: [
          {
            icon: 'Code2',
            title: 'Full-Stack Entwicklung',
            description: 'Entwicklung robuster Anwendungen mit Java, JavaFX, Next.js und Node.js. Spezialisiert auf JasperReports, Datenbankverwaltung und Unternehmenslösungen.'
          },
          {
            icon: 'TestTube',
            title: 'QA Testautomatisierung',
            description: 'Umfassende Testautomatisierung mit Selenium WebDriver, Cypress und TestNG. Erfahren in BDD Cucumber, API-Tests mit Postman und Datenbanktests.'
          },
          {
            icon: 'Workflow',
            title: 'n8n Workflow-Automatisierung',
            description: 'Entwurf und Implementierung von Geschäftsprozessautomatisierungslösungen zur Rationalisierung von Abläufen und Steigerung der Effizienz für Unternehmen.'
          },
          {
            icon: 'Database',
            title: 'Datenbankverwaltung & -tests',
            description: 'Experte in SQL Server, PostgreSQL und MySQL. Kompetent im Schreiben komplexer Abfragen, Datenbanktests und Gewährleistung der Datenintegrität.'
          }
        ]
      },
      experience: {
        title: 'Berufserfahrung',
        current: 'Aktuell',
        items: [
          {
            role: 'Java Entwickler',
            company: 'Lebodoors',
            location: 'Stadtlohn, Deutschland',
            period: '2023 - Heute',
            description: 'Entwicklung von Unternehmensanwendungen mit Java, JavaFX und JasperReports. Verwaltung von Datenbanksystemen und Modernisierung von Legacy-Anwendungen. Arbeit an Full-Stack-Projekten mit Next.js und Node.js.',
            achievements: [
              'Erfolgreiche Refaktorierung großer monolithischer Klassen (800+ Zeilen) in kleinere, wartbare Services',
              'Implementierung der JasperReports-Unterbericht-Funktionalität mit Master-Detail-Beziehungen',
              'Entwicklung von Etikettendruck-Anwendungen mit ZPL für Zebra-Drucker',
              'Erstellung von Full-Stack-Anwendungen mit umfassender Sicherheits-Middleware'
            ]
          },
          {
            role: 'QA Automatisierungsingenieur',
            company: 'Touchtech',
            location: 'Remote',
            period: '2022 - 2023',
            description: 'Verantwortlich für das Testen der InStore-Anwendung für Produktkäufe über große Touchscreens. Automatisierung von Testfällen, Durchführung von Backend-Tests und Sicherstellung der Datenbankintegrität.',
            achievements: [
              'Automatisierung von UI-Testfällen, wodurch die Testzeit um 60% reduziert wurde',
              'Durchführung von Lokalisierungstests für mehrere europäische Märkte',
              'Zusammenarbeit mit dem KI-Team und Entwicklern zur Aufrechterhaltung hoher Qualitätsstandards',
              'Test von Event-Tracking-Funktionen und Überprüfung von Design-Spezifikationen'
            ]
          }
        ]
      },
      projects: {
        title: 'Featured Projekte',
        categories: ['Alle', 'Entwicklung', 'QA Automatisierung', 'n8n Automatisierung'],
        items: [
          {
            title: 'LEBO Anwendung',
            category: 'Development',
            description: 'Full-Stack-Unternehmensanwendung mit Next.js-Frontend und Node.js-Backend mit umfassender Sicherheits-Middleware und SQL Server-Integration.',
            technologies: ['Next.js', 'Node.js', 'SQL Server', 'JavaScript'],
            link: null
          },
          {
            title: 'JasperReports Integration',
            category: 'Development',
            description: 'Implementierung einer umfassenden Reporting-Lösung mit Master-Detail-Beziehungen, Unterberichten und dynamischer Datenvisualisierung.',
            technologies: ['Java', 'JasperReports', 'SQL Server', 'JDBC'],
            link: null
          },
          {
            title: 'E-Commerce Testautomatisierung',
            category: 'QA Automation',
            description: 'Erstellung einer umfassenden UI-Testsuite mit Selenium WebDriver und TestNG-Framework. Implementierung des Page Object Model (POM)-Designmusters für wartbaren Code.',
            technologies: ['Selenium', 'TestNG', 'Java', 'POM'],
            link: null
          },
          {
            title: 'Autovermietung Testsuite',
            category: 'QA Automation',
            description: 'Entwicklung einer End-to-End-Testlösung mit BDD Cucumber-Framework. Erstellung von Smoke- und Regressions-Testsuites mit Datenbankvalidierung.',
            technologies: ['Cucumber', 'BDD', 'Selenium', 'SQL', 'Jira'],
            link: null
          },
          {
            title: 'Rechnungsverarbeitung Automatisierung',
            category: 'n8n Automation',
            description: 'Automatisierter Rechnungsverarbeitungs-Workflow einschließlich E-Mail-Parsing, Datenextraktion, Datenbankaktualisierungen und Benachrichtigungssystem.',
            technologies: ['n8n', 'REST API', 'PostgreSQL', 'E-Mail'],
            link: null
          },
          {
            title: 'Kunden-Onboarding-Workflow',
            category: 'n8n Automation',
            description: 'End-to-End-Kunden-Onboarding-Automatisierung mit Integration von CRM, E-Mail-Marketing und internen Systemen.',
            technologies: ['n8n', 'Webhooks', 'APIs', 'Integration'],
            link: null
          }
        ]
      },
      skills: {
        title: 'Fähigkeiten & Technologien',
        currently: 'Derzeit lerne ich',
        expert: 'Experte',
        proficient: 'Kompetent',
        categories: {
          languages: {
            title: 'Programmiersprachen',
            items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS']
          },
          testing: {
            title: 'Testing & QA',
            items: ['Selenium WebDriver', 'Cypress', 'TestNG', 'JUnit', 'Cucumber BDD', 'Postman', 'API Testing', 'Database Testing']
          },
          development: {
            title: 'Entwicklungswerkzeuge',
            items: ['Next.js', 'Node.js', 'React', 'JavaFX', 'JasperReports', 'Maven', 'Git', 'Jenkins']
          },
          databases: {
            title: 'Datenbanken',
            items: ['SQL Server', 'PostgreSQL', 'MySQL', 'JDBC']
          },
          automation: {
            title: 'Automatisierung',
            items: ['n8n', 'Workflow-Automatisierung', 'Geschäftsprozessautomatisierung']
          },
          learning: {
            title: 'Derzeit lerne ich',
            items: ['SAP ABAP']
          },
          tools: {
            title: 'Tools & Methoden',
            items: ['IntelliJ IDEA', 'VS Code', 'Jira', 'Agile/SCRUM', 'CI/CD', 'Test Automation Frameworks']
          }
        }
      },
      contact: {
        title: 'Kontakt aufnehmen',
        subtitle: 'Interessiert an einer Zusammenarbeit? Lassen Sie uns verbinden!',
        email: 'E-Mail',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      }
    },
    tr: {
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        services: 'Hizmetler',
        experience: 'Deneyim',
        projects: 'Projeler',
        skills: 'Beceriler',
        blog: 'Blog',
        contact: 'İletişim'
      },
      hero: {
        greeting: 'Merhaba, Ben Erhan',
        title: 'Yazılım Geliştirici',
        subtitle: 'QA Otomasyon Mühendisi & İş Akışı Otomasyon Uzmanı',
        description: 'Sağlam uygulamalar geliştirmek, iş akışlarını otomatikleştirmek ve kapsamlı test stratejileri ile yazılım kalitesini sağlamak konusunda tutkuluyum.',
        cta1: 'Projeleri Gör',
        cta2: 'İletişime Geç',
        location: 'Stadtlohn, Almanya'
      },
      about: {
        title: 'Hakkımda',
        text: 'Pratik geliştirme becerileri ile kalite güvencesi alanındaki derin uzmanlığı birleştiren, disiplinli ve başarı odaklı bir yazılım geliştiriciyim. Ölçeklenebilir Java uygulamaları geliştirmek, n8n ile iş akışlarını otomatikleştirmek ve kapsamlı test otomasyon stratejileri uygulamak konusunda uzmanım. Şu anda SAP ABAP alanında uzmanlığımı genişleterek uçtan uca kurumsal çözümler sunmayı hedefliyorum.'
      },
      services: {
        title: 'Neler Yapıyorum',
        items: [
          {
            icon: 'Code2',
            title: 'Full-Stack Geliştirme',
            description: 'Java, JavaFX, Next.js ve Node.js ile sağlam uygulamalar geliştirme. JasperReports, veritabanı yönetimi ve kurumsal çözümler konusunda uzmanım.'
          },
          {
            icon: 'TestTube',
            title: 'QA Test Otomasyonu',
            description: 'Selenium WebDriver, Cypress ve TestNG kullanarak kapsamlı test otomasyonu. BDD Cucumber, Postman ile API testi ve veritabanı testi konusunda deneyimliyim.'
          },
          {
            icon: 'Workflow',
            title: 'n8n İş Akışı Otomasyonu',
            description: 'Şirketler için operasyonları kolaylaştırmak ve verimliliği artırmak üzere iş süreçleri otomasyon çözümleri tasarlama ve uygulama.'
          },
          {
            icon: 'Database',
            title: 'Veritabanı Yönetimi & Testi',
            description: 'SQL Server, PostgreSQL ve MySQL konusunda uzmanlık. Karmaşık sorgular yazma, veritabanı testi ve veri bütünlüğünü sağlama konusunda yetkinim.'
          }
        ]
      },
      experience: {
        title: 'Profesyonel Deneyim',
        current: 'Güncel',
        items: [
          {
            role: 'Java Geliştirici',
            company: 'Lebodoors',
            location: 'Stadtlohn, Almanya',
            period: '2023 - Günümüz',
            description: 'Java, JavaFX ve JasperReports ile kurumsal uygulamalar geliştirme. Veritabanı sistemlerini yönetme ve eski uygulamaları modernize etme. Next.js ve Node.js ile full-stack projeler üzerinde çalışma.',
            achievements: [
              'Büyük monolitik sınıfları (800+ satır) daha küçük, sürdürülebilir servislere başarıyla refactor ettim',
              'Master-detail ilişkileri ile JasperReports subreport fonksiyonelliği uyguladım',
              'Zebra yazıcılar için ZPL kullanarak etiket baskı uygulamaları geliştirdim',
              'Kapsamlı güvenlik middleware ile full-stack uygulamalar oluşturdum'
            ]
          },
          {
            role: 'QA Otomasyon Mühendisi',
            company: 'Touchtech',
            location: 'Uzaktan',
            period: '2022 - 2023',
            description: 'Büyük dokunmatik ekranlar üzerinden ürün satın alma için InStore uygulamasını test etmekten sorumluydum. Test senaryolarını otomatikleştirdim, backend testleri yürüttüm ve veritabanı bütünlüğünü sağladım.',
            achievements: [
              'UI test senaryolarını otomatikleştirerek test süresini %60 azalttım',
              'Çeşitli Avrupa pazarları için lokalizasyon testleri gerçekleştirdim',
              'Yüksek kalite standartlarını korumak için AI ekibi ve geliştiricilerle işbirliği yaptım',
              'Event tracking özelliklerini test ettim ve tasarım spesifikasyonlarını doğruladım'
            ]
          }
        ]
      },
      projects: {
        title: 'Öne Çıkan Projeler',
        categories: ['Tümü', 'Geliştirme', 'QA Otomasyon', 'n8n Otomasyon'],
        items: [
          {
            title: 'LEBO Uygulaması',
            category: 'Development',
            description: 'Next.js frontend ve Node.js backend ile kapsamlı güvenlik middleware ve SQL Server entegrasyonuna sahip full-stack kurumsal uygulama.',
            technologies: ['Next.js', 'Node.js', 'SQL Server', 'JavaScript'],
            link: null
          },
          {
            title: 'JasperReports Entegrasyonu',
            category: 'Development',
            description: 'Master-detail ilişkileri, subreport\'lar ve dinamik veri görselleştirme ile kapsamlı raporlama çözümü uygulaması.',
            technologies: ['Java', 'JasperReports', 'SQL Server', 'JDBC'],
            link: null
          },
          {
            title: 'E-Ticaret Test Otomasyonu',
            category: 'QA Automation',
            description: 'Selenium WebDriver ve TestNG framework kullanarak kapsamlı UI test suite oluşturulması. Sürdürülebilir kod için Page Object Model (POM) tasarım deseni uygulandı.',
            technologies: ['Selenium', 'TestNG', 'Java', 'POM'],
            link: null
          },
          {
            title: 'Araç Kiralama Test Suite',
            category: 'QA Automation',
            description: 'BDD Cucumber framework ile uçtan uca test çözümü geliştirildi. Veritabanı doğrulama ile smoke ve regression test suite\'leri oluşturuldu.',
            technologies: ['Cucumber', 'BDD', 'Selenium', 'SQL', 'Jira'],
            link: null
          },
          {
            title: 'Fatura İşleme Otomasyonu',
            category: 'n8n Automation',
            description: 'E-posta ayrıştırma, veri çıkarma, veritabanı güncellemeleri ve bildirim sistemi içeren otomatik fatura işleme iş akışı.',
            technologies: ['n8n', 'REST API', 'PostgreSQL', 'Email'],
            link: null
          },
          {
            title: 'Müşteri Onboarding İş Akışı',
            category: 'n8n Automation',
            description: 'CRM, e-posta pazarlama ve dahili sistemleri entegre eden uçtan uca müşteri onboarding otomasyonu.',
            technologies: ['n8n', 'Webhooks', 'APIs', 'Integration'],
            link: null
          }
        ]
      },
      skills: {
        title: 'Beceriler & Teknolojiler',
        currently: 'Şu Anda Öğreniyorum',
        expert: 'Uzman',
        proficient: 'Yetkin',
        categories: {
          languages: {
            title: 'Programlama Dilleri',
            items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS']
          },
          testing: {
            title: 'Test & QA',
            items: ['Selenium WebDriver', 'Cypress', 'TestNG', 'JUnit', 'Cucumber BDD', 'Postman', 'API Testing', 'Database Testing']
          },
          development: {
            title: 'Geliştirme Araçları',
            items: ['Next.js', 'Node.js', 'React', 'JavaFX', 'JasperReports', 'Maven', 'Git', 'Jenkins']
          },
          databases: {
            title: 'Veritabanları',
            items: ['SQL Server', 'PostgreSQL', 'MySQL', 'JDBC']
          },
          automation: {
            title: 'Otomasyon',
            items: ['n8n', 'İş Akışı Otomasyonu', 'İş Süreçleri Otomasyonu']
          },
          learning: {
            title: 'Şu Anda Öğreniyorum',
            items: ['SAP ABAP']
          },
          tools: {
            title: 'Araçlar & Metodolojiler',
            items: ['IntelliJ IDEA', 'VS Code', 'Jira', 'Agile/SCRUM', 'CI/CD', 'Test Otomasyon Framework\'leri']
          }
        }
      },
      contact: {
        title: 'İletişime Geç',
        subtitle: 'Birlikte çalışmak ister misiniz? Hadi bağlanalım!',
        email: 'E-posta',
        linkedin: 'LinkedIn',
        github: 'GitHub'
      }
    }
  }

  const t = translations[language]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? t.projects.items 
    : t.projects.items.filter(p => p.category === selectedCategory.replace(/\s/g, ''))

  const iconMap = {
    Code2,
    TestTube,
    Workflow,
    Database
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              EK
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {value}
                </a>
              ))}
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                {(['en', 'de', 'tr'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 text-sm rounded ${
                      language === lang
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {value}
                </a>
              ))}
              <div className="flex space-x-2 pt-2">
                {(['en', 'de', 'tr'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 text-sm rounded ${
                      language === lang
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              {t.hero.subtitle}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              {t.hero.description}
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-8">
              <MapPin className="w-5 h-5" />
              <span>{t.hero.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="btn-primary">
                {t.hero.cta1}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#about" className="inline-block animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.about.text}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container bg-gray-50 dark:bg-gray-800/50">
        <h2 className="section-title">{t.services.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div key={index} className="card group hover:scale-105">
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {t.experience.items.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800/50">
        <h2 className="section-title">{t.projects.title}</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {t.projects.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card group">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h2 className="section-title">{t.skills.title}</h2>
        
        {/* Currently Learning Highlight */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="card bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">
                {t.skills.currently}
              </h3>
            </div>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              SAP ABAP
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Expanding expertise in enterprise solutions to provide comprehensive end-to-end development capabilities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(t.skills.categories).map(([key, category]) => {
            if (key === 'learning') return null // Already shown above
            return (
              <div key={key} className="card">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center space-x-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <span className="font-semibold">{t.contact.email}</span>
          </a>
          
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Linkedin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <span className="font-semibold">{t.contact.linkedin}</span>
          </a>
          
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-8 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Github className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <span className="font-semibold">{t.contact.github}</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Erhan Kaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
