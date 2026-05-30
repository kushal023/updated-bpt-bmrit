'use client';

import React from 'react';
import { ShieldCheck, Award, Users, Activity, GraduationCap, ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onApplyClick: () => void;
  onEnquiryClick: () => void;
}

export function HeroSection({ onApplyClick, onEnquiryClick }: HeroSectionProps) {
  // We can write illustrative imagery for modern physiotherapy and medical imaging
  return (
    <section id="hero-section" className="relative bg-[#0041f5] text-white overflow-hidden py-16 lg:py-24 border-b border-white/10">
      {/* Decorative ambient background overlays */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copywriting & High Conversion Anchors */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Sub-badge identifier */}
          <div className="inline-flex items-center gap-1.5 bg-[#fffc4d]/10 border border-[#fffc4d]/30 text-[#fffc4d] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-[#fffc4d] animate-pulse" />
            Admissions Open 2026 - 2027
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
            Build a <span className="text-[#fffc4d]">High-Growth</span> Career in Healthcare After 12th PCB
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl font-light">
            Choose from NIMT&apos;s industry-integrated healthcare programmes and gain real hospital exposure, clinical practical training, diagnostics internships, and absolute placement assistance.
          </p>

          {/* Programme selector tabs as pills */}
          <div className="flex flex-wrap gap-3 items-center pt-2">
            <span className="text-xs uppercase tracking-widest text-[#fffc4d] font-bold">Featured Programmes:</span>
            <div className="inline-flex items-center gap-2 bg-black/25 px-3 py-1.5 rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-bold tracking-tight">Bachelor of Physiotherapy (BPT)</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-black/25 px-3 py-1.5 rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-bold tracking-tight">B.Sc Medical Radiology & Imaging (BMRIT)</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full pt-4">
            <div className="flex flex-col items-center p-2.5 bg-white/5 rounded-xl border border-white/10 text-center">
              <ShieldCheck className="h-5 w-5 mb-1 text-[#fffc4d]" />
              <span className="text-[10px] font-bold tracking-tight uppercase text-white">ABVMU Affiliated</span>
            </div>
            <div className="flex flex-col items-center p-2.5 bg-white/5 rounded-xl border border-white/10 text-center">
              <Award className="h-5 w-5 mb-1 text-[#fffc4d]" />
              <span className="text-[10px] font-bold tracking-tight uppercase text-white">30+ Years Legacy</span>
            </div>
            <div className="flex flex-col items-center p-2.5 bg-white/5 rounded-xl border border-white/10 text-center">
              <Users className="h-5 w-5 mb-1 text-[#fffc4d]" />
              <span className="text-[10px] font-bold tracking-tight uppercase text-white">500+ Hiring Partners</span>
            </div>
            <div className="flex flex-col items-center p-2.5 bg-white/5 rounded-xl border border-white/10 text-center">
              <Activity className="h-5 w-5 mb-1 text-[#fffc4d]" />
              <span className="text-[10px] font-bold tracking-tight uppercase text-white">Real Hospital Lab</span>
            </div>
            <div className="flex flex-col items-center p-2.5 bg-white/5 rounded-xl border border-white/10 text-center col-span-2 sm:col-span-1">
              <GraduationCap className="h-5 w-5 mb-1 text-[#fffc4d]" />
              <span className="text-[10px] font-bold tracking-tight uppercase text-white">15% Scholarships</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4">
            <button
              id="hero-apply-cta"
              onClick={onApplyClick}
              className="flex-1 sm:flex-initial bg-[#fffc4d] hover:bg-yellow-300 text-black text-sm font-black uppercase tracking-wider py-4 px-8 rounded-xl shadow-xl hover:shadow-[#fffc4d]/20 transition-all hover:-translate-y-0.5 text-center cursor-pointer"
            >
              Apply Online Now &rarr;
            </button>
            <button
              id="hero-counselling-cta"
              onClick={onEnquiryClick}
              className="flex-1 sm:flex-initial bg-black/40 hover:bg-black/60 text-white text-sm font-bold border border-white/30 py-4 px-6 rounded-xl hover:border-white transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="h-4 w-4 text-[#fffc4d]" />
              Get Free Admission Counselling
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span>12th PCB eligibility criteria applies • Enquiries answered in 15 mins</span>
          </div>

        </div>

        {/* Right Side: Interactive, High-Trust Graphic Display */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 w-full overflow-hidden rounded-2xl border-4 border-white/15 shadow-2xl bg-black/20">
            {/* Visual Header */}
            <div className="bg-black/40 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#fffc4d] font-bold">NIMT Clinical Lab Portal</span>
            </div>

            {/* Simulated Dynamic Premium Interactive Image Portal showing Physiotherapy vs Radiology */}
            <div className="p-4 space-y-4 bg-gradient-to-b from-blue-900/40 to-[#0041f5]/20">
              <div className="grid grid-cols-2 gap-3">
                {/* Panel 1 */}
                <div id="panel-physio" className="group relative h-48 rounded-xl overflow-hidden shadow-lg border border-white/10">
                  <img
                    src="https://picsum.photos/seed/physio/400/300"
                    alt="Physiotherapy student treating patient"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#fffc4d] bg-black/50 self-start px-2 py-0.5 rounded mb-1">BPT Clinic</span>
                    <h3 className="text-xs font-bold text-white leading-tight">Hands-on Patient Physiotherapy Care</h3>
                  </div>
                </div>

                {/* Panel 2 */}
                <div id="panel-radiology" className="group relative h-48 rounded-xl overflow-hidden shadow-lg border border-white/10">
                  <img
                    src="https://picsum.photos/seed/radiology/400/300"
                    alt="Radiology student using MRI/CT equipment"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#08a7e6] bg-black/50 self-start px-2 py-0.5 rounded mb-1">Imaging Center</span>
                    <h3 className="text-xs font-bold text-white leading-tight">Advanced 3T MRI & Multi-slice CT scans</h3>
                  </div>
                </div>
              </div>

              {/* Patient Care Banner Row */}
              <div id="panel-hosp" className="relative h-28 rounded-xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src="https://picsum.photos/seed/clinical/800/300"
                  alt="Modern Hospital Training"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent flex flex-col justify-center p-4">
                  <p className="text-xs font-bold text-[#fffc4d] uppercase tracking-wide">Elite Affiliation</p>
                  <p className="text-sm font-semibold text-white">Full-Day Hospital Rounds & Case Studies</p>
                  <p className="text-[10px] text-zinc-300">Joint training inside Max, Fortis, Medanta & AIIMS</p>
                </div>
              </div>

              {/* Experience metrics overlay */}
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-between text-xs">
                <div className="text-center flex-1 border-r border-white/10">
                  <p className="text-[#fffc4d] font-black text-base">2000+</p>
                  <p className="text-[9px] uppercase tracking-wider text-zinc-300">Clinical Hours</p>
                </div>
                <div className="text-center flex-1 border-r border-white/10">
                  <p className="text-[#fffc4d] font-black text-base">100%</p>
                  <p className="text-[9px] uppercase tracking-wider text-zinc-300">Internship Guarantee</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-[#fffc4d] font-black text-base">₹25 LPA</p>
                  <p className="text-[9px] uppercase tracking-wider text-zinc-300">Max Package</p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Accent decoration back glow */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/30 rounded-full blur-2xl z-0" />
        </div>

      </div>
    </section>
  );
}
