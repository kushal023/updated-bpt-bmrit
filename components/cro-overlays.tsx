'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, FileEdit, X, ClipboardList, ShieldCheck, Gift, Percent } from 'lucide-react';

interface CroProps {
  onApplyTriggerClick: () => void;
  onPrecalculateScholarship: (score: number) => void;
}

export function CroOverlays({ onApplyTriggerClick, onPrecalculateScholarship }: CroProps) {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showSideSticky, setShowSideSticky] = useState(false);
  
  // Custom states for local calculator
  const [percentage, setPercentage] = useState('');
  const [course, setCourse] = useState('BPT');
  const [resultMsg, setResultMsg] = useState('');

  // 1. Detect scroll position to show quick floating triggers
  useEffect(() => {
    const handleScroll = () => {
      setShowSideSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Detect exit intent (mouse leaving window top edge)
  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5 && !triggered) {
        triggered = true;
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // Fallback timer for mobile (if they stay 40s, show it anyway!)
    const timer = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        setShowExitPopup(true);
      }
    }, 45000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const scoreVal = parseFloat(percentage);
    if (isNaN(scoreVal) || scoreVal < 0 || scoreVal > 100) {
      setResultMsg("Please enter a valid percentage (0-100).");
      return;
    }

    let discount = 0;
    if (scoreVal >= 99) discount = 15;
    else if (scoreVal >= 90) discount = 10;
    else if (scoreVal >= 85) discount = 5;

    if (discount > 0) {
      setResultMsg(`🎉 Eligible! Pre-Approved ${discount}% Tuition Waiver for ${course}. Apply to lock this scholarship!`);
      onPrecalculateScholarship(scoreVal);
    } else {
      setResultMsg(`👍 Eligible for Direct Admission in ${course}. No pre-approved discount, but seats are open!`);
    }
  };

  return (
    <>
      {/* 1. COMPACT FLOATING MOBILE NAVIGATION STRIP */}
      <div
        id="mobile-sticky-cta-bar"
        className="fixed bottom-0 inset-x-0 bg-neutral-950 text-white py-3 px-4 z-40 border-t border-white/10 md:hidden flex items-center justify-between gap-3 shadow-2xl"
      >
        <a
          id="mobile-sticky-call"
          href="tel:+919555192192"
          className="flex-1 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold"
        >
          <PhoneCall className="h-4 w-4 text-[#fffc4d]" />
          Call
        </a>
        <a
          id="mobile-sticky-whatsapp"
          href="https://wa.me/919555192192?text=Hello,%20I%20am%20interested%20in%20NIMT%20Allied%20Health%20Admissions%202026."
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 py-3 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold"
        >
          <MessageSquare className="h-4 w-4 fill-white text-emerald-600" />
          WhatsApp
        </a>
        <button
          id="mobile-sticky-apply"
          onClick={onApplyTriggerClick}
          className="bg-[#fffc4d] hover:bg-yellow-300 text-black py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1 cursor-pointer"
        >
          <FileEdit className="h-4 w-4 shrink-0" />
          Apply
        </button>
      </div>

      {/* 2. DESKTOP FLOATING SIDEWAYS ACTION PANEL */}
      {showSideSticky && (
        <div id="desktop-side-sticky-triggers" className="hidden md:flex fixed right-4 bottom-6 flex-col gap-3 z-40 animate-fade-in">
          
          {/* Quick Chat */}
          <a
            id="panel-whatsapp-trigger"
            href="https://wa.me/919555192192?text=Hi,%20I%20want%20to%20know%20more%20about%20NIMT%20Allied%20Health%20Programmes."
            target="_blank"
            rel="noreferrer"
            className="h-12 w-12 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:-translate-y-1"
            title="Chat with Counsellor"
          >
            <MessageSquare className="h-5 w-5 fill-white text-emerald-500" />
          </a>

          {/* Call helpline */}
          <a
            id="panel-call-trigger"
            href="tel:+919555192192"
            className="h-12 w-12 bg-zinc-950 hover:bg-zinc-850 text-[#fffc4d] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:-translate-y-1 border border-white/10"
            title="Helpline Hotline"
          >
            <PhoneCall className="h-5 w-5" />
          </a>

          {/* Quick Apply Floating tab */}
          <button
            id="panel-apply-trigger"
            onClick={onApplyTriggerClick}
            className="h-12 bg-[#0041f5] hover:bg-neutral-900 text-white px-5 rounded-full flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest shadow-2xl border border-white/15 cursor-pointer transition-all hover:scale-105"
          >
            <FileEdit className="h-4 w-4" />
            Apply Online
          </button>

        </div>
      )}

      {/* 3. DYNAMIC EXIT INTENT AND TIME EXPIRE DIALOG MODAL */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50 animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-3xl overflow-hidden max-w-lg w-full p-6 md:p-8 relative shadow-2xl border border-neutral-200">
            
            {/* Close */}
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-6 text-center">
              <div className="h-14 w-14 bg-[#fffc4d]/20 text-[#8a5506] rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-[#8a5506]" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-primary uppercase font-black tracking-widest block">Limited Seats & Free Waiver Assessment</span>
                <h3 className="font-display text-xl md:text-2xl font-black text-[#000000] leading-tight">
                  Don&apos;t Let Your Merit Go and Expire!
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto font-light">
                  Parents and Candidates: Register your 12th PCB board scores to instantly lock active scholarships and zero-interest monthly EMI plans.
                </p>
              </div>

              {/* Minimalist interactive checklist on score */}
              <form onSubmit={handleCalcSubmit} className="bg-neutral-50 p-4 rounded-xl border border-neutral-150 text-left space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="block text-[9px] uppercase font-bold text-gray-500 mb-1">Target Course</label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full bg-white border border-neutral-200 text-gray-900 rounded px-2 py-1.5 outline-none focus:border-primary font-bold text-xs"
                    >
                      <option value="BPT">Physiotherapy (BPT)</option>
                      <option value="BMRIT">Imaging (BMRIT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase font-bold text-gray-500 mb-1">12th PCB Score (%)</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="e.g. 91%"
                      value={percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                      className="w-full bg-white border border-neutral-200 text-gray-900 rounded px-2 py-1.5 outline-none focus:border-primary font-semibold text-xs"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider py-2 rounded transition-all cursor-pointer"
                >
                  Verify Scholarship Instantly
                </button>

                {resultMsg && (
                  <p className="text-center text-xs font-bold text-emerald-800 bg-emerald-50 rounded p-2 border border-emerald-100">
                    {resultMsg}
                  </p>
                )}
              </form>

              {/* Dialog CTA triggers */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <button
                  onClick={() => {
                    setShowExitPopup(false);
                    onApplyTriggerClick();
                  }}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white text-xs font-extrabold uppercase tracking-wider py-3.5 rounded-xl transition-all"
                >
                  Proceed to Direct Registration &rarr;
                </button>
                <button
                  onClick={() => setShowExitPopup(false)}
                  className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-3.5 px-4 rounded-xl transition-all"
                >
                  Continue Reading
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[9px] text-gray-400">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Scholarships verified live by NIMT Academic Registrars</span>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
