'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Loader2, ArrowRight, CheckCircle2, MessageCircle, Phone, Calendar } from 'lucide-react';

interface EnquiryFormProps {
  selectedCourse: 'BPT' | 'BMRIT' | '';
  onSuccess: (details: any) => void;
  calculatorScore?: number;
}

export function EnquiryForm({ selectedCourse, onSuccess, calculatorScore }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    pcbPercentage: '',
    course: '',
    campus: 'Greater Noida'
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successDetails, setSuccessDetails] = useState<any | null>(null);

  // Sync selected course from cards or buttons
  useEffect(() => {
    if (selectedCourse) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(prev => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  // Sync calculator score when pre-calculated
  useEffect(() => {
    if (calculatorScore) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(prev => ({ ...prev, pcbPercentage: String(calculatorScore) }));
    }
  }, [calculatorScore]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setSuccessDetails(result.details);
      onSuccess(result.details);

    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="conversion-form" className="py-20 bg-[#0041f5] border-t border-white/10 text-white relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0041f5]/15 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Success State View */}
        {successDetails ? (
          <div className="p-8 md:p-12 bg-zinc-950 rounded-3xl border-2 border-emerald-500/80 text-center space-y-6 shadow-2xl animate-fade-in">
            <div className="h-16 w-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-[#fffc4d] text-xs uppercase tracking-widest font-black">Pre-approved Registration Active</span>
              <h3 className="font-display text-2xl md:text-3xl font-black text-white">
                Thank You, {formData.name}!
              </h3>
              <p className="text-sm text-zinc-300 font-light max-w-lg mx-auto">
                Your direct healthcare career enquiry for <span className="font-bold text-white uppercase">{formData.course}</span> has been securely entered in the NIMT Central Admissions Register.
              </p>
            </div>

            {/* Dynamic Results Card */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl max-w-md mx-auto text-left space-y-4 text-xs">
              <div className="flex justify-between border-b border-white/10 pb-2 text-[10px] text-zinc-400 font-bold uppercase">
                <span>Verification Indicator</span>
                <span className="text-emerald-400">✓ Eligible candidate</span>
              </div>
              <div className="space-y-2 text-zinc-300">
                <p>🙋‍♂️ <span className="font-bold text-white">Name:</span> {formData.name}</p>
                <p>📍 <span className="font-bold text-white">Course Segment:</span> {formData.course} Programme</p>
                <p>🔥 <span className="font-bold text-white">Admissions Portal:</span> Greater Noida Campus</p>
                {successDetails.scholarshipEstimate > 0 ? (
                  <p className="text-[#fffc4d] font-bold">
                    💎 Pre-approved Scholarship Estimated: {successDetails.scholarshipEstimate}% Tuition Waiver
                  </p>
                ) : (
                  <p className="text-zinc-400">✨ Merit-scholarship will be determined during document checking.</p>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-300 font-medium">🛡️ Next Required Action: Connect instantly with your designated admissions officer.</p>

            {/* WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-md mx-auto">
              <a
                id="success-whatsapp-btn"
                href={`https://wa.me/${successDetails.counsellorContact}?text=Hi,%20I%20have%20submitted%20my%20allied%20health%2520enquiry%20on%20the%20website%20for%20${formData.course}.%20My%20percentage%20is%20${formData.pcbPercentage}%.%20Please%2520provide%20counselling.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5 fill-white" />
                Connect on WhatsApp
              </a>
              <a
                id="success-call-btn"
                href={`tel:+${successDetails.counsellorContact}`}
                className="flex-1 bg-[#0041f5] hover:bg-black text-white text-xs font-black uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Admissions Officer
              </a>
            </div>

            <p className="text-[10px] text-zinc-500">
              * A copy of this confirmation receipt has been queued for your records. Please keep marksheets ready.
            </p>
          </div>
        ) : (
          /* Real Form View */
          <div className="p-8 md:p-12 bg-zinc-950 rounded-3xl border border-white/10 shadow-2xl relative">
            
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#fffc4d] font-black">Limited Seats Remaining</span>
              <h2 className="font-display text-2xl md:text-3xl font-black text-white">
                Submit Your Admission Enquiry 2026-27
              </h2>
              <p className="text-xs md:text-sm text-zinc-400 font-light">
                Talk to an Admissions Counsellor and discover which programme is right for you. Our experts will coordinate dynamic course highlights and fee installments.
              </p>
            </div>

            {errorMessage && (
              <div className="p-4 bg-rose-500/10 border border-rose-500 text-rose-200 text-xs rounded-xl mb-6 font-medium">
                ⚠️ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full name */}
                <div>
                  <label className="block text-xs uppercase font-extrabold text-zinc-400 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter candidate name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-[#fffc4d] transition-all font-semibold"
                    required
                  />
                </div>

                {/* Mobile number */}
                <div>
                  <label className="block text-xs uppercase font-extrabold text-zinc-400 mb-1.5">
                    10-digit Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    placeholder="e.g. 9555192192"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-[#fffc4d] transition-all font-mono font-semibold"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase font-extrabold text-zinc-400 mb-1.5">
                    Active Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-[#fffc4d] transition-all font-semibold"
                    required
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs uppercase font-extrabold text-zinc-400 mb-1.5">
                    Current City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Greater Noida, Delhi NCR"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-[#fffc4d] transition-all font-semibold"
                    required
                  />
                </div>

                {/* 12th percentage */}
                <div>
                  <label className="block text-xs uppercase font-extrabold text-zinc-400 mb-1.5">
                    12th Board PCB Percentage Score (%) *
                  </label>
                  <input
                    type="number"
                    name="pcbPercentage"
                    step="0.01"
                    min="0"
                    max="100"
                    placeholder="e.g. 88.5"
                    value={formData.pcbPercentage}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-[#fffc4d] transition-all font-semibold font-mono"
                    required
                  />
                </div>

                {/* Course Segment */}
                <div>
                  <label className="block text-xs uppercase font-extrabold text-zinc-400 mb-1.5">
                    Programme Interested In *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-[#fffc4d] transition-all font-bold"
                    required
                  >
                    <option value="" disabled>-- Select Allied Health Course --</option>
                    <option value="BPT">Bachelor of Physiotherapy (BPT)</option>
                    <option value="BMRIT">B.Sc in Radiology & Imaging (BMRIT)</option>
                  </select>
                </div>

              </div>

              {/* Campus choice preset */}
              <div>
                <label className="block text-xs uppercase font-extrabold text-zinc-400 mb-1.5">
                  Pre-selected Campus Location
                </label>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-xs font-bold text-[#fffc4d] flex items-center justify-between">
                  <span>NIMT Greater Noida (Main Residential Campus)</span>
                  <span className="text-[9px] bg-primary/20 text-blue-400 px-2 py-0.5 rounded uppercase">Flagship</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#fffc4d] hover:bg-yellow-300 text-black text-sm font-black uppercase tracking-widest py-4.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:scale-[1.01] active:scale-95"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Validating Credentials...
                    </>
                  ) : (
                    <>
                      Apply for Admission 2026-27
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>NIMT respects privacy. Data is protected under standard 256-bit secure SSL protocols.</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
