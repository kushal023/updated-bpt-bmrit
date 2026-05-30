'use client';

import React from 'react';
import { Check, X, ShieldAlert, Award } from 'lucide-react';

export function NimtAdvantage() {
  const comparisonRows = [
    {
      feature: "Hospital Clinical Training",
      nimt: "100% inside true operational multi-specialty hospitals (Apollo, Max, Fortis) with real bedside patient interactions.",
      typical: "Theoretical instruction supplemented with limited bedside hours or artificial classroom roleplay simulations."
    },
    {
      feature: "Advanced Technological Equipment",
      nimt: "Direct hands-on experience using actual 1.5T/3T MRI machines, multi-detector CT scanners, and electrotherapy panels.",
      typical: "Familiarization through pictures, outdated legacy scanners, or static mock-ups with no active beam/signal functionality."
    },
    {
      feature: "Industry Exposure & Seminars",
      nimt: "Weekly interaction with active orthopedics, diagnostic radiologists, and visiting healthcare tech specialists.",
      typical: "Limited guest talks, with a primary focus on academic lectures aligned purely with year-end syllabus sheets."
    },
    {
      feature: "Accredited Clinical Internships",
      nimt: "6 to 12 months in-hospital rotating postings, heavily supervised by certified experts with a high return-engagement rate.",
      typical: "Students are responsible for identifying an internship site themselves. Often results in unaccredited postings."
    },
    {
      feature: "Systematic Placement Framework",
      nimt: "Proactive placement cell organizing mock HR sessions, soft skills bootcamps, and resume review clinics with corporate partners.",
      typical: "Passive noticeboard notifications. Minimal customized recruitment setups for specialized health fields."
    },
    {
      feature: "Total Clinical Practice Hours",
      nimt: "Over 2,000+ certified clinical hours accumulated before graduation, guaranteeing immediate clinical readiness.",
      typical: "Typically less than 300 clinical hours, resulting in low self-confidence during active patient handovers."
    },
    {
      feature: "Career Guidance & Licensure preparation",
      nimt: "Complete roadmap coaching for national exam processes and central/state government clinical worker criteria.",
      typical: "Focus remains restricted entirely to completion of standard university curriculum examinations."
    },
    {
      feature: "Specialized Certifications",
      nimt: "Integrated certifications in emergency life support and trauma bio-rehab, included along with basic degree.",
      typical: "Basic general degree certificate only, requiring students to pay extra for essential certifications."
    }
  ];

  return (
    <section id="advantage-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">Compare Before Deciding</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
            NIMT Advantage: Why We Stand Out From Typical Colleges
          </h2>
          <div className="h-1.5 w-24 bg-[#08a7e6] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-700 font-light">
            An allied health degree is only as good as the physical clinical exposure that comes with it. Here is an honest, side-by-side comparison of the standards you can expect.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="overflow-hidden border border-neutral-200 rounded-3xl shadow-xl bg-neutral-50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed min-w-[768px]">
              
              {/* Table Head */}
              <thead>
                <tr className="bg-neutral-950 text-white text-sm">
                  <th className="p-5 font-display font-bold w-1/4">Key Core Criterion</th>
                  <th className="p-5 font-display font-bold w-[45%] bg-[#0041f5] text-center border-x border-[#0041f5]/20">
                    <span className="text-xs tracking-widest uppercase block text-[#fffc4d] mb-1">Superior Offering</span>
                    🔥 NIMT Allied Health Program
                  </th>
                  <th className="p-5 font-display font-bold w-[30%] text-center text-zinc-400">Typical Allied Health Colleges</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-neutral-200 bg-white">
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="hover:bg-neutral-50 transition-colors text-xs text-slate-800">
                    
                    {/* Feature */}
                    <td className="p-5 font-bold font-display text-gray-900 border-r border-neutral-200">
                      {row.feature}
                    </td>

                    {/* NIMT (Higlighted) */}
                    <td className="p-5 bg-blue-50/50 border-r border-l border-blue-150 relative">
                      <div className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <span className="font-medium text-slate-900 leading-relaxed">
                          {row.nimt}
                        </span>
                      </div>
                    </td>

                    {/* Typical */}
                    <td className="p-5 bg-neutral-100/40 text-slate-500">
                      <div className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="h-3.5 w-3.5 stroke-[2]" />
                        </div>
                        <span className="leading-relaxed font-light">
                          {row.typical}
                        </span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Small Trust Seal in comparison column */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
          <Award className="h-4 w-4 text-[#8a5506]" />
          <span>Verified clinical tracking metrics based on 2024-2025 student post-rotation registries.</span>
        </div>

      </div>
    </section>
  );
}
