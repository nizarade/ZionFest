import React from 'react';
import FAQItem from './FAQItem.jsx'

const FAQSection = () => {
 const faqData = [
  {
    question: "What is ZionFest?",
    answer: "ZionFest is a community platform and information hub for Reggae, Ska, Dub, and Roots music events in Indonesia. We aim to spread positive vibes through music and connect reggae lovers with quality concerts."
  },
  {
    question: "How can I buy concert tickets on ZionFest?",
    answer: "It's easy! Just find the concert you want on the 'Ticket Center' or 'Schedule' page. Click the 'View Details' or 'Get Tickets' button, select an available ticket type, and then follow the checkout process (currently in simulation stage)."
  },
  {
    question: "The ticket I want says 'Sold Out'. Is it really unavailable?",
    answer: "Yes, the 'Sold Out' status means that all allocated tickets for that specific category have been sold through our platform. We do not hold extra tickets. Try checking other ticket categories or different events!"
  },
  {
    question: "Can purchased tickets be refunded or transferred?",
    answer: "Generally, purchased tickets are non-refundable unless the event is officially cancelled or rescheduled by the organizer. Ticket transfer policies may vary depending on the event; please check the specific terms & conditions on the concert details page."
  },
  {
    question: "Where can I see the full schedule and lineup for concerts?",
    answer: "You can find the upcoming concert schedule on the 'Schedule' page. For detailed lineups and specific event rundowns, please refer to the details page of the concert you are interested in."
  },
  {
    question: "What items are typically prohibited from being brought into the concert venue?",
    answer: "Each event might have specific rules, but commonly prohibited items include weapons, illegal drugs, outside alcoholic beverages, outside food/drinks, professional cameras without permits, and other dangerous items. Always check the specific rules on the concert details page."
  },
  {
    question: "Are there age restrictions for attending concerts?",
    answer: "Age restrictions can vary depending on the venue and event organizer's policy. Some events might be adults-only (18+ or 21+), while others are open to all ages (potentially requiring parental guidance for minors). This information is usually clearly stated in the ticket details or on the concert information page."
  },
  {
    question: "How can I find information about venue access (location) and parking?",
    answer: "Information regarding the full venue address, location map (if available), nearby public transportation options, and parking details can usually be found on the details page for each concert. We recommend checking this information before the event day."
  }
];


  return (
    // Background Section TRANSPARAN, Border Hitam, Responsive Padding & Max Width
    <section className="w-full  mx-auto p-4 sm:p-8 md:p-12 ">
      {/* Judul dengan text responsive */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8  text-center">
        FAQ - Frequently Asked Questions
      </h2>
      {/* Container untuk item FAQ */}
      <div> {/* Tidak perlu space-y jika mb-4 sudah ada di FAQItem */}
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;