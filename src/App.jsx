import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LearningBanner from './components/LearningBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 140);

  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-100 selection:bg-brand-purple/30 selection:text-white flex flex-col relative overflow-x-hidden font-sans">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0"></div>
      
      {/* Sticky Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <LearningBanner />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View / Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Feedback Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
