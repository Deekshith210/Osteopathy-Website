import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import { SlideUp } from './UI/Animations';

const FAQItemComponent: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-charcoal/10 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className={`font-serif text-xl transition-colors ${isOpen ? 'text-brand-peachDark' : 'text-brand-dark'}`}>
          {question}
        </span>
        <span className="p-2 text-brand-grey">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-grey leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-brand-taupe">
      <div className="container mx-auto px-6 max-w-3xl">
        <SlideUp className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-dark mb-4">Common Questions</h2>
          <p className="text-brand-grey">Everything you need to know before your first visit.</p>
        </SlideUp>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          {FAQS.map((faq, idx) => (
            <FAQItemComponent key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;