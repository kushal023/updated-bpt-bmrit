'use client';

import React from 'react';
import { FileEdit, ClipboardList, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function AdmissionProcess() {
  const steps = [
    {
      step: "Step 01",
      icon: FileEdit,
      title: "Submit Admissions Enquiry",
      desc: "Fill in the basic online enquiry form below, describing your 12th PCB board percentages, preferred campus, and flagship course interests."
    },
    {
      step: "Step 02",
      icon: ClipboardList,
      title: "CAHET Counselling Registration",
      desc: "Complete formal registration steps under our designated Allied Health Counselling (CAHET), receiving professional stream guidance."
    },
    {
      step: "Step 03",
      icon: ShieldCheck,
      title: "Candidate Document Verification",
      desc: "Produce your high school CBSE/ICSE or state board 10th & 12th marksheets, category certificates, and identity cards for checking."
    },
    {
      step: "Step 04",
      icon: CheckCircle2,
      title: "Academic Admission Confirmation",
      desc: "Pay your pre-approved seat allocation or initial tuition installment fees, lock in your merit scholarship, and secure your seat receipt!"
    }
  ];

  return (
    <section id="process-section" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">Fast-track Onboarding</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
            Our Standard Admissions Process
          </h2>
          <div className="h-1.5 w-24 bg-[#0041f5] mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-700 font-light">
            No complex exams, no bureaucratic paperwork delays. Get registered and verified through our 4 clear sequential steps securely.
          </p>
        </div>

        {/* Vertical and Horizontal Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector bars for desktop */}
          <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-[2px] bg-neutral-200 z-0" />

          {steps.map((st, index) => {
            const IconComponent = st.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center space-y-3 group">
                
                {/* Visual Icon Node */}
                <div className="h-14 w-14 rounded-full bg-white border-2 border-neutral-200 text-[#0041f5] flex items-center justify-center shadow-lg group-hover:border-[#0041f5] group-hover:bg-[#0041f5] group-hover:text-white transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>

                <span className="text-[10px] tracking-widest uppercase font-black text-gray-400">
                  {st.step}
                </span>

                <h3 className="font-display text-base font-bold text-gray-950 leading-tight">
                  {st.title}
                </h3>

                <p className="text-xs text-gray-650 leading-relaxed font-light px-2">
                  {st.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* Fast Action CTA link below stepper */}
        <div className="mt-12 text-center">
          <a
            id="stepper-to-form-btn"
            href="#conversion-form"
            className="inline-flex items-center gap-1.5 bg-[#0041f5] hover:bg-black text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow"
          >
            Start Admission Step 1 Now &darr;
          </a>
        </div>

      </div>
    </section>
  );
}
