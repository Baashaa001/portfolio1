import React from 'react';
import { Layers, Code2, Box, Network, Sparkles, Rocket } from 'lucide-react';
import { currentlyLearning } from '../data/portfolioData';

export default function LearningBanner() {
  const getIcon = (name) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-brand-purple" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-brand-indigo" />;
      case 'Box':
        return <Box className="w-5 h-5 text-brand-blue" />;
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      default:
        return <Rocket className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-10 overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-brand-purple/30 shadow-glass">
          
          {/* Subtle glowing orb */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
                <Rocket className="w-3.5 h-3.5" />
                <span>Continuous Growth</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Currently Expanding My Tech Horizon
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Dedicated to staying ahead of industry standards by actively mastering modern full-stack architectures, TypeScript type-safety, and containerized workflows.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 shrink-0 w-full md:w-auto">
              {currentlyLearning.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-brand-purple/40 transition-all duration-300 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {item.name}
                    </div>
                    <div className="text-[10px] font-semibold text-brand-purple">
                      {item.status}
                    </div>
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
