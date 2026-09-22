import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo, education, skillColumns, additionalSkills, projects, experience } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-brand-purple/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-bold text-white">Curriculum Vitae — {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-gradient px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Resume Preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#0a0e17] text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="pb-6 border-b border-white/10 mb-6">
            <h1 className="text-3xl font-extrabold text-white mb-1">
              {personalInfo.name}
            </h1>
            <h2 className="text-lg font-semibold text-brand-purple mb-4">
              {personalInfo.role}
            </h2>

            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-brand-purple" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-brand-indigo" />
                github.com/{personalInfo.githubUsername}
              </span>
            </div>
          </div>

          {/* Objective / Summary */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {personalInfo.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-3">
              Education
            </h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex items-center justify-between flex-wrap">
                <h4 className="font-bold text-white text-sm">{education.institution}</h4>
                <span className="text-xs text-brand-purple font-semibold">{education.period}</span>
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">
                {education.degree} — <span className="text-emerald-400 font-semibold">{education.score}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {education.description}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="font-semibold text-white mb-1.5">Languages & Core:</div>
                <div className="text-slate-300">JavaScript (ES6+), HTML5, CSS3, Java, Python</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="font-semibold text-white mb-1.5">MERN Frameworks:</div>
                <div className="text-slate-300">React.js, Node.js, Express.js, MongoDB, Tailwind CSS</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div className="font-semibold text-white mb-1.5">Concepts & Tools:</div>
                <div className="text-slate-300">REST APIs, Socket.io, MySQL, Git, GitHub, Postman, Vite</div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-3">
              Key Projects
            </h3>
            <div className="space-y-3">
              {projects.map(p => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">{p.title}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{p.tags.join(" • ")}</span>
                  </div>
                  <p className="text-slate-300 mb-2">{p.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-400">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-3">
              Internship Experience
            </h3>
            {experience.map(exp => (
              <div key={exp.company} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white text-sm">{exp.role} — {exp.company}</span>
                  <span className="text-brand-purple font-semibold">{exp.period}</span>
                </div>
                <p className="text-slate-300 mb-2">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
