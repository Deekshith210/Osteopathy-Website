import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Activity } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { FadeIn, SlideUp } from './UI/Animations';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    document.querySelector('#problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-brand-peach">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-peachMedium/20 to-transparent pointer-events-none" />
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-brand-peachDark/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="max-w-2xl relative z-20">
          <FadeIn delay={0.2}>
             <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-brand-grey uppercase border border-brand-charcoal/20 rounded-full">
              Holistic Osteopathy
            </span>
          </FadeIn>
          
          <SlideUp delay={0.3}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-brand-dark mb-6">
              Restoring <span className="italic text-brand-charcoal/80">balance</span> to your body & life.
            </h1>
          </SlideUp>

          <SlideUp delay={0.5}>
            <p className="text-lg md:text-xl text-brand-grey mb-8 leading-relaxed max-w-lg font-light">
              Relieve pain and regain mobility through gentle, expert manual therapy. 
              Specialized care for back pain, posture, and sports recovery.
            </p>
          </SlideUp>

          <SlideUp delay={0.7} className="flex flex-col sm:flex-row gap-4">
            <a 
              href={APP_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white rounded-full font-medium hover:bg-brand-charcoal transition-all group"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={scrollToContent}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand-charcoal/20 text-brand-dark rounded-full font-medium hover:bg-brand-charcoal/5 transition-all"
            >
              How it works
            </button>
          </SlideUp>
        </div>

        {/* Visual Content */}
        <FadeIn delay={0.6} className="relative h-full flex justify-center md:justify-end items-center">
          <div className="relative">
             {/* Main Image - Nature/Forest (Grayscale to match mood) */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-t-[10rem] rounded-b-lg overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop" 
                alt="Nature forest balance" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                <p className="font-serif text-2xl italic tracking-wide">"The art of touch."</p>
              </div>
            </div>

            {/* Floating Detail Card - Hands/Therapy */}
            {/* This adds the missing element to the composition */}
            <motion.div 
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-24 z-20 w-48 md:w-64 bg-white p-3 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1699523229208-be1e1dd9252d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Manual Therapy Close-up" 
                  className="object-cover w-full h-full opacity-90"
                />
              </div>
              <div className="flex items-center justify-between px-2">
                 <div>
                   <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">Pain Relief</p>
                   <p className="text-[10px] text-brand-grey font-serif italic">Manual Therapy</p>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-brand-peach flex items-center justify-center text-brand-dark">
                    <Activity size={16} />
                 </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-grey/60">Scroll</span>
        <ArrowDown className="w-4 h-4 text-brand-grey/60" />
      </motion.div>
    </section>
  );
};

export default Hero;