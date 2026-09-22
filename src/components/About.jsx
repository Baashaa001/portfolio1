import React, { useState } from 'react';
import { FolderCode, Briefcase, Cpu, Zap, GraduationCap, CheckCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { personalInfo, stats, education } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'FolderCode':
        return <FolderCode className="w-6 h-6 text-brand-purple" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-brand-indigo" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-blue" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-purple" />;
    }
  };

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Pill Label */}
            <div className="pill-badge mb-4">
              <span>ABOUT ME</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              I'm passionate about creating <span className="gradient-text">digital solutions</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              {personalInfo.aboutBio}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              My journey began with exploring electronics and microcontrollers, which fostered a rigorous, logical mindset. Discovering the MERN stack ignited my passion for full-stack web engineering—allowing me to architect high-impact user interfaces paired with robust backend services.
            </p>

            {/* Education Highlight Card */}
            <div className="w-full glass-card rounded-2xl p-5 mb-8 border border-white/10 hover:border-brand-purple/40">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 border border-brand-purple/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-brand-purple" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h3 className="text-base font-bold text-white">{education.institution}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
                      {education.score}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300 mb-1">
                    {education.degree}
                  </p>
                  <p className="text-xs text-slate-400">
                    {education.period} • {education.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button: Learn More */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="btn-outline px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer"
            >
              <span>{showMore ? "Show Less" : "Learn More About Me"}</span>
              {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {/* Expandable detailed traits */}
            {showMore && (
              <div className="mt-6 p-5 rounded-2xl bg-slate-900/90 border border-brand-purple/20 text-slate-300 text-sm space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Problem Solver & Quick Learner</span>
                </div>
                <p className="text-slate-400 text-xs pl-6">
                  Comfortable diving into documentation, debugging complex asynchronous workflows, and building production-grade solutions.
                </p>

                <div className="flex items-center gap-2 text-white font-semibold pt-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Clean Code & Maintainability</span>
                </div>
                <p className="text-slate-400 text-xs pl-6">
                  Dedicated to modular component hierarchies, readable ES6+ syntax, reusable custom hooks, and semantic Tailwind design systems.
                </p>
              </div>
            )}

          </div>

          {/* Right Column: 2x2 Stat Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-500 ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  {/* Subtle hover gradient blob */}
                  <div className="absolute -right-8 -top-8 w-28 h-28 bg-brand-purple/15 rounded-full blur-2xl group-hover:bg-brand-purple/30 transition-all duration-300"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-brand-purple/40 transition-transform duration-300">
                      {getStatIcon(stat.icon)}
                    </div>

                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                      <span className="gradient-text">{stat.value}</span>
                    </div>

                    <h4 className="text-base font-semibold text-slate-200 mb-1">
                      {stat.label}
                    </h4>

                    <p className="text-xs text-slate-400">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
