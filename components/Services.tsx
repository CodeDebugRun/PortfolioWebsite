'use client';

import { Code, TestTube, Workflow, Database } from 'lucide-react';
import { translations } from '@/utils/translations';

interface ServicesProps {
  language: string;
}

export default function Services({ language }: ServicesProps) {
  const t = translations[language as keyof typeof translations].services;

  const services = [
    {
      icon: <Code size={40} />,
      title: t.development.title,
      description: t.development.description,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <TestTube size={40} />,
      title: t.qa.title,
      description: t.qa.description,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Workflow size={40} />,
      title: t.automation.title,
      description: t.automation.description,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Database size={40} />,
      title: t.database.title,
      description: t.database.description,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="services" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">{t.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
