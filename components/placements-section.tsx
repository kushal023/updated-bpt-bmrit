'use client';

import React, { useState } from 'react';
import { ShieldCheck, IndianRupee, TrendingUp, Users, Sparkles, Star } from 'lucide-react';

export function PlacementsSection() {
  const [activeSalaryTab, setActiveSalaryTab] = useState<'BPT' | 'BMRIT'>('BPT');

  const recruiters = [
    { name: "Apollo Hospitals", highlight: "Diagnostic Labs & Rehab clinics" },
    { name: "Fortis Healthcare", highlight: "Therapy Centers & Scan networks" },
    { name: "Max Healthcare", highlight: "Comprehensive radiology wings" },
    { name: "Medanta The Medicity", highlight: "Specialty cardio-trauma scans" },
    { name: "AIIMS Affiliates", highlight: "Academic research & diagnostics" },
    { name: "Siemens Healthineers", highlight: "Radiology machine calibrations" },
    { name: "Cipla Labs", highlight: "Medical research applications" },
    { name: "Narayana Health", highlight: "Clinical patient diagnostics" }
  ];

  const packageBreakdown = {
    BPT: [
      { phase: "Entry-Level Career (0-2 Yrs)", range: "₹2.5 – ₹4.5 LPA", title: "Junior Physiotherapist, Clinical Therapist", details: "Initial postings in private diagnostic setups, local orthopedics, or supervised hospital therapist roles." },
      { phase: "Mid-Level Career (3-6 Yrs)", range: "₹5 – ₹10 LPA", title: "Senior Consultant, Sports Rehab Specialist", details: "Specialization in athletic rehabilitation, neuro-paralysis clinics, or establishing custom private health clinics." },
      { phase: "Senior-Level Career (7+ Yrs)", range: "₹10 – ₹25+ LPA", title: "Head of Rehab, Global Consultant Specialist", details: "Managing multi-specialty research wings, working with premium sports clubs, or starting national rehabilitation franchises." }
    ],
    BMRIT: [
      { phase: "Entry-Level Career (0-2 Yrs)", range: "₹2.5 – ₹4.5 LPA", title: "Radiographer, CT/MRI Technician Assistant", details: "Basic scanning operations, sequence calibration, patient alignments, and digital film processing." },
      { phase: "Mid-Level Career (3-6 Yrs)", range: "₹5 – ₹10 LPA", title: "Lead Scanning Technologist, Imaging Consultant", details: "Interpreting complex dual CT contrasts, planning high-precision MRI scans, and managing diagnostic lab units." },
      { phase: "Senior-Level Career (7+ Yrs)", range: "₹10 – ₹20+ LPA", title: "Laboratory Director, Application Specialist", details: "Heading premium multi-site radiology groups or managing hardware application parameters for machine conglomerates." }
    ]
  };

  return (
    <section id="placements-section" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0041f5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#fffc4d] font-black">Day-One Career Preparation</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
              Your Professional Career Starts from Day One
            </h2>
            <div className="h-1.5 w-24 bg-[#08a7e6] rounded-full" />
            <p className="text-sm md:text-base text-zinc-350 font-light max-w-2xl leading-relaxed">
              We align our clinical expectations directly with recruiter parameters. Regular interviews, soft skill sessions, and interactive diagnostic seminars prepare students to transition seamlessly into the workforce.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-block p-5 bg-white/5 border border-white/10 rounded-2xl text-left">
              <p className="text-[#fffc4d] text-3xl font-black">500+</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-extrabold">Active Hiring Partners</p>
            </div>
          </div>
        </div>

        {/* Core Career Drivers Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="p-5 bg-zinc-800/55 border border-white/5 rounded-2xl">
            <p className="text-[#fffc4d] text-2xl font-black mb-1">500+</p>
            <p className="text-xs font-semibold text-white">Hiring Partners</p>
            <p className="text-[10px] text-zinc-400">National healthcare chains</p>
          </div>
          <div className="p-5 bg-zinc-800/55 border border-white/5 rounded-2xl">
            <p className="text-[#fffc4d] text-2xl font-black mb-1">100%</p>
            <p className="text-xs font-semibold text-white">Placement Assistance</p>
            <p className="text-[10px] text-zinc-400">Custom resume grooming</p>
          </div>
          <div className="p-5 bg-zinc-800/55 border border-white/5 rounded-2xl">
            <p className="text-[#fffc4d] text-2xl font-black mb-1">100%</p>
            <p className="text-xs font-semibold text-white">Clinical Internships</p>
            <p className="text-[10px] text-zinc-400">Accredited medical postings</p>
          </div>
          <div className="p-5 bg-zinc-800/55 border border-white/5 rounded-2xl">
            <p className="text-[#fffc4d] text-2xl font-black mb-1">1-on-1</p>
            <p className="text-xs font-semibold text-white">Industry Mentorship</p>
            <p className="text-[10px] text-zinc-400">Practicing doctor experts</p>
          </div>
        </div>

        {/* Interactive Salary Progression */}
        <div id="salary-progression-panel" className="bg-neutral-950 p-8 rounded-3xl border border-white/10 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] text-[#fffc4d] uppercase font-bold tracking-widest block mb-1">Earning Potential Analysis</span>
              <h3 className="font-display text-xl md:text-2xl font-black text-white">
                Expected Graduate Salary Progression (LPA)
              </h3>
            </div>

            {/* Custom Tab selectors for Salary progression slider */}
            <div className="inline-flex bg-zinc-800 p-1.5 rounded-xl gap-2">
              <button
                id="salary-bpt-tab"
                onClick={() => setActiveSalaryTab('BPT')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  activeSalaryTab === 'BPT' ? 'bg-[#0041f5] text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                BPT Careers
              </button>
              <button
                id="salary-bmrit-tab"
                onClick={() => setActiveSalaryTab('BMRIT')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                  activeSalaryTab === 'BMRIT' ? 'bg-[#0041f5] text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                BMRIT Careers
              </button>
            </div>
          </div>

          {/* Timeline columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {packageBreakdown[activeSalaryTab].map((p, i) => (
              <div key={i} className="bg-zinc-900 border border-white/5 rounded-2xl p-6 relative group hover:border-[#08a7e6]/40 transition-all">
                {/* Visual marker dot */}
                <div className="absolute -top-3.5 left-5 bg-primary text-white font-black text-[10px] h-7 w-7 rounded-full flex items-center justify-center border-4 border-neutral-950">
                  {i + 1}
                </div>
                
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2 mt-2">
                  {p.phase}
                </p>
                <div className="flex items-center gap-1.5 text-lg font-black text-[#fffc4d] mb-3">
                  <IndianRupee className="h-4.5 w-4.5" />
                  {p.range}
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                  {p.title}
                </h4>
                <p className="text-xs text-zinc-450 leading-relaxed font-light">
                  {p.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium recruiter logo ticker mockup */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
            Graduates Employed at India&apos;s Foremost Healthcare Conglomerates
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recruiters.map((rec) => (
              <div
                key={rec.name}
                className="p-4 bg-zinc-900 border border-white/5 hover:border-[#08a7e6]/30 text-center rounded-xl transition-all"
              >
                <span className="font-display font-extrabold text-white/90 text-sm block">
                  {rec.name}
                </span>
                <span className="text-[9px] text-zinc-400 uppercase tracking-widest block mt-1">
                  {rec.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
