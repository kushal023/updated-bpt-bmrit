'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the academic eligibility criteria for BPT & BMRIT admissions?",
      a: "For Bachelor of Physiotherapy (BPT), you need 12th Science PCB with a minimum of 50% marks in aggregate. For B.Sc in Medical Radiology & Imaging Technology (BMRIT), the minimum eligibility is 12th Science PCB with 45% marks in aggregate from a recognized board (CBSE, ICSE, or State board)."
    },
    {
      q: "How much is the academic fee structure and is there an installment plan?",
      a: "Academic tuition is highly competitive aligned with state regulations. For exact fee schedules, submit the enquiry form below. We provide custom interest-free monthly installment plans (EMI options) and assist families in fast sanctions of national bank education loans."
    },
    {
      q: "Are the programmes affiliated with a recognized state university?",
      a: "Yes, our flagship Allied Health Science programmes (BPT & BMRIT) are fully recognized and affiliated with Atal Bihari Vajpayee Medical University (ABVMU), Lucknow, ensuring full legal validity of your degree for state registrations and central/state government employment exams."
    },
    {
      q: "Does NIMT provide clinical postings inside real hospitals?",
      a: "Absolutely. Clinical practice is our highest priority. Unlike typical colleges, NIMT students gain hands-on clinical rotations inside premier multi-specialty hospitals including Max, Fortis, Medanta, and AIIMS. You spend over 2,000+ hours working inside real diagnostic labs and patient wards."
    },
    {
      q: "What is the duration of these allied health programmes?",
      a: "The Bachelor of Physiotherapy (BPT) is a 4.5 Years course (4 academic years + 6 months of mandatory in-hospital internship). The B.Sc in Medical Radiology (BMRIT) is a 4 Years degree including structured clinical rotations."
    },
    {
      q: "What are the scholarship levels and how can I secure one?",
      a: "NIMT offers pre-approved tuition scholarships based on 12th PCB percentage: 15% scholarship for scores of 99%+, 10% scholarship for scores of 90%-98%, and 5% scholarship for scores of 85%-89%. Lock in your bracket by submitting the online enquiry form today."
    },
    {
      q: "How is the placement assistance and who are the core recruiters?",
      a: "We maintain a proactive healthcare placement cell that secures 100% placement assistance. Top medical organizations recruit directly from NIMT, including Apollo Hospitals, Fortis Healthcare, Max Hospitals, Medanta, and imaging tech leaders like Siemens Healthineers."
    },
    {
      q: "What are the hostel and dining facilities like?",
      a: "NIMT provides safe, modern on-campus hostel boarding for both boys and girls with 24/7 security, biometric checkpoints, and strict wardens. The campus kitchen prepares fresh, highly-nutritious meals and operates a clean cafeteria space."
    }
  ];

  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">All Answers In One Place</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-24 bg-[#08a7e6] mx-auto rounded-full" />
          <p className="text-sm text-gray-700 font-light max-w-2xl mx-auto">
            Review detailed clarifications regarding eligibility rules, academic fees, affiliated universities, and post-academic career pathways at NIMT Greater Noida.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-200 bg-neutral-50 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-gray-950 text-sm md:text-base outline-none cursor-pointer hover:bg-neutral-100 transition-colors"
                >
                  <span className="flex items-center gap-2.5 font-display text-gray-900 font-semibold">
                    <HelpCircle className="h-5 w-5 text-[#0041f5] shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-[#0041f5] shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-neutral-150 text-xs md:text-sm text-gray-650 leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
