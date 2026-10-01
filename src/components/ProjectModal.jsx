import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-brand-purple/40 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-white/10 cursor-pointer"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
            PROJECT {project.id}
          </span>
          <span className="text-xs font-semibold text-slate-400">
            Featured Full-Stack Build
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-brand-purple font-medium text-sm mb-6">
          {project.tagline}
        </p>

        {/* Mockup Preview Image */}
        <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg group">
          <img
            src={project.image}
            alt={`${project.title} Interface Screenshot`}
            className="w-full h-auto object-cover max-h-80"
          />
        </div>

        {/* Full Overview */}
        <div className="mb-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
            Overview & Architecture
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Technical Highlights */}
        {project.highlights && (
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-brand-purple/10 text-brand-purple border border-brand-purple/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="btn-outline px-5 py-2.5 rounded-xl text-sm font-medium"
          >
            Close
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
