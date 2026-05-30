'use client';

import React, { useState } from 'react';
import { Award, ShieldAlert, Heart, Percent, GraduationCap, Coins, CreditCard, ChevronRight } from 'lucide-react';

interface ParentsTrustScholarshipsProps {
  onCalculateEligibility: (pcbScore: number, course: 'BPT' | 'BMRIT') => void;
}

export function ParentsTrustScholarships({ onCalculateEligibility }: ParentsTrustScholarshipsProps) {
  const [pcbInput, setPcbInput] = useState<string>('');
  const [courseSelect, setCourseSelect] = useState<'BPT' | 'BMRIT'>('BPT');
  const [calculatorResult, setCalculatorResult] = useState<{
    score: number;
    scholarship: number;
    eligibility: string;
    description: string;
  } | null>(null);

  const trustKeys = [
    { title: "30+ Years of Excellence", desc: "A decades-long legacy of producing certified professional clinicians and industry experts." },
    { title: "Scholarship Opportunities", desc: "Assisting talented students with merit recognition, covering up to 15% of annual academic fees." },
    { title: "EMI Fee Facility Available", desc: "Reduce financial strain with easy zero-interest monthly installment payment plans." },
    { title: "Hostel Facility Inside", desc: "Nutritious dining hall options, biometric access checkpoints, and separate secure accommodations." },
    { title: "100% Hospital Placement Assistance", desc: "Active, dedicated placement team coordinating job fairs with top regional healthcare systems." },
    { title: "Clinical Practical Training", desc: "Over 2,000+ hours spent inside real-world patient wards to build real-world clinical confidence." },
    { title: "One-on-One Career Advice", desc: "Consistent coaching and mentorship by experienced practicing doctors and technologists." },
    { title: "Fully Secure Campus Environment", desc: "CCTV-supervised, completely secure campus, prioritizing complete student safety." }
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const score = parseFloat(pcbInput);
    if (isNaN(score) || score < 0 || score > 100) {
      alert("Please enter a valid PCB percentage between 0 and 100.");
      return;
    }

    let scholarshipVal = 0;
    let desc = "";
    let eligibilityStr = "Eligible for Direct Admission Enquiries";

    if (score >= 99) {
      scholarshipVal = 15;
      desc = "🏆 Brilliant Grade. Outstanding 15% Tuition Scholarship Pre-Approved.";
    } else if (score >= 90) {
      scholarshipVal = 10;
      desc = "🌟 Excellent Academic Track. Pre-Approved 10% Merit Scholarship.";
    } else if (score >= 85) {
      scholarshipVal = 5;
      desc = "✅ Solid Performance. Pre-Approved 5% Merit Scholarship.";
    } else {
      scholarshipVal = 0;
      const minRequired = courseSelect === 'BPT' ? 50 : 45;
      if (score >= minRequired) {
        desc = `👍 Meets minimum academic eligibility of ${minRequired}% for ${courseSelect}. Normal direct admission seats are available.`;
      } else {
        desc = `⚠️ Score is slightly below the default ${minRequired}% threshold. Please request a customized counsellor evaluation for confirmation.`;
        eligibilityStr = "Subject to Academic Board Review";
      }
    }

    setCalculatorResult({
      score,
      scholarship: scholarshipVal,
      eligibility: eligibilityStr,
      description: desc
    });

    onCalculateEligibility(score, courseSelect);
  };

  return (
    <section id="trust-scholarships-section" className="py-20 bg-[#f6eada]/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* PARART TRUST ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">Parent-Approved Campus</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#000000] leading-tight">
              Why Parents Trust NIMT with Their Child&apos;s Healthcare Future
            </h2>
            <div className="h-1.5 w-24 bg-[#0041f5] rounded-full" />
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              As a parent, your primary concern is securing a safe environment, practical career readiness, and financially predictable fees. Over 30 years, NIMT Greater Noida has focused on delivering transparency, campus security, and elite hospital affiliations.
            </p>
            
            <div className="p-5 bg-white rounded-2xl border border-gray-100 flex items-start gap-4">
              <Coins className="h-10 w-10 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#000000] text-sm">Flexible Fee Options</h4>
                <p className="text-xs text-gray-600 font-light mt-1">
                  We support families with dedicated zero-interest installment options and tie-ups with leading national banks for fast education loan sanctions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustKeys.map((tk, index) => (
              <div key={index} className="p-5 bg-white rounded-2xl border border-gray-100 space-y-1 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0041f5]" />
                  <h4 className="font-bold text-[#000000] text-sm font-display">
                    {tk.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-light pl-4">
                  {tk.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* SCHOLARSHIP INFRASTRUCTURE ROW */}
        <div id="scholarship-panel" className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left panel: Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#0041f5]/10 text-[#0041f5] px-3 py-1 rounded-full text-xs font-bold">
              <Percent className="h-4 w-4" />
              NIMT Financial Aid Board
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#000000]">
              Tuition Merit Scholarships
            </h3>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
              NIMT rewards exceptional secondary school performance. Review the pre-approved tuition scholarship brackets below based on your board percentage scores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <span className="text-[10px] uppercase tracking-widest text-[#0041f5] font-black">99%+ Score</span>
                <span className="text-xl font-black block text-[#000000] my-1">15% Off</span>
                <span className="text-[9px] text-gray-500">Academic Tuition</span>
              </div>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center">
                <span className="text-[10px] uppercase tracking-widest text-amber-700 font-black">90-98% Score</span>
                <span className="text-xl font-black block text-[#000000] my-1">10% Off</span>
                <span className="text-[9px] text-gray-500">Academic Tuition</span>
              </div>
              <div className="p-4 bg-neutral-100 rounded-2xl border border-neutral-200 text-center">
                <span className="text-[10px] uppercase tracking-widest text-neutral-700 font-black">85-89% Score</span>
                <span className="text-xl font-black block text-[#000000] my-1">5% Off</span>
                <span className="text-[9px] text-gray-500">Academic Tuition</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-xs">
              <span className="inline-block bg-teal-50 text-teal-850 px-3 py-1 rounded-md font-bold font-mono">
                ✓ Education Loans Available
              </span>
              <span className="inline-block bg-indigo-50 text-indigo-850 px-3 py-1 rounded-md font-bold font-mono">
                ✓ Interest-free EMI Available
              </span>
            </div>
          </div>

          {/* Right panel: Calculator */}
          <div className="lg:col-span-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-150">
            <h4 className="font-display font-black text-gray-950 text-base mb-4 flex items-center gap-1.5">
              <GraduationCap className="h-5 w-5 text-primary" />
              Check Scholarship Eligibility
            </h4>

            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">
                  Choose Flagship Course Interested
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCourseSelect('BPT')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                      courseSelect === 'BPT'
                        ? 'bg-primary text-white border-primary shadow'
                        : 'bg-white text-gray-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    Physiotherapy (BPT)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCourseSelect('BMRIT')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                      courseSelect === 'BMRIT'
                        ? 'bg-[#08a7e6] text-white border-[#08a7e6] shadow'
                        : 'bg-white text-gray-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    Radiology (BMRIT)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-extrabold text-gray-500 mb-1.5">
                  12th Board PCB Percentage Score (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    placeholder="e.g. 92.5"
                    value={pcbInput}
                    onChange={(e) => setPcbInput(e.target.value)}
                    className="w-full bg-white border border-neutral-200 text-gray-900 rounded-xl px-4 py-3 text-xs leading-none outline-none focus:border-primary transition-all pr-12 font-bold"
                    required
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-extrabold text-gray-400">
                    %
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all cursor-pointer"
              >
                Calculate Scholarship & eligibility &rarr;
              </button>
            </form>

            {calculatorResult && (
              <div className="mt-5 p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-500 uppercase text-[9px]">PCB Score: {calculatorResult.score}%</span>
                  <span className="text-xs bg-emerald-700 text-white px-2 py-0.5 rounded-full font-black uppercase text-[9px]">
                    {calculatorResult.eligibility}
                  </span>
                </div>
                {calculatorResult.scholarship > 0 && (
                  <p className="text-xl font-bold font-display text-emerald-800">
                    Pre-Approved Scholarship: {calculatorResult.scholarship}%
                  </p>
                )}
                <p className="text-xs text-emerald-800 font-light leading-relaxed">
                  {calculatorResult.description}
                </p>
                
                <div className="pt-2 border-t border-emerald-150">
                  <p className="text-[10px] text-emerald-700 italic">
                    * Submit the main admission form below to lock your pre-approved credit tier in our system.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
