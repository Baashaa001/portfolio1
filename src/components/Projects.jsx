import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Sparkles, Eye } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { useInView } from '../hooks/useInView';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDot, setActiveDot] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="glow-blob w-[32rem] h-[32rem] bg-brand-indigo/10 -bottom-20 -left-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="pill-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Some of My <span className="gradient-text">Recent Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Engineered full-stack applications with an emphasis on real-time data flow, state management, and user-friendly interface design.
          </p>
        </div>

        {/* 3 Numbered Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-brand-purple/40 transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80"></div>

                  {/* Number Badge (01, 02, 03) */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/90 border border-brand-purple/40 shadow-md backdrop-blur-md">
                    <span className="font-mono text-xs font-extrabold text-white">
                      {project.id}
                    </span>
                  </div>

                  {/* Quick Inspect Button Overlay */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-brand-purple text-slate-300 hover:text-white border border-white/10 transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 cursor-pointer"
                    title="View Project Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-brand-purple transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800/90 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer: View Project Links */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <a
                  href={project.liveUrl || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:text-white group/link transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                  <ArrowRight className="w-4 h-4 group-link-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer px-2 py-1 rounded hover:bg-white/5"
                  >
                    Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveDot(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeDot === idx
                  ? 'w-8 h-2 bg-gradient-to-r from-brand-purple to-brand-blue shadow-glow-sm'
                  : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
