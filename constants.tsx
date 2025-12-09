import { 
  Activity, 
  Brain, 
  Baby, 
  Stethoscope, 
  UserCheck, 
  HeartPulse 
} from 'lucide-react';
import { ServiceItem, TestimonialItem, FAQItem, ProcessStep } from './types';

// App Configuration
export const APP_CONFIG = {
  doctorName: "Dominik Wrotniak",
  doctorTitle: "D.O. FSCCO",
  clinicName: "Osteopathy Clinic",
  whatsappNumber: "91 82964 77193",
  contactEmail: "contact@osteopathy.com",
  address: "123 Healing Ave, Wellness City",
  bookingUrl: "https://wa.me/918296477193",
};

// Colors (matching Tailwind config for reference in JS if needed)
export const COLORS = {
  dark: '#1E1A12',
  peach: '#FDF9F6',
  peachDark: '#FFCEA2',
};

// Navigation Links
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Data: Services
export const SERVICES: ServiceItem[] = [
  {
    id: 'back-pain',
    title: 'Back & Neck Pain',
    description: 'Relief from chronic stiffness, sciatica, and postural discomfort caused by office work or injury.',
    icon: Activity,
  },
  {
    id: 'migraine',
    title: 'Headaches & Migraines',
    description: 'Addressing the root tension in the neck and cranium to reduce frequency and intensity of headaches.',
    icon: Brain,
  },
  {
    id: 'pediatric',
    title: 'Pediatric Osteopathy',
    description: 'Gentle care for newborns and children facing colic, sleep issues, or growth-related pains.',
    icon: Baby,
  },
  {
    id: 'sports',
    title: 'Sports Rehabilitation',
    description: 'Restoring mobility and accelerating recovery for athletes recovering from strains or trauma.',
    icon: HeartPulse,
  },
  {
    id: 'posture',
    title: 'Posture Correction',
    description: 'Realigning the body’s natural axis to prevent long-term damage and fatigue.',
    icon: UserCheck,
  },
  {
    id: 'visceral',
    title: 'Visceral Therapy',
    description: 'Supporting internal organ function to aid digestion and reduce abdominal discomfort.',
    icon: Stethoscope,
  },
];

// Data: Process
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Chat",
    description: "Reach out via WhatsApp to briefly discuss your symptoms and find a suitable slot."
  },
  {
    number: "02",
    title: "Assessment",
    description: "In-depth consultation and physical examination to identify the root cause of pain."
  },
  {
    number: "03",
    title: "Manual Therapy",
    description: "Gentle, precise manipulation to restore movement and alleviate tension immediately."
  },
  {
    number: "04",
    title: "Recovery Plan",
    description: "Personalized advice on exercises and lifestyle changes to prevent recurrence."
  }
];

// Data: Testimonials
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: "Anna Kowalska",
    condition: "Chronic Migraines",
    quote: "After years of strong painkillers, three sessions completely changed my daily comfort. The approach is so gentle yet incredibly effective."
  },
  {
    id: 't2',
    name: "Markus Schmidt",
    condition: "Lower Back Pain",
    quote: "I couldn't sit for more than an hour. Now I'm back to running. Dominik explains everything so clearly."
  },
  {
    id: 't3',
    name: "Sarah Jenkins",
    condition: "Post-Natal Recovery",
    quote: "Osteopathy helped my body realign after birth. It was the self-care I didn't know I desperately needed."
  }
];

// Data: FAQ
export const FAQS: FAQItem[] = [
  {
    question: "Is osteopathy painful?",
    answer: "Generally, no. Osteopathy is a gentle form of manual therapy. While some techniques might cause mild temporary discomfort as tight muscles release, most patients find the treatment relaxing and relieving."
  },
  {
    question: "How many sessions will I need?",
    answer: "This varies by patient and condition. Acute issues often resolve in 2-4 sessions, while chronic conditions may require a longer-term maintenance plan. We assess this during your first visit."
  },
  {
    question: "Do I need a referral from a GP?",
    answer: "No, osteopaths are primary healthcare practitioners. You can book an appointment directly without a referral."
  },
  {
    question: "What should I wear?",
    answer: "Wear loose, comfortable clothing that allows for easy movement. In some cases, you may be asked to remove bulky outer layers for examination."
  }
];