'use client';

import React from 'react';

export function WhyChooseNimt() {
const points = [
  {
    id: "choose-hospital",
    image: "/hospital-exposure.webp",
    title: "Real Hospital Exposure",
    description: "Direct immersion inside leading multi-specialty regional hospitals. Practice diagnostic imaging & patient treatments on real-world cases.",
  },
  {
    id: "choose-clinical",
    image: "/clinical-training.webp",
    title: "Clinical Training",
    description: "Rigorous experiential learning with expert clinicians. Over 2,000 hours of clinical mock cases and patient interactions before your degree completes.",
  },
  {
    id: "choose-labs",
    image: "/advanced-labs.webp",
    title: "Advanced Labs",
    description: "Fully-stocked clinical physiology labs, electrotherapy rooms, x-ray consoles, and dedicated radiology workstation portals.",
  },
  {
    id: "choose-internships",
    image: "/internships.webp",
    title: "Industry Internships",
    description: "6 to 12 months in-hospital structured internships at Apollo, Fortis, and Max hospitals.",
  },
  {
    id: "choose-scholarships",
    image: "/scholarships.webp",
    title: "Scholarships",
    description: "Get up to 15% merit-based scholarship support to reduce educational expenses.",
  },
  {
    id: "choose-placements",
    image: "/placements.webp",
    title: "Placement Assistance",
    description: "Dedicated placement cell, mock interviews, and access to 500+ recruiters.",
  },
  {
    id: "choose-faculty",
    image: "/faculty.webp",
    title: "Experienced Faculty",
    description: "Learn from practicing doctors, radiologists, physiotherapists and healthcare experts.",
  },
  {
    id: "choose-hostel",
    image: "/hostel.png",
    title: "Hostel Facility",
    description: "Safe hostel accommodation with WiFi, dining facilities, and 24x7 security.",
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
   {/* 4x2 Responsive Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {points.map((point) => {
    return (
      <div
        key={point.id}
        id={point.id}
        className="
          group
          bg-white
          rounded-3xl
          overflow-hidden
          border border-gray-200
          hover:border-[#0041f5]
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          flex
          flex-col
          h-full
        "
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={point.image}
            alt={point.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-lg font-bold text-black mb-3">
            {point.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed flex-grow">
            {point.description}
          </p>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}
