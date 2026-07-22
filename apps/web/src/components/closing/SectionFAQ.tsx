'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const SectionFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How do I discover broadband providers in my area?',
      answer:
        'Simply enter your 6-digit postal code (e.g. 530026) or Mandal name into the Spotlight Search box or click your district on the Interactive AP Map. You will immediately see verified fiber ISPs operating in your location.',
    },
    {
      question: 'Is Google Maps integration available for physical ISP offices?',
      answer:
        'Yes. Clicking "Open in Google Maps" opens the verified branch office location, directions, and contact details directly on Google Maps.',
    },
    {
      question: 'What broadband technologies are listed on the platform?',
      answer:
        'We catalog FTTH Optical Fiber, 5G AirFiber, Enterprise Leased Lines, and Fixed Wireless access across both major national ISPs and regional cable operators.',
    },
    {
      question: 'Is Andhra ISP Network free to use for citizens?',
      answer:
        'Yes, 100% free with no account creation or login required for searching, district exploration, and viewing provider profiles.',
    },
    {
      question: 'Will other Indian states be added in future updates?',
      answer:
        'Yes. The architecture is engineered for multi-state expansion, with AP serving as the flagship deployment before expanding nationwide.',
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60 font-sans"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-3">
          Everything You Need to Know
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full p-6 text-left flex items-center justify-between font-bold text-base text-zinc-950 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-xl font-mono text-zinc-400">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionFAQ;
