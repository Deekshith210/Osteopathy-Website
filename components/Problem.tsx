import React from 'react';
import { Frown, Search, AlertCircle } from 'lucide-react';
import { SlideUp, StaggerContainer, StaggerItem } from './UI/Animations';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-brand-taupe relative">
      <div className="container mx-auto px-6">
        <SlideUp className="mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
            Does this sound <span className="italic text-brand-peachDark text-opacity-80 decoration-brand-peachDark underline decoration-2 underline-offset-4">familiar?</span>
          </h2>
          <p className="text-brand-grey text-lg leading-relaxed">
            Many patients come to me after months of discomfort, trying various remedies that only offer temporary relief.
          </p>
        </SlideUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          <StaggerItem className="bg-white p-8 rounded-2xl shadow-sm border border-brand-charcoal/5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-peachMedium/30 rounded-full flex items-center justify-center mb-6 text-brand-dark">
              <Frown size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-brand-dark">Persistent Pain</h3>
            <p className="text-brand-grey leading-relaxed">
              You wake up stiff, or that nagging ache in your back just won't go away, affecting your focus and mood.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white p-8 rounded-2xl shadow-sm border border-brand-charcoal/5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-peachMedium/30 rounded-full flex items-center justify-center mb-6 text-brand-dark">
              <Search size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-brand-dark">Searching for Answers</h3>
            <p className="text-brand-grey leading-relaxed">
              You've tried painkillers, random stretches from YouTube, or ergonomic chairs, but the relief is short-lived.
            </p>
          </StaggerItem>

          <StaggerItem className="bg-white p-8 rounded-2xl shadow-sm border border-brand-charcoal/5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-peachMedium/30 rounded-full flex items-center justify-center mb-6 text-brand-dark">
              <AlertCircle size={24} />
            </div>
            <h3 className="font-serif text-2xl mb-4 text-brand-dark">Unclear Cause</h3>
            <p className="text-brand-grey leading-relaxed">
              You're not sure if it's stress, your mattress, or an old injury. You just want to feel like yourself again.
            </p>
          </StaggerItem>
        </StaggerContainer>

        <SlideUp delay={0.4} className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-serif italic text-brand-charcoal">
            "Pain is usually a messenger. We need to listen to what it's saying."
          </p>
        </SlideUp>
      </div>
    </section>
  );
};

export default Problem;