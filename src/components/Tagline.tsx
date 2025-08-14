"use client";

import { useState, useEffect } from "react";

export default function TypingText() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "The fastest way to build your backend";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="mb-8">
      <p className="text-lg md:text-xl sm:text-md text-white  font-semibold font-mono">
        {displayText}
        <span className="animate-pulse text-amber-600">|</span>
      </p>
    </div>
  );
}
