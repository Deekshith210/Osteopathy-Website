import React from 'react';
import { SlideUp, FadeIn } from './UI/Animations';

const Explainer: React.FC = () => {
  return (
    <section id="what-is-osteopathy" className="py-24 bg-brand-dark text-brand-peach relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-brand-peach/30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-brand-peach/30" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SlideUp>
            <span className="text-brand-peachDark uppercase tracking-widest text-sm font-bold mb-4 block">The Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">
              What is <span className="italic text-brand-peachDark">Osteopathy?</span>
            </h2>
            <div className="space-y-6 text-brand-peach/80 text-lg font-light leading-relaxed">
              <p>
                Osteopathy is a holistic approach to healthcare that emphasizes the physical interconnection of the body's structure and function.
              </p>
              <p>
                Unlike conventional medicine which often treats symptoms in isolation, osteopathy looks at the big picture. We believe that for your body to work well, its framework—muscles, bones, ligaments, and connective tissue—must work together smoothly.
              </p>
              <p>
                We use our hands to diagnose and treat restrictions, helping your body to heal itself.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.2} className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-serif text-2xl text-white mb-2">Holistic</h4>
              <p className="text-sm text-brand-peach/60">Treating the whole person, not just the symptom.</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-white mb-2">Non-Invasive</h4>
              <p className="text-sm text-brand-peach/60">Gentle manual techniques without surgery or drugs.</p>
            </div>
          </SlideUp>
        </div>

        <FadeIn delay={0.4} className="relative">
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/400/500?grayscale&blur=2" 
              alt="Osteopathic treatment" 
              className="rounded-2xl translate-y-8 shadow-2xl opacity-80" 
            />
            <img 
              src="https://picsum.photos/401/501?grayscale" 
              alt="Anatomy detail" 
              className="rounded-2xl shadow-2xl" 
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Explainer;