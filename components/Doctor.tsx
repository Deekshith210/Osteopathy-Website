import React from 'react';
import { Award, BookOpen, User } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from './UI/Animations';

const Doctor: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-peach">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl shadow-brand-charcoal/5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <FadeIn className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/600/800" 
                  alt={APP_CONFIG.doctorName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-serif text-xl">{APP_CONFIG.doctorName}</p>
                  <p className="text-white/80 text-sm tracking-widest uppercase">{APP_CONFIG.doctorTitle}</p>
                </div>
              </div>
            </FadeIn>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <SlideUp>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
                  Meet your <span className="text-brand-peachDark italic">specialist</span>
                </h2>
                <p className="text-brand-grey text-lg leading-relaxed mb-8">
                  I believe that health is more than the absence of pain. With over 10 years of clinical experience, I combine traditional osteopathic techniques with modern medical understanding to help patients of all ages achieve optimal balance.
                </p>
              </SlideUp>

              <StaggerContainer className="space-y-6">
                <StaggerItem className="flex items-start">
                  <div className="bg-brand-peach p-3 rounded-full mr-4 shrink-0">
                    <Award className="text-brand-charcoal w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Certified & Experienced</h4>
                    <p className="text-sm text-brand-grey">Master's Degree in Osteopathy with fellowship training.</p>
                  </div>
                </StaggerItem>

                <StaggerItem className="flex items-start">
                  <div className="bg-brand-peach p-3 rounded-full mr-4 shrink-0">
                    <BookOpen className="text-brand-charcoal w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Continuous Learning</h4>
                    <p className="text-sm text-brand-grey">Regularly updating skills with the latest manual therapy research.</p>
                  </div>
                </StaggerItem>

                <StaggerItem className="flex items-start">
                  <div className="bg-brand-peach p-3 rounded-full mr-4 shrink-0">
                    <User className="text-brand-charcoal w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Patient-Centered</h4>
                    <p className="text-sm text-brand-grey">Every treatment plan is unique to your body and lifestyle.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <SlideUp delay={0.4} className="mt-10">
                <img src="https://picsum.photos/200/80?grayscale&blur=1" alt="Signature" className="h-16 opacity-60 mix-blend-multiply" />
              </SlideUp>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;