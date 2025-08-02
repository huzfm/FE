// components/TypingText.tsx
"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <div className="flex justify-center pb-10">
      <div className="rounded-2xl px-6  bg-white   shadow-md">
        <h1 className="text-lg sm:text-3xl lg:text-xl font-bold text-black text-center font-mono">
          <Typewriter
            words={["Shadcn but for backend"]}
            loop={true}
            cursor
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </h1>
      </div>
    </div>
  );
}
