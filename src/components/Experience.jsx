import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="experience" ref={ref} className="py-24 relative overflow-hidden bg-slate-950/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="pill-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Practical <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Hands-on technical engineering experience applying real-time hardware and software logic to solve problems.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto">
          {experience.map((item, idx) => (
            <div
              key={item.company}
              className={`relative pl-8 sm:pl-10 pb-8 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Vertical timeline line */}
              <div className="absolute top-2 left-3 sm:left-4 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple via-brand-blue to-transparent"></div>

              {/* Glowing timeline node */}
              <div className="absolute top-2 left-0 sm:left-1 w-6 h-6 rounded-full bg-[#0a0e17] border-2 border-brand-purple flex items-center justify-center shadow-glow-sm">
                <div className="w-2 h-2 rounded-full bg-brand-purple animate-ping"></div>
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-brand-purple/40">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {item.role}
                    </h3>
                    <div className="text-base font-semibold text-brand-purple">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Accomplishment Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-400">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
