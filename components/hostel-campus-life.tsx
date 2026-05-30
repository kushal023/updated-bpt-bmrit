'use client';

import React from 'react';
import { Shield, BookOpen, Activity, Flame, Users, Coffee, Home } from 'lucide-react';

export function HostelCampusLife() {
  const elements = [
    {
      title: "Secure On-Campus Hostel",
      desc: "Separate single & double sharing secure layouts for girls & boys. Full biometric access control systems & active round-the-clock wardens.",
      icon: Home,
      img: "/hostel.png"
    },
    {
      title: "Extensive Medical Library",
      desc: "Over 15,000+ medical journals, advanced digital physiology directories, radiology case logs, and comfortable quiet workspaces.",
      icon: BookOpen,
      img: "/library.png"
    },
    {
      title: "Modern Specialized Labs",
      desc: "Anatomy visualization suites, biomechanical bio-feedback stations, and clinical diagnostic simulation devices.",
      icon: Activity,
      img: "/Labs.webp"
    },
    {
      title: "Dynamic Sports Center",
      desc: "Spacious athletic tracks, outdoor football pitches, indoor badminton halls, and specialized sports physiotherapy rehab lounges.",
      icon: Flame,
      img: "/sports.png"
    },
    {
      title: "Student Core Activities",
      desc: "Active clinical diagnostic symposiums, academic quizzes, medical visual contests, and direct community health camp drives.",
      icon: Users,
      img: "/Activities.webp"
    },
    {
      title: "Hygienic Dining & Cafeteria",
      desc: "Fresh nutritious multi-cuisine meal plans prepared daily by certified kitchen staff under strict health supervision protocols.",
      icon: Coffee,
      img: "/Hygienic.png"
    }
  ];

  return (
    <section id="campus-life-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">Life At Greater Noida</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
            Premium Hostel & Vibrant On-Campus Life
          </h2>
          <div className="h-1.5 w-24 bg-[#08a7e6] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-700 font-light max-w-2xl mx-auto">
            A balanced professional healthcare career is built on high-quality campus exposure. Review our beautiful, fully-functional infrastructural amenities below.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#f6eada]/20 p-6 rounded-3xl border border-neutral-150 hover:border-primary/25 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Photo with subtle hover expansion */}
                  <div className="h-44 rounded-2xl overflow-hidden relative border border-neutral-200">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#0041f5]/5 text-[#0041f5]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-[#000000]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {item.desc}
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
