import React from 'react';
import { ArrowRight, Download, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo, techStackRow } from '../data/portfolioData';

// Custom lightweight SVG icons for tech logos
function TechIcon({ type, className = "w-5 h-5" }) {
  switch (type) {
    case 'react':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'node':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="currentColor">
          <path fill="#68a063" d="M16 2.5l11.7 6.8v13.4L16 29.5 4.3 22.7V9.3L16 2.5zm-1.8 19.3c3.6 0 5.4-1.6 5.4-4.5 0-2.4-1.3-3.6-3.9-4.2l-1.3-.3c-1.4-.3-2-.7-2-1.5 0-.9.8-1.5 2.1-1.5 1.5 0 2.4.6 2.6 1.7h2.2c-.2-2.1-1.8-3.4-4.8-3.4-2.8 0-4.6 1.5-4.6 4.1 0 2.2 1.3 3.5 3.7 4.1l1.4.3c1.5.4 2.2.8 2.2 1.8 0 1.1-.9 1.7-2.6 1.7-1.8 0-2.8-.7-3.1-2h-2.3c.3 2.3 2 3.8 4.7 3.8z"/>
        </svg>
      );
    case 'express':
      return (
        <span className="font-mono font-bold text-xs tracking-tighter text-slate-200">
          ex
        </span>
      );
    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#13aa52" d="M12 0C11.6 0 11.2.2 11 .6L4.7 9.8c-.9 1.4-.9 3.2 0 4.6l6.3 9.2c.2.4.6.6 1 .6s.8-.2 1-.6l6.3-9.2c.9-1.4.9-3.2 0-4.6L13 .6c-.2-.4-.6-.6-1-.6zm0 2.5l5.5 8c.5.8.5 1.8 0 2.6l-5.5 8-5.5-8c-.5-.8-.5-1.8 0-2.6l5.5-8z"/>
        </svg>
      );
    case 'js':
      return (
        <span className="bg-[#f7df1e] text-black font-extrabold text-[11px] px-1 py-0.5 rounded leading-none">
          JS
        </span>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#38bdf8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    default:
      return <Terminal className={className} />;
  }
}

export default function Hero({ onOpenResume }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Glowing Blobs */}
      <div className="glow-blob w-96 h-96 bg-brand-purple/20 -top-10 -left-20 animate-pulse-slow"></div>
      <div className="glow-blob w-[30rem] h-[30rem] bg-brand-blue/20 -bottom-20 -right-20 animate-pulse-slow delay-1000"></div>
      <div className="glow-blob w-80 h-80 bg-brand-indigo/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div className="pill-badge mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span>I'M A MERN STACK DEVELOPER</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm <span className="gradient-text">Manikanda</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6">
              I build things for the web.
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="btn-gradient px-7 py-3.5 rounded-full text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="btn-outline px-7 py-3.5 rounded-full text-base font-semibold flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-brand-purple group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Tech Stack Row */}
            <div className="w-full pt-6 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <span>Technologies I Work With</span>
                <span className="w-8 h-px bg-slate-700"></span>
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {techStackRow.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 hover:border-brand-purple/40 hover:bg-slate-800/80 transition-all duration-300 group cursor-default shadow-sm"
                  >
                    <TechIcon type={tech.icon} className="w-4 h-4" />
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Glowing Avatar & Floating Code Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Glowing Background Radial Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 via-brand-indigo/30 to-brand-blue/30 rounded-full filter blur-3xl opacity-70 animate-pulse-slow"></div>

              {/* Avatar Frame Container */}
              <div className="relative z-10 mx-auto w-72 sm:w-80 h-72 sm:h-80 rounded-3xl p-2.5 bg-gradient-to-b from-brand-purple/40 via-brand-indigo/20 to-transparent border border-white/20 shadow-glow-md backdrop-blur-sm overflow-hidden group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-950">
                  <img
                    src={personalInfo.avatar}
                    alt="Manikanda Prabu S - MERN Stack Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle inner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Status Pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-medium text-slate-200">Available for Opportunities</span>
                </div>
              </div>

              {/* Floating Code Snippet Card */}
              <div className="absolute -bottom-10 -left-4 sm:-left-8 z-30 w-72 sm:w-80 rounded-2xl bg-slate-900/95 border border-brand-purple/30 p-4 shadow-glass backdrop-blur-xl animate-float">
                {/* Code card header */}
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">developer.js</span>
                </div>

                {/* Code syntax */}
                <pre className="font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span> developer = &#123;{'\n'}
                    {'  '}name: <span className="text-emerald-300">"Manikanda"</span>,{'\n'}
                    {'  '}skills: [<span className="text-sky-300">"React"</span>, <span className="text-sky-300">"Node"</span>, <span className="text-sky-300">"MongoDB"</span>, <span className="text-sky-300">"Express"</span>],{'\n'}
                    {'  '}passion: <span className="text-emerald-300">"Building for the web"</span>{'\n'}
                    &#125;;
                  </code>
                </pre>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
