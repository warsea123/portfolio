import React, { useEffect, useState } from 'react';

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "Welcome to my Website";
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let index = 0;
    let completeTimeout;
    
    // Typing effect
    const typeInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typeInterval);
        // Complete loading after a short delay
        completeTimeout = setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    // Simulate progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          // Trigger fade out when progress is complete
          setFadeOut(true);
          return 100;
        }
        return oldProgress + 5; // Increase progress gradually
      });
    }, 100);

    return () => {
      clearInterval(typeInterval);
      clearInterval(progressInterval);
      if (completeTimeout) clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-900 text-white flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Typing Effect */}
      <div className="mb-6 text-2xl font-mono font-bold">
        {text}
        <span className="ml-1 inline-block animate-blink">|</span>
      </div>

      {/* Animated Progress Bar */}
      <div className="w-[400px] h-2 bg-gray-700 rounded overflow-hidden relative">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-blue-500 shadow-lg rounded transition-all duration-1000 ease-in-out"
        />
      </div>

      {/* Bouncing Dots Animation */}
      <div className="mt-4 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default LoadingScreen;
