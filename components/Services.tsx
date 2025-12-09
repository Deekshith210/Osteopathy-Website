import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { SlideUp, StaggerContainer, ScaleOnHover, StaggerItem } from './UI/Animations';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-taupe">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SlideUp className="max-w-xl">
            <span className="text-brand-grey uppercase tracking-widest text-xs font-bold mb-4 block">Areas of Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">
              How I can <span className="italic text-brand-peachDark">help you</span>
            </h2>
          </SlideUp>
          <SlideUp delay={0.2} className="hidden md:block">
             <a href="#contact" className="text-brand-charcoal border-b border-brand-charcoal pb-1 hover:text-brand-peachDark hover:border-brand-peachDark transition-colors">View all treatments</a>
          </SlideUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ScaleOnHover className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-brand-charcoal/5 h-full flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-brand-peach rounded-xl text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                      <service.icon size={24} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="text-brand-grey/30 group-hover:text-brand-dark transition-colors" size={20} />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-dark mb-3">{service.title}</h3>
                  <p className="text-brand-grey text-sm leading-relaxed">{service.description}</p>
                </div>
              </ScaleOnHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;