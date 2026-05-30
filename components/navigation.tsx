'use client';

import React, { useState, useEffect } from 'react';
import { BadgeAlert, Phone, ShieldCheck, Heart, Sparkles, MessageSquare } from 'lucide-react';

interface NavigationProps {
  onApplyClick: () => void;
  onScholarshipClick: () => void;
}

export function AnnouncementBar({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <div id="announcement-bar" className="sticky top-0 z-50 w-full bg-[#fffc4d] text-[#000000] py-2.5 px-4 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-2">
          <BadgeAlert className="h-5 w-5 text-primary shrink-0 animate-bounce" />
          <p className="text-xs md:text-sm font-semibold tracking-tight">
            🚨 <span className="font-bold">Important Admission Update:</span> Last Date for CPET 2026 Registration for BPT & BMRIT Admissions has been Extended to{" "}
            <span className="inline-block bg-primary text-white px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider animate-pulse-subtle">
              4th June 2026
            </span>
            . Secure your seat at NIMT today.
          </p>
        </div>
        <button
          id="announcement-apply-btn"
          onClick={onApplyClick}
          className="bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded transition-all duration-200 shrink-0 shadow-sm whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95"
        >
          Apply Now &rarr;
        </button>
      </div>
    </div>
  );
}

export function StickyNav({ onApplyClick, onScholarshipClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav-header"
      className={`w-full transition-all duration-300 ${
        scrolled ? 'bg-[#0041f5] text-white shadow-lg py-2.5' : 'bg-[#0041f5]/95 text-white/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand details */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-primary p-2 rounded-lg font-black text-xl tracking-tighter shadow-sm flex items-center justify-center">
            NIMT
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold tracking-tight">NIMT Greater Noida</span>
            <span className="text-[10px] uppercase tracking-widest text-[#fffc4d] font-semibold">Allied Health Sciences</span>
          </div>
        </div>

        {/* Quick info bar highlights */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-white/90">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#fffc4d]" />
            <span>ABVMU Affiliated College</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[#fffc4d]" />
            <span>Scholarships Up to 15%</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <div className="flex items-center gap-1.5">
            <Heart className="h-4 w-4 text-[#fffc4d]" />
            <span>100% Hospital Placements</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            id="nav-scholarship-btn"
            onClick={onScholarshipClick}
            className="hidden sm:inline-flex bg-transparent hover:bg-white/10 text-[#fffc4d] border border-[#fffc4d]/50 hover:border-[#fffc4d] text-xs font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer"
          >
            Check Scholarship
          </button>
          <a
            id="nav-call-btn"
            href="tel:+919555192192"
            className="flex items-center gap-1.5 bg-black/30 hover:bg-black/50 text-white text-xs font-bold px-3 py-2 rounded-lg transition-all"
          >
            <Phone className="h-3.5 w-3.5 text-[#fffc4d]" />
            <span className="hidden md:inline">Call Admissions:</span> +91 95551 92192
          </a>
          <button
            id="nav-apply-btn"
            onClick={onApplyClick}
            className="bg-[#fffc4d] hover:bg-yellow-300 text-black text-xs font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
