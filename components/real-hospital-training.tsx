'use client';

import React from 'react';
import { ShieldCheck, Heart, UserCheck, Flame } from 'lucide-react';

export function RealHospitalTraining() {
  const hospitalShields = [
    { name: "Apollo Clinics & Hospitals", desc: "Super-specialty Clinical Rotations" },
    { name: "Fortis Healthcare", desc: "Intensive Trauma Care Internships" },
    { name: "Max Healthcare Network", desc: "Diagnostic & Physiotherapy Labs" },
    { name: "Medanta The Medicity", desc: "Advanced Cardiovascular Scanning" },
    { name: "AIIMS (Affiliates)", desc: "National Academic Research Exposure" },
    { name: "Jaypee Hospital Noida", desc: "Practical Orthopedic Rehabilitation" },
    { name: "Narayana Health", desc: "Cardiac Diagnostics & Radiology" },
    { name: "PSRI Hospital Delhi", desc: "Clinical Physiotherapy Postings" }
  ];

  const trainingModes = [
    {
      title: "Physiotherapy Bedside Care",
      desc: "Work beside orthopedic surgeons assisting patient biomechanics post-surgery inside functional ICUs and recovery wards.",
      img: "https://picsum.photos/seed/physioseed/400/250"
    },
    {
      title: "MRI Diagnostic Labs",
      desc: "Operate high-end 3T resonance diagnostic scanning suites. Calibrate pulse sequences, manage patient orientation, and prepare contrast studies.",
      img: "https://picsum.photos/seed/mriseed/400/250"
    },
    {
      title: "Active Radiology Depts",
      desc: "Gain expertise in emergency trauma rooms. Read real CT scans, digital fluoroscopy, x-ray shielding, and tele-radiology.",
      img: "https://picsum.photos/seed/radiologyseed/400/250"
    },
    {
      title: "Critical Patient Care",
      desc: "Learn healthcare safety. Control infection protocols, understand patient dignity, and manage medical emergencies elegantly.",
      img: "https://picsum.photos/seed/careseed/400/250"
    }
  ];

  return (
    <section id="hospital-training-section" className="py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#fffc4d] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              Experiential Learning Engine
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight leading-none">
              Learn Inside Real Hospitals <br className="hidden md:block"/>— <span className="text-primary-light text-blue-400">Not Just Classrooms</span>
            </h2>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl leading-relaxed">
              Medical knowledge cannot be memorized from textbooks alone. NIMT integrates students directly into fully-functional multi-specialty hospitals to interact with genuine recovery patients.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-block p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
              <p className="text-[#fffc4d] text-2xl font-black">2,000+ Hrs</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">In-Hospital Clinical Rotations</p>
            </div>
          </div>
        </div>

        {/* Training Modes Pictures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trainingModes.map((mode, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 flex flex-col justify-between shadow-xl">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={mode.img}
                  alt={mode.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/70 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-extrabold text-[#fffc4d] border border-[#fffc4d]/35">
                  Live Postings
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-display text-base font-bold text-white transition-colors group-hover:text-[#fffc4d]">
                  {mode.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {mode.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hospital Partner Grid */}
        <div id="hospital-brand-grid" className="pt-8 border-t border-white/10">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8 flex items-center justify-center gap-2">
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            NIMT Clinical Posting & Internship Networks
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hospitalShields.map((hp) => (
              <div
                key={hp.name}
                className="p-4 bg-zinc-900 rounded-xl border border-white/5 hover:border-blue-500/40 text-center transition-all group hover:bg-[#0041f5]/10"
              >
                <div className="h-10 flex items-center justify-center mb-2">
                  <span className="font-display font-extrabold text-[#fffc4d] tracking-tight group-hover:scale-105 transition-transform">
                    {hp.name.split(' ')[0]} <span className="text-xs text-white/50">{hp.name.split(' ').slice(1).join(' ')}</span>
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {hp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
