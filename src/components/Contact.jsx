import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import GithubIcon from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast(`Copied ${fieldName} to clipboard!`);
    }
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#8b5cf6', '#6366f1', '#3b82f6', '#38bdf8']
        });
      } catch (err) {
        // Safe fallback
      }

      if (onShowToast) {
        onShowToast("Thank you, Manikanda! Your message has been sent successfully.");
      }

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="glow-blob w-96 h-96 bg-brand-purple/15 bottom-0 right-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="pill-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S WORK TOGETHER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 max-w-xl text-base sm:text-lg">
            I'm always open to discussing new opportunities and ideas. Let's build something great together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-glass">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Send a Direct Message</span>
                <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Time Opportunity / Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Message <span className="text-brand-purple">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or open role..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gradient w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Get In Touch</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Follow Me Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wider text-xs">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Feel free to connect directly via email, phone, or view my latest commits on GitHub.
              </p>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-brand-purple/40 transition-colors group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase">Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-brand-purple transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'Email')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-brand-blue/40 transition-colors group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase">Phone</div>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-brand-blue transition-colors truncate block"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                    className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-brand-indigo/40 transition-colors group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-indigo/20 border border-brand-indigo/30 flex items-center justify-center shrink-0">
                      <GithubIcon className="w-5 h-5 text-brand-indigo" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase">GitHub Profile</div>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-white hover:text-brand-indigo transition-colors truncate block"
                      >
                        github.com/{personalInfo.githubUsername}
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                    title="Visit GitHub"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/50 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-300">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
