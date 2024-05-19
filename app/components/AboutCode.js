import React, { useState, useEffect, useRef } from 'react';

const AboutCode = () => {
  const [lines, setLines] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  const codeLines = [
    { text: "/* Competencies */", color: "text-[#FC3A79]" },
    { text: "<ul>", color: "text-[#9E2DA8]" },
    { text: "  <li> Collaboration skills </li>", color: "text-white" },
    { text: "  <li> Flexible </li>", color: "text-white" },
    { text: "  <li> Detail-oriented </li>", color: "text-white" },
    { text: "</ul>", color: "text-[#9E2DA8]" },
    { text: "/* Language */", color: "text-[#FC3A79]" },
    { text: "<ul>", color: "text-[#9E2DA8]" },
    { text: "  <li> Swedish </li>", color: "text-white" },
    { text: "  <li> English </li>", color: "text-white" },
    { text: "</ul>", color: "text-[#9E2DA8]" },
  ];

  const codeEditorRef = useRef(null);
  const cursorRef = useRef(null);
  const typingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        const element = codeEditorRef.current;
        if (element && isElementInViewport(element)) {
          if (!typingRef.current) {
            startTyping(); 
          }
        } else {
          resetTyping(); 
        }
      };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isElementInViewport(codeEditorRef.current)) {
      resetTyping(); 
    }
  }, [currentIndex]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const resetTyping = () => {
    clearTimeout(typingRef.current); 
    typingRef.current = null; 
    setCurrentIndex(0);
    setTypedText('');
    setLines([]);
    setShowCursor(false);
  };

  const startTyping = () => {
    typingRef.current = setTimeout(() => {
      const currentLine = codeLines[currentIndex].text;
      if (typedText.length < currentLine.length) {
        setTypedText((prevText) => prevText + currentLine[prevText.length]);
      } else {
        setLines((prevLines) => [...prevLines, { text: typedText, color: codeLines[currentIndex].color }]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setTypedText('');
        if (currentIndex === codeLines.length - 1) {
          setShowCursor(true); 
        }
        typingRef.current = null; 
      }
    }, 50);
  };

  useEffect(() => {
    if (currentIndex < codeLines.length) {
      startTyping(); 
    } else {
      setShowCursor(true); 
    }

    return () => {
      clearTimeout(typingRef.current); 
    };
  }, [typedText, currentIndex]);

  useEffect(() => {
    if (currentIndex === codeLines.length - 1) {
      setShowCursor(true); 
    }
  }, [currentIndex]);

  return (
    <div ref={codeEditorRef} className="min-w-[320px] max-w-[400px] xl:min-w-[500px] container px-4 xl:px-8 rounded-md py-8 bg-black relative">
      <div className="code-editor flex">
        <div className="flex-grow">
          {lines.map((line, index) => (
            <div key={index} className={`whitespace-pre ${line.color}`}>{line.text}</div>
          ))}
          <div className="relative">
            {typedText && <div className={`whitespace-pre ${codeLines[currentIndex]?.color}`}>{typedText}</div>}
            {showCursor && <div ref={cursorRef} className="cursor absolute top-0 left-0 h-full animate-blink text-white">|</div>}
          </div>
        </div>
      </div>
    </div>
  );

};

export default AboutCode;
