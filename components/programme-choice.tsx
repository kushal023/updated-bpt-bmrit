'use client';

import React from 'react';
import { Calendar, GraduationCap, Trophy, ChevronRight, Briefcase, IndianRupee, ShieldCheck } from 'lucide-react';

interface ProgrammeChoiceProps {
  onSelectCourse: (course: 'BPT' | 'BMRIT') => void;
}

export function ProgrammeChoice({ onSelectCourse }: ProgrammeChoiceProps) {
  const programmes = [
    {
      id: "bpt-card",
      code: "BPT" as const,
      title: "Bachelor of Physiotherapy (BPT)",
      duration: "4.5 Years + Structured Internship",
      eligibility: "12th Science (PCB) with minimum 50% marks",
      highlights: [
        "Sports Physiotherapy & Athletic Care",
        "Neurological Rehabilitation Specialties",
        "Clinical Bedside Training in Multi-specialty ICU",
        "Global Career Opportunities (UK, US, Middle East Licensure)"
      ],
      careerPaths: [
        "Consultant Physiotherapist",
        "Sports Team Rehabilitation Therapist",
        "Neuro-muscular Rehab Specialist",
        "Home/Hospital Rehabilitation Lead"
      ],
      salary: "₹2.5 – ₹25+ LPA",
      badge: "Highest Career Elasticity",
      accentBg: "border-l-4 border-l-[#0041f5]",
      btnId: "explore-bpt-btn"
    },
    {
      id: "bmrit-card",
      code: "BMRIT" as const,
      title: "B.Sc in Medical Radiology & Imaging Technology (BMRIT)",
      duration: "4 Years (Includes Clinical Rotations)",
      eligibility: "12th Science (PCB) with minimum 45% marks",
      highlights: [
        "Advanced MRI Scanning Systems",
        "Dual-energy CT Scanner Operation",
        "Traditional & Digital X-Ray Tele-Radiology",
        "Sophisticated Nuclear Medicine Diagnostics"
      ],
      careerPaths: [
        "Lead Radiographer / MRI Technician",
        "CT Contrast Scan Analyst",
        "Diagnostic Labs Operations Manager",
        "Imaging Machine Clinical Application Specialist"
      ],
      salary: "₹2.5 – ₹20+ LPA",
      badge: "High Tech / High Demand",
      accentBg: "border-l-4 border-l-[#08a7e6]",
      btnId: "explore-bmrit-btn"
    }
  ];

  return (
    <section id="programmes-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">Find Your True Specialty</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#000000]">
            Choose Your High-Growth Healthcare Path
          </h2>
          <div className="h-1.5 w-24 bg-[#08a7e6] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-700 font-light">
            Both BPT and BMRIT degrees prepare you for crucial front-line diagnostic and therapeutic patient duties. Compare eligibility, core Highlights, and salaries below.
          </p>
        </div>

        {/* Comparison grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {programmes.map((prog) => (
            <div
              key={prog.id}
              id={prog.id}
              className={`bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${prog.accentBg}`}
            >
              <div>
                {/* Upper row */}
                <div className="flex justify-between items-start gap-4 mb-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    {prog.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
                    ABVMU Approved
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-black text-[#000000] mb-6 leading-tight">
                  {prog.title}
                </h3>

                {/* Technical Meta Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-neutral-100 py-4 mb-6 text-sm">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="h-5 w-5 text-[#0041f5] shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Duration</p>
                      <p className="font-semibold text-gray-900">{prog.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="h-5 w-5 text-[#08a7e6] shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400">Minimum Eligibility</p>
                      <p className="font-semibold text-gray-900">{prog.eligibility}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    <Trophy className="h-4 w-4 text-[#fffc4d]" />
                    Programme Highlights
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {prog.highlights.map((hlt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0041f5] mt-1.5 shrink-0" />
                        <span className="leading-normal">{hlt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Paths */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    <Briefcase className="h-4 w-4 text-[#08a7e6]" />
                    Target Career Paths
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {prog.careerPaths.map((cp, i) => (
                      <span
                        key={i}
                        className="bg-neutral-100 text-neutral-800 text-[11px] font-medium px-2.5 py-1 rounded-md"
                      >
                        {cp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lower dynamic CTA block */}
              <div className="mt-6 border-t border-neutral-100 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold block">Estimated Salary Scope</span>
                    <span className="text-xl font-black text-[#0041f5] flex items-center">
                      <IndianRupee className="h-4 w-4" /> {prog.salary}
                    </span>
                  </div>
                  <span className="text-[9px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-black uppercase tracking-wider">
                    High Demand
                  </span>
                </div>

                <div className="flex items-stretch gap-3">
                  <button
                    id={prog.btnId}
                    onClick={() => onSelectCourse(prog.code)}
                    className="flex-1 bg-[#0041f5] hover:bg-black text-white text-xs font-black uppercase tracking-widest py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow hover:shadow-lg hover:scale-[1.02] active:scale-95"
                  >
                    Explore & Enquire {prog.code}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small comparative summary footer card */}
        <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 max-w-2xl text-center md:text-left leading-relaxed">
            💡 <span className="font-bold text-[#0041f5]">PCB Selection Advice:</span> Pure medical physiotherapy involves treating muscular/rehab conditions directly with physical touch. Medical Imaging (BMRIT) is technology-centered, focusing on reading high-end scanners & diagnostic interpretation. Both offer exceptional career path elasticity.
          </p>
          <a
            id="programme-compare-link"
            href="#advantage-section"
            className="text-xs font-bold text-[#0041f5] hover:underline shrink-0 whitespace-nowrap"
          >
            Review Curriculer Differences &darr;
          </a>
        </div>

      </div>
    </section>
  );
}
