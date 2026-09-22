import React from 'react';
import { Layers, Sparkles, Database, Layout, Server, Check } from 'lucide-react';
import { skillColumns, additionalSkills } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  const getColumnIcon = (index) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-brand-purple" />;
      case 1:
        return <Layers className="w-5 h-5 text-brand-indigo" />;
      case 2:
        return <Server className="w-5 h-5 text-brand-blue" />;
      default:
        return <Database className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" ref={ref} className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Ambient background blur */}
      <div className="glow-blob w-96 h-96 bg-brand-purple/10 top-1/3 -right-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="pill-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MY SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Crafting scalable and responsive digital experiences with the modern JavaScript ecosystem and engineering principles.
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillColumns.map((col, colIdx) => (
            <div
              key={col.title}
              className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${colIdx * 150}ms` }}
            >
              <div>
                {/* Card Title */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                    {getColumnIcon(colIdx)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {col.title}
                  </h3>
                </div>

                {/* Skill List with Animated Bars */}
                <div className="space-y-6">
                  {col.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-brand-purple transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 font-medium">
                            {skill.level}
                          </span>
                          <span className="text-xs font-mono font-bold text-white bg-slate-800/80 px-2 py-0.5 rounded border border-white/5">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-purple via-brand-indigo to-brand-blue transition-all duration-1000 ease-out shadow-glow-sm"
                          style={{
                            width: isInView ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${colIdx * 150 + 200}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle footer indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Verified with hands-on projects</span>
                <Check className="w-4 h-4 text-emerald-400" />
              </div>

            </div>
          ))}
        </div>

        {/* Additional Skills Tag Chips */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/10 text-center">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
            Additional Computer Science & Tooling Proficiencies
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {additionalSkills.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 text-slate-300 border border-white/10 hover:border-brand-purple/50 hover:text-white hover:bg-brand-purple/10 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
