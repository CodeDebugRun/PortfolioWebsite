'use client';

import { Code, TestTube, Workflow, Database } from 'lucide-react';
import { translations } from '@/utils/translations';

interface AboutProps {
  language: string;
}

export default function About({ language }: AboutProps) {
  const t = translations[language as keyof typeof translations].about;

  const stats = [
    { icon: <Code size={32} />, value: '3+', label: t.experience },
    { icon: <TestTube size={32} />, value: '15+', label: t.projectsCompleted },
    { icon: <Workflow size={32} />, value: '10+', label: t.technologies },
  ];

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <Code size={80} className="text-white" />
            </div>
          </div>

          {/* Right: Description */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center text-primary-600 dark:text-primary-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
