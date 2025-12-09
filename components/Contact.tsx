import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { APP_CONFIG } from '../constants';
import { SlideUp } from './UI/Animations';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-peach pt-24 pb-12 rounded-t-[3rem] mt-12">
      <div className="container mx-auto px-6">
        
        {/* Main CTA */}
        <div className="flex flex-col items-center text-center mb-24">
          <SlideUp>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 text-white">
              Ready to feel <br/> <span className="italic text-brand-peachDark">better?</span>
            </h2>
            <p className="text-brand-peach/70 text-lg mb-10 max-w-lg mx-auto">
              Take the first step towards a pain-free life. I'm here to answer your questions.
            </p>
            <a 
              href={APP_CONFIG.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-brand-peachDark text-brand-dark rounded-full text-lg font-bold hover:bg-white transition-all transform hover:scale-105 shadow-xl shadow-brand-peachDark/20"
            >
              <MessageCircle className="mr-3" />
              Book via WhatsApp
            </a>
          </SlideUp>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-brand-peach/10 pt-16 mb-16">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-white mb-6">Contact</h3>
            <div className="space-y-4 text-brand-peach/70">
              <p className="flex items-center justify-center md:justify-start">
                 <Mail size={18} className="mr-3" />
                 {APP_CONFIG.contactEmail}
              </p>
              <p className="flex items-center justify-center md:justify-start">
                 <MessageCircle size={18} className="mr-3" />
                 +{APP_CONFIG.whatsappNumber}
              </p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-white mb-6">Location</h3>
             <div className="space-y-4 text-brand-peach/70">
              <p className="flex items-center justify-center md:justify-start">
                 <MapPin size={18} className="mr-3" />
                 {APP_CONFIG.address}
              </p>
              <p className="text-sm opacity-60">Parking available on site.</p>
            </div>
          </div>

          <div className="text-center md:text-left">
             <h3 className="font-serif text-2xl text-white mb-6">Hours</h3>
             <div className="space-y-2 text-brand-peach/70">
               <p className="flex justify-between md:justify-start gap-8">
                 <span>Mon - Fri</span>
                 <span>09:00 - 18:00</span>
               </p>
               <p className="flex justify-between md:justify-start gap-8">
                 <span>Saturday</span>
                 <span>10:00 - 14:00</span>
               </p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-brand-peach/40 pt-8 border-t border-brand-peach/5">
          <p>© {new Date().getFullYear()} {APP_CONFIG.clinicName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;