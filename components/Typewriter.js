"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
const Typewriter = () => {
  const [textIndex, setTextIndex] = useState(0); // current skill index
  const [charIndex, setCharIndex] = useState(0); // current character position
  const [isDeleting, setIsDeleting] = useState(false); // typing or deleting
  const [displayText, setDisplayText] = useState(""); // visible text
  const [blink, setBlink] = useState(true); // for cursor blinking
  const whatsappNumber = '+923250826305';

  const skills = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Modern Web Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentText = skills[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      // Pause before deleting
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // Move to next text after deleting fully
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % skills.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);
  return (
    <div className="h-auto md:h-[55vh] w-full max-w-6xl m-auto p-4 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      {/* Left: Image */}
      <div className="flex justify-center items-center">
        <div className="relative w-[260px] h-[260px] flex items-center justify-center rounded-full">
          {/* Neon Multi-color Animated Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin blur-xl opacity-70"></div>

          {/* Profile Image */}
          <Image
            height={220}
            width={220}
            src="/Subhan-Crop.jpg"
            alt="Subhan Ramzan"
            className="rounded-full  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-10"

          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="flex flex-col items-start justify-center space-y-3 w-full m-auto">
        <h2 className="text-xl sm:text-2xl md:text-xl font-medium animate-fade-in-down">
          Hi, My Name is
          <br />
          <span className="block text-4xl sm:text-5xl font-bold drop-shadow-md text-blue-600">
            Subhan Ramzan
          </span>
        </h2>

        <p className="text-lg sm:text-xl animate-fade-in-up">
          And I&apos;m a
          <span className="font-bold text-blue-500 px-3 py-1 rounded-xl shadow">
            {displayText}
            <span className="text-white">{blink ? "|" : " "}</span>
          </span>
        </p>

        {/* Styled & Concise Info Text */}
        <p className="text-base  text-gray-300 leading-relaxed">
          This website was built from scratch to showcase my web development skills. <br />
          Every line of code is written manually without the help of ChatGPT or any external libraries.
        </p>
        <div className="flex flex-row items-center gap-3 text-2xl text-gray-700">
          <Link href={`https://wa.me/${whatsappNumber}?text=Hi, I want to connect with you!`} target="_blank" className="hover:bg-blue-900 hover:scale-105 bg-blue-700 p-2 rounded-2xl transition">
            <FaWhatsapp size={30} />
          </Link>

          <Link href="https://github.com/Subhan-Ramzan" target="_blank" className="hover:bg-blue-900 hover:scale-105 bg-blue-700 p-2 rounded-2xl transition">
            <FaGithub size={30} />
          </Link>

          <Link href="https://linkedin.com/in/your-username" target="_blank" className="hover:bg-blue-900 hover:scale-105 bg-blue-700 p-2 rounded-2xl transition">
            <FaLinkedin size={30}/>
          </Link>

          <Link href="https://fiverr.com/your-username" target="_blank" className="hover:bg-blue-900 hover:scale-105 bg-blue-700 p-2 rounded-2xl transition ">
            <SiFiverr size={30} />
          </Link>
        </div>
      </div>
    </div>
  );

};

export default Typewriter;
