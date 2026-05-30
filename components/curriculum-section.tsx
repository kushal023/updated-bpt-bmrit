'use client';

import React, { useState } from 'react';
import { BookOpen, GraduationCap, LayoutGrid, CheckCircle } from 'lucide-react';

export function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<'BPT' | 'BMRIT'>('BPT');

  const bptCurriculum = [
    { title: "Anatomy & Physiology", desc: "Detailed structural exploration of the human body, ligaments, muscular skeletal junctions, and cardio-pulmonary pathways." },
    { title: "Biomechanics", desc: "Scientific review of kinematics, kinetics, skeletal movement, posture, and manual lifting physics." },
    { title: "Electrotherapy", desc: "Clinical usage of electrical nerve stimulators, ultrasound devices, shortwave diathermy, and laser recovery." },
    { title: "Exercise Therapy", desc: "Practical mobilization routines, passive and active resistance protocols, and flexibility regimes." },
    { title: "Sports Physiotherapy", desc: "Specialty taping, acute field-side athletic injuries, biomechanical gait analysis, and muscle recovery." },
    { title: "Neurological Physiotherapy", desc: "Rebuilding muscular motor neural pathways for paralysis recovery, Parkinson's, and stroke patients." },
    { title: "Cardiopulmonary Physiotherapy", desc: "Specialized breathing drills, pulmonary congestion clearance, and post-cardiac surgery cardiac vascular recovery." },
    { title: "Clinical Internship", desc: "6-months full hospital rounds working in active orthopedics, neurology clinics, and sports rehab centers." }
  ];

  const bmritCurriculum = [
    { title: "Anatomy & Physiology", desc: "In-depth clinical spatial structure study targeting radiological positioning, cross-sectional anatomy, and organ sites." },
    { title: "Pathology", desc: "Learn changes in tissues, tumor shapes, and organic infections visible under advanced medical imaging devices." },
    { title: "Diagnostic Imaging", desc: "Broad fundamentals of physical rays, imaging film development, image formatting, and standard processing." },
    { title: "Magnetic Resonance Imaging (MRI)", desc: "Physics of magnetic waves, spatial contrast mechanisms, sequence tailoring, and high-contrast neural imaging." },
    { title: "Computed Tomography (CT Scan)", desc: "Multislice detector operations, spiral volumetric scanners, computed 3D reconstructions, and contrast agent delivery." },
    { title: "X-Ray Technology", desc: "Managing radiation dosages, precise bone alignment setups, mobile bedside x-rays, and digital fluoroscopy systems." },
    { title: "Biomedical Instrumentation", desc: "Electrical scanning safety engineering, calibrating complex resonance systems, and diagnostic console management." },
    { title: "Hospital Internship", desc: "1-year intense on-duty internship assisting lead medical scanner experts in premium radiology setups." }
  ];

  const currentCurriculum = activeTab === 'BPT' ? bptCurriculum : bmritCurriculum;

  return (
    <section id="curriculum-section" className="py-20 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#0041f5] font-black">Strictly Academic Excellence</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#000000]">
            What You Will Learn Inside the Classroom & Lab
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          <p className="text-sm md:text-base text-gray-700 font-light">
            NIMT syllabus is meticulously structured in compliance with ABVMU guidelines, maintaining a perfect equilibrium between basic research science and bedside patient tasks.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-neutral-200 p-1.5 rounded-2xl shadow-inner gap-2">
            <button
              id="curriculum-tab-bpt"
              onClick={() => setActiveTab('BPT')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'BPT'
                  ? 'bg-[#0041f5] text-white shadow'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              🎉 BPT Syllabus Directory
            </button>
            <button
              id="curriculum-tab-bmrit"
              onClick={() => setActiveTab('BMRIT')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'BMRIT'
                  ? 'bg-[#0041f5] text-white shadow'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              ⚙️ BMRIT Syllabus Directory
            </button>
          </div>
        </div>

        {/* Syllabus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCurriculum.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-neutral-150 shadow-sm hover:shadow-md transition-shadow flex gap-4"
            >
              <div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-primary/5 text-primary text-xs font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-gray-950 text-sm md:text-base flex items-center gap-1.5">
                  {item.title}
                  {item.title.toLowerCase().includes('internship') && (
                    <span className="bg-amber-100 text-amber-800 text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">
                      Clinical Focus
                    </span>
                  )}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Syllabus Footer Affirmation */}
        <div className="mt-10 text-center text-xs text-gray-400">
          * NIMT strictly follows accredited board guidelines to ensure eligibility for central government job examinations and state registrations.
        </div>

      </div>
    </section>
  );
}
