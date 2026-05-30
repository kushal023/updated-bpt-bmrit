'use client';

import React from 'react';
import { TrendingUp, Users, Flame, Star, Award, GraduationCap } from 'lucide-react';

export function HealthcareDemand() {
  const stats = [
    {
      id: "stat-cagr",
      value: "22%+",
      label: "Allied Health CAGR",
      desc: "Fastest growing professional domain in Indian healthcare services.",
      metric: "Compounded Annual Growth Rate"
    },
    {
      id: "stat-jobs",
      value: "65 Lakh+",
      label: "Health Job Openings",
      desc: "Severe national shortage of certified technologists & sports therapists.",
      metric: "Projected Shortfall by Ministry"
    },
    {
      id: "stat-val",
      value: "₹638 Bn+",
      label: "Indian Healthcare Segment",
      desc: "Unprecedented government & private investments in scanning/ICU setup.",
      metric: "Estimated Domestic Market Size"
    },
    {
      id: "stat-global",
      value: "100%",
      label: "Growing Global Demand",
      desc: "Licensing pathways open for certified BPT & BMRIT in US, UK & Gulf.",
      metric: "Foreign Mobility Placement Indices"
    }
  ];

  return (
    <section id="industry-demand-section" className="py-20 bg-[#0041f5] text-white relative overflow-hidden">
      {/* Visual background vector bubbles */}
      <div className="absolute top-10 left-10 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#fffc4d] font-bold">Unprecedented Career Security</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-none">
            Healthcare is One of India&apos;s Fastest Growing Industries
          </h2>
          <div className="h-1.5 w-24 bg-[#fffc4d] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-zinc-100 font-light max-w-2xl mx-auto">
            Allied health professionals form the skeletal spine of modern medical operations. 12th PCB graduates starting today step into a landscape of guaranteed career progression.
          </p>
        </div>

        {/* Infographic block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-black/20 rounded-3xl border border-white/10 shadow-2xl">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              id={stat.id}
              className="flex flex-col justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#fffc4d]/40 transition-all duration-300"
            >
              <div>
                <p className="text-[#fffc4d] text-4xl font-black font-display tracking-tight mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-white mb-3">
                  {stat.label}
                </p>
                <div className="h-[2px] w-12 bg-[#fffc4d]/40 mb-4 rounded" />
                <p className="text-xs text-zinc-200 leading-relaxed font-light mb-4">
                  {stat.desc}
                </p>
              </div>
              <div className="mt-auto pt-3 border-t border-white/5">
                <span className="text-[9px] uppercase tracking-wider text-zinc-300 font-bold font-mono">
                  {stat.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Growth Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <span className="text-xs text-zinc-300 block mb-1">Diagnostic Technology Uptake</span>
            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mt-2">
              <div className="bg-[#fffc4d] h-full rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <span className="text-xs text-zinc-300 block mb-1">Post-Surgical Bio-rehab Needs</span>
            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mt-2">
              <div className="bg-emerald-400 h-full rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <span className="text-xs text-zinc-300 block mb-1">Global Allied Worker Job Shortfall</span>
            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mt-2">
              <div className="bg-amber-400 h-full rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
