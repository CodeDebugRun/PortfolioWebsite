'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { translations } from '@/utils/translations';
import { useState } from 'react';

interface ContactProps {
  language: string;
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language as keyof typeof translations].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert(language === 'de' ? 'Nachricht gesendet!' : language === 'en' ? 'Message sent!' : 'Mesaj gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Telefon',
      value: '+49 123 456 7890',
      link: 'tel:+491234567890',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Standort',
      value: 'Gronau, Nordrhein-Westfalen, Deutschland',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">{t.title}</h2>
      
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
        {t.description}
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {t.name}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder={language === 'de' ? 'Ihr Name' : language === 'en' ? 'Your name' : 'Adınız'}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {t.email}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder={language === 'de' ? 'ihre.email@beispiel.de' : language === 'en' ? 'your.email@example.com' : 'email@ornek.com'}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {t.message}
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                placeholder={language === 'de' ? 'Ihre Nachricht...' : language === 'en' ? 'Your message...' : 'Mesajınız...'}
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {t.send}
              <Send size={20} />
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.info}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="card bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {language === 'de' ? 'Verfügbarkeit' : language === 'en' ? 'Availability' : 'Müsaitlik'}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'de'
                ? 'Ich bin offen für neue Projekte und Kooperationen. Kontaktieren Sie mich gerne für Softwareentwicklung, Test-Automatisierung oder n8n Workflow-Automatisierung.'
                : language === 'en'
                ? 'I am open to new projects and collaborations. Feel free to contact me for software development, test automation, or n8n workflow automation.'
                : 'Yeni projeler ve işbirlikleri için açığım. Yazılım geliştirme, test otomasyonu veya n8n iş akışı otomasyonu için benimle iletişime geçmekten çekinmeyin.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
