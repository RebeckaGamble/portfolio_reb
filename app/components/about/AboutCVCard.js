import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutCVCard({ title, where, when, text, borderColor }) {
    const [isVisible, setIsVisible] = useState(false);
    const { ref: cardRef, inView } = useInView({
      threshold: 0.2,
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsVisible(true);
        }, 200);
    
        return () => clearTimeout(timeout);
    }, []);

    return (
      <>
        <div ref={cardRef} className={`font-serif max-w-[700px] flex flex-grow flex-col w-full mb-6 border-l-4 px-4 py-4 shadow-lg rounded-md bg-white border-${borderColor} `}>
          <h4 className={`text-[20px] text-gray-600 pb-2`}>{title}</h4>
          <div className="text-[16px]">
          <p className="text-[gray-600]">{where}</p>
          <p className="pb-2">{when}</p>
          <p className={`whitespace-pre-line ${isVisible ? 'visible' : 'hidden'}`}>
            {isVisible && text && text.split('').map((char, index) => (
              <span key={index} className={`${inView ? "opacity-0 animate-appear" : ""}`} style={{ animationDelay: `${index * 50}ms` }}>{char}</span>
            ))}
          </p>
          </div>
        </div>
      </>
    );
}
