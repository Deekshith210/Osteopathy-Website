import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { SlideUp, StaggerContainer, StaggerItem } from './UI/Animations';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark text-brand-peach">
      <div className="container mx-auto px-6">
        <SlideUp className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Patient <span className="italic text-brand-peachDark">Stories</span></h2>
        </SlideUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Quote className="text-brand-peachDark mb-6 opacity-50" size={32} />
              <p className="text-lg italic font-serif text-brand-peach/90 mb-8">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-brand-peach/60 uppercase tracking-wider mt-1">{t.condition}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;