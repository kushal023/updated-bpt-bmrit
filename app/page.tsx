'use client';

import React, { useState } from 'react';
import { AnnouncementBar, StickyNav } from '@/components/navigation';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import { RecruiterMarquee } from '@/components/recruiter-marquee';
import { WhyChooseNimt } from '@/components/why-choose-nimt';
import { ProgrammeChoice } from '@/components/programme-choice';
import { RealHospitalTraining } from '@/components/real-hospital-training';
import { HealthcareDemand } from '@/components/healthcare-demand';
import { CurriculumSection } from '@/components/curriculum-section';
import { NimtAdvantage } from '@/components/nimt-advantage';
import { PlacementsSection } from '@/components/placements-section';
import { ParentsTrustScholarships } from '@/components/parents-trust-scholarships';
import { HostelCampusLife } from '@/components/hostel-campus-life';
import { AdmissionProcess } from '@/components/admission-process';
import { FaqAccordion } from '@/components/faq-accordion';
import { EnquiryForm } from '@/components/enquiry-form';
import { CroOverlays } from '@/components/cro-overlays';

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<'BPT' | 'BMRIT' | ''>('');
  const [calculatorScore, setCalculatorScore] = useState<number | undefined>(undefined);

  // Smooth scroll handler to scroll to forms
  const scrollToForm = () => {
    const element = document.getElementById('conversion-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Triggered when clicking programme choices
  const handleSelectCourse = (course: 'BPT' | 'BMRIT') => {
    setSelectedCourse(course);
    scrollToForm();
  };

  // Triggered when pre-calculating scholarship
  const handlePrecalculateScholarship = (score: number, courseSelect?: 'BPT' | 'BMRIT') => {
    setCalculatorScore(score);
    if (courseSelect) {
      setSelectedCourse(courseSelect);
    }
    scrollToForm();
  };

  const handleEnquirySuccess = (details: any) => {
    console.log("Registered Admission Request:", details);
  };

  return (
    <main className="min-h-screen bg-[#f6eada]/10 relative pb-16 md:pb-0">
      
      {/* 1. Sticky High-Visibility Announcement Alert Bar */}
      <AnnouncementBar onApplyClick={scrollToForm} />

      {/* 2. Brand Sticky Header */}
      <StickyNav onApplyClick={scrollToForm} onScholarshipClick={() => {
        const element = document.getElementById('scholarship-panel');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }} />

      {/* 3. Hero Section Above the Fold */}
      <HeroSection onApplyClick={scrollToForm} onEnquiryClick={scrollToForm} />

      {/* Recruiter Marquee Section */}
      <RecruiterMarquee />

      {/* 4. Why Chosen Key Drivers Bento List */}
      <WhyChooseNimt />

      {/* 5. Special Choice BPT & BMRIT Detail Cards */}
      <ProgrammeChoice onSelectCourse={handleSelectCourse} />

      {/* 6. Partner Hospital Logos and Image Training layouts */}
      <RealHospitalTraining />

      {/* 7. Industry Segment Demands Infographic */}
      <HealthcareDemand />

      {/* 8. Tabbed Curriculum breakdown directories */}
      <CurriculumSection />

      {/* 9. Typical College vs NIMT Comparison Grid */}
      <NimtAdvantage />

      {/* 10. Placements partners and Interactive Salary timelines */}
      <PlacementsSection />

      {/* 11. Custom Parents Trust Factors and Merit Scholarships pre-approvals */}
      <ParentsTrustScholarships onCalculateEligibility={(score, course) => handlePrecalculateScholarship(score, course)} />

      {/* 12. Hostel and Campus Bento Gallery */}
      <HostelCampusLife />

      {/* 13. Horizontal 4 Step Progressive Admissions */}
      <AdmissionProcess />

      {/* 14. Collapsible candidate FAQ Accordion */}
      <FaqAccordion />

      {/* 15. Real Client-Server Admission Form */}
      <EnquiryForm
        selectedCourse={selectedCourse}
        calculatorScore={calculatorScore}
        onSuccess={handleEnquirySuccess}
      />

      {/* 16. Invisible Conversion Tools & Popups (Exit intent, Sticky triggers) */}
      <CroOverlays
        onApplyTriggerClick={scrollToForm}
        onPrecalculateScholarship={(score) => setCalculatorScore(score)}
      />

      {/* 17. Trust Footer info */}
      <footer className="bg-neutral-950 text-zinc-400 border-t border-white/5 pt-16 pb-24 md:pb-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col select-none relative max-w-xs font-sans">
              <div className="flex items-baseline gap-1">
                <div className="relative">
                  {/* Small blue triangle above letter 'I' */}
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none font-sans relative">
                    N
                    <span className="relative inline-block">
                      I
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[#00bfff] text-[10px] md:text-xs">▲</span>
                    </span>
                    MT
                  </span>
                </div>
                <span className="text-4xl md:text-5xl font-black text-[#00bfff] leading-none">/</span>
              </div>
              <span className="text-2xl font-extrabold tracking-wider text-white leading-none mt-2">EDUCATIONAL</span>
              <span className="text-2xl font-extrabold tracking-wider text-white leading-none mt-1">INSTITUTIONS</span>
            </div>

            <p className="text-sm font-light leading-relaxed text-zinc-400">
              NIMT Institute of Allied Health Sciences is a premiere unit established under the NIMT Educational Institutions umbrella, dedicated to pioneering healthcare clinical education, physiotherapy care, and advanced radiological diagnostics training.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com/nimtgroup" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00bfff] hover:border-[#00bfff] hover:bg-zinc-800/50 transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/nimt_india_official" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00bfff] hover:border-[#00bfff] hover:bg-zinc-800/50 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/school/nimt-group-of-institutions/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00bfff] hover:border-[#00bfff] hover:bg-zinc-800/50 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/user/nimtgroup" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00bfff] hover:border-[#00bfff] hover:bg-zinc-800/50 transition-all duration-300" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/nimtgroup" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#00bfff] hover:border-[#00bfff] hover:bg-zinc-800/50 transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Campus Locations */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">
              CAMPUS LOCATIONS
            </h4>
            <div className="flex gap-3 text-sm font-light leading-relaxed">
              <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-zinc-200">Greater Noida Campus:</span><br />
                Plot No. 41, Knowledge Park I, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh - 201310
              </div>
            </div>
          </div>

          {/* Admissions Office */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">
              ADMISSIONS OFFICE
            </h4>
            <div className="space-y-3 text-sm font-light">
              <a href="mailto:admissions@nimt.ac.in" className="flex items-center gap-3 text-zinc-400 hover:text-[#00bfff] transition-colors duration-200">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <span>admissions@nimt.ac.in</span>
              </a>
              <a href="tel:+919555192192" className="flex items-center gap-3 text-zinc-400 hover:text-[#00bfff] transition-colors duration-200">
                <Phone className="w-5 h-5 text-pink-500 shrink-0" />
                <span>+91 95551 92192</span>
              </a>
            </div>
          </div>

          {/* Legal Accreditation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-display">
              LEGAL ACCREDITATION
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-zinc-400">
              <li className="flex items-start gap-1 text-[#00bfff] hover:text-white transition-colors duration-200">
                <span className="font-bold mr-1.5">•</span>
                <span>Affiliated to Atal Bihari Vajpayee Medical University (ABVMU), Lucknow</span>
              </li>
              <li className="flex items-start gap-1 text-[#00bfff] hover:text-white transition-colors duration-200">
                <span className="font-bold mr-1.5">•</span>
                <span>Approved by U.P. State Medical Faculty</span>
              </li>
              <li className="flex items-start gap-1 text-[#00bfff] hover:text-white transition-colors duration-200">
                <span className="font-bold mr-1.5">•</span>
                <span>Practical Training in Multi-Specialty Hospital Partners</span>
              </li>
              <li className="flex items-start gap-1 text-[#00bfff] hover:text-white transition-colors duration-200">
                <span className="font-bold mr-1.5">•</span>
                <span>Approved Under Section 2(f) UGC Act Status</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500 font-light text-center md:text-left leading-relaxed">
            &copy; 2026 NIMT Group of Institutions. All Legal Rights Reserved. Developed to ABVMU Guidelines.
          </p>
          <div className="flex items-center gap-4 text-zinc-500 font-light">
            <a href="#" className="hover:text-[#00bfff] transition-colors">Privacy Terms</a>
            <span className="text-zinc-800">•</span>
            <a href="#" className="hover:text-[#00bfff] transition-colors">Anti-Ragging Act</a>
            <span className="text-zinc-800">•</span>
            <a href="#" className="hover:text-[#00bfff] transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
