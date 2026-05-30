'use client';

import React from 'react';
import { Stethoscope, Activity, TestTube, School, Award, TrendingUp, Users, Home } from 'lucide-react';

export function WhyChooseNimt() {
  const points = [
    {
      id: "choose-hospital",
      icon: Stethoscope,
      title: "Real Hospital Exposure",
      description: "Direct immersion inside leading multi-specialty regional hospitals. Practice diagnostic imaging & patient treatments on real-world cases.",
    },
    {
      id: "choose-clinical",
      icon: Activity,
      title: "Clinical Training",
      description: "Rigorous experiential learning with expert clinicians. Over 2,000 hours of clinical mock cases and patient interactions before your degree completes.",
    },
    {
      id: "choose-labs",
      icon: TestTube,
      title: "Advanced Labs",
      description: "Fully-stocked clinical physiology labs, electrotherapy rooms, x-ray consoles, and dedicated radiology workstation portals.",
    },
    {
      id: "choose-internships",
      icon: School,
      title: "Industry Internships",
      description: "6 to 12 months in-hospital structured internships at Apollo, Fortis, and Max hospitals to learn patient interaction and specialized care first-hand.",
    },
    {
      id: "choose-scholarships",
      icon: Award,
      title: "Scholarships",
      description: "Deserved academic achievements are heavily compensated. Get up to 15% merit-based support to manage your educational pathways.",
    },
    {
      id: "choose-placements",
      icon: TrendingUp,
      title: "Placement Assistance",
      description: "Active, dedicated placement cells. Professional soft-skills grooming, mock interviews, and access to more than 500 recruiting partners.",
    },
    {
      id: "choose-faculty",
      icon: Users,
      title: "Experienced Faculty",
      description: "Learn from practicing doctors, master neuro-physiotherapists, lead radiologists, and certified medical imaging professors.",
    },
    {
      id: "choose-hostel",
      icon: Home,
      title: "Hostel Facility",
      description: "State-of-the-art secure single & double sharing boarding, nutritious dining plans, absolute biometric security, and full campus Wi-Fi.",
    },
  ];

  return (
    <section id="why-choose-section" className="py-20 bg-[#f6eada]/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">Core Pillars of Excellence</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#000000]">
            Why Students and Parents Choose NIMT for Healthcare Careers
          </h2>
          <div className="h-1.5 w-24 bg-[#0041f5] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-700 font-light">
            Providing superior medical education is not just about classrooms. Our comprehensive academic model blends advanced diagnostics learning with full bedside exposure.
          </p>
        </div>

        {/* 4x2 Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point) => {
            const IconComponent = point.icon;
            return (
              <div
                key={point.id}
                id={point.id}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-[#0041f5]/5 text-[#0041f5] group-hover:bg-[#0041f5] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#000000]">
                    {point.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {point.description}
                  </p>
                </div>
                <div className="pt-4 mt-auto">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#0041f5]/40 group-hover:text-primary transition-colors">
                    NIMT Standard &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
