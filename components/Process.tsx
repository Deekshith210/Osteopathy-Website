import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { SlideUp, StaggerContainer, StaggerItem } from './UI/Animations';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-peach">
      <div className="container mx-auto px-6">
        <SlideUp className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">Your journey to <span className="italic">recovery</span></h2>
          <p className="text-brand-grey">Simple, transparent, and focused on you.</p>
        </SlideUp>

        <StaggerContainer className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-charcoal/10" />

          <div className="grid md:grid-cols-4 gap-10 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <StaggerItem key={index} className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-24 h-24 bg-brand-peach border-4 border-white rounded-full flex items-center justify-center shadow-lg mb-8 relative">
                   <span className="font-serif text-3xl text-brand-peachDark font-bold">{step.number}</span>
                   {/* Active Dot effect */}
                   <div className="absolute inset-0 rounded-full border border-brand-peachDark/0 group-hover:border-brand-peachDark/50 transition-all duration-500 scale-110" />
                </div>
                <h3 className="font-serif text-xl text-brand-dark mb-3">{step.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{step.description}</p>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Process;