'use client';

import React from 'react';
import { 
  Building2, 
  Activity, 
  Heart, 
  PlusCircle, 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Milestone, 
  Dna, 
  Cross 
} from 'lucide-react';

interface Recruiter {
  name: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  brandColor: string;
  bgHex: string;
}

const RECRUITERS: Recruiter[] = [
  {
    name: "Apollo Hospitals",
    type: "Super Specialty Care",
    icon: Stethoscope,
    brandColor: "group-hover:text-amber-600",
    bgHex: "group-hover:bg-amber-50 group-hover:border-amber-200"
  },
  {
    name: "Fortis Healthcare",
    type: "Multi-Specialty",
    icon: Heart,
    brandColor: "group-hover:text-emerald-600",
    bgHex: "group-hover:bg-emerald-50 group-hover:border-emerald-200"
  },
  {
    name: "Max Healthcare",
    type: "Advanced Clinical Networks",
    icon: Activity,
    brandColor: "group-hover:text-sky-600",
    bgHex: "group-hover:bg-sky-50 group-hover:border-sky-200"
  },
  {
    name: "Medanta The Medicity",
    type: "Premier Research & Care",
    icon: PlusCircle,
    brandColor: "group-hover:text-rose-600",
    bgHex: "group-hover:bg-rose-50 group-hover:border-rose-200"
  },
  {
    name: "AIIMS Affiliates",
    type: "Apex Govt Hospitals",
    icon: ShieldCheck,
    brandColor: "group-hover:text-indigo-600",
    bgHex: "group-hover:bg-indigo-50 group-hover:border-indigo-200"
  },
  {
    name: "Jaypee Hospital",
    type: "Tertiary Health Center",
    icon: Building2,
    brandColor: "group-hover:text-blue-600",
    bgHex: "group-hover:bg-blue-50 group-hover:border-blue-200"
  },
  {
    name: "Narayana Health",
    type: "Cardiovascular Specialists",
    icon: Sparkles,
    brandColor: "group-hover:text-teal-600",
    bgHex: "group-hover:bg-teal-50 group-hover:border-teal-200"
  },
  {
    name: "PSRI Hospital",
    type: "Orthopaedic & Organ Care",
    icon: Milestone,
    brandColor: "group-hover:text-cyan-600",
    bgHex: "group-hover:bg-cyan-50 group-hover:border-cyan-200"
  },
  {
    name: "Siemens Healthineers",
    type: "Medical Tech & Radiology",
    icon: Dna,
    brandColor: "group-hover:text-purple-600",
    bgHex: "group-hover:bg-purple-50 group-hover:border-purple-200"
  },
  {
    name: "Cipla Labs",
    type: "Diagnostics & Pharmacology",
    icon: Building2,
    brandColor: "group-hover:text-orange-600",
    bgHex: "group-hover:bg-orange-50 group-hover:border-orange-200"
  }
];

export function RecruiterMarquee() {
  // Duplicate for seamless infinite loop scroll
  const marqueeItems = [...RECRUITERS, ...RECRUITERS, ...RECRUITERS];

  return (
    <section id="recruiters-section" className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">
            Our Top Recruiters Include
          </span>
          <h2 className="font-display text-2xl md:text-3.5xl font-extrabold tracking-tight text-[#000000]">
            Trusted by Leading Healthcare Recruiters
          </h2>
          <div className="h-1 w-20 bg-[#0041f5] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
            Building healthcare careers through hospital training, clinical exposure, internships, and industry partnerships. Students from NIMT Allied Health Programmes gain opportunities with leading hospitals, healthcare networks, diagnostics companies, and healthcare technology organizations.
          </p>
        </div>

      </div>

      {/* Marquee Wrapper with Fade Gradient Overlays */}
      <div className="relative w-full mt-4 select-none overflow-hidden">
        {/* Left Gradient Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Edge Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling elements container */}
        <div className="flex w-max hover:[pointer-events:all] group/marquee">
          <div className="flex gap-6 py-4 animate-marquee-infinite group-hover/marquee:[animation-play-state:paused] whitespace-nowrap">
            {marqueeItems.map((recruiter, index) => {
              const IconComponent = recruiter.icon;
              return (
                <div
                  key={`${recruiter.name}-${index}`}
                  className="inline-flex items-center gap-4 bg-[#0041f5] border border-white/10 rounded-2xl px-6 py-4 w-72 h-20 shadow-sm hover:shadow-md hover:border-white/25 transition-all duration-300 group cursor-default shrink-0"
                >
                  {/* Left Icon Panel - Transparent white by default, transitions to prominent solid white on card hover */}
                  <div className="p-2.5 rounded-xl bg-white/15 border border-white/5 duration-300 transition-all text-white/80 group-hover:bg-white group-hover:text-[#0041f5] group-hover:border-white">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Right Header Panel */}
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-display font-medium text-white/90 group-hover:text-white transition-colors duration-300 text-sm tracking-tight truncate leading-tight">
                      {recruiter.name}
                    </span>
                    <span className="text-[10px] text-blue-100/70 font-light tracking-wide truncate mt-0.5 uppercase">
                      {recruiter.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
