import React, { useState, useRef } from 'react';
import MinusIcon from "../../../assets/minus_icon.png";
import PlusIcon from "../../../assets/plus_icon.png";


// Simple Plus/Minus Icon component (Neo-Brutalist style)
const ToggleIcon = ({ isOpen }) => (
  <div className="w-6 h-6  flex items-center justify-center font-mono font-bold text-lg select-none flex-shrink-0 cursor-pointer" >
    {isOpen ? 
    <img src= {MinusIcon} alt="" /> :  <img src={PlusIcon} alt="" />}
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null); // Ref untuk mengukur tinggi konten jawaban


  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Unique ID for ARIA attributes
  const answerId = `faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`;
  const questionId = `faq-question-${question.replace(/\s+/g, '-').toLowerCase()}`;


  return (
    <div className="border-2 border-black mb-4 bg-yellow-300 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-shadow duration-150 ease-in-out cursor-pointer">
      {/* Question Header (Button for accessibility) */}
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={answerId} // Points to the answer panel
        id={questionId} // ID for the button itself
        className="flex justify-between items-center w-full p-3 md:p-4 text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-300" // Added focus ring
      >
        <h3 className="text-base md:text-lg font-semibold mr-4 text-black">{question}</h3>
        <ToggleIcon isOpen={isOpen} />
      </button>

      {/* Answer Panel (Conditional Rendering) */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        // Animasi transisi untuk max-height
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : '0px' }} // Set max-height dinamis
      >
        {/* Inner div untuk padding agar tidak terpotong animasi */}
        <div ref={answerRef} className="px-3 pb-3 md:px-4 md:pb-4 pt-1 text-sm md:text-base text-gray-800"> {/* Adjusted padding & text color */}
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;