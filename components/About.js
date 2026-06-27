"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Skills from "./Skills";
import { useUser } from "@/app/context/usercontext";

const projectSections = [
  {
    projects: [
      {
        image: "/E-Commerce.png",
        alt: "E-Commerce",
        link: "https://newfashion.vercel.app",
      },
      {
        image: "/WatchMovie.png",
        alt: "WatchMovie",
        link: "https://watchmovie-nine.vercel.app",
      },
      {
        image: "/Trading-Algo.png",
        alt: "Trading Algo",
        link: "/RPS/RockPaperScissor.html",
      },
      {
        image: "/safepass.jpeg",
        alt: "SafePass",
        link: "/safepass",
      },
      {
        image: "/todolist.jpeg",
        alt: "TodoList",
        link: "/todolist",
      },
      {
        image: "/spotify.png",
        alt: "Spotify",
        link: "/Spotify/Spotify.html",
      },
      {
        image: "/netflix.png",
        alt: "Netflix",
        link: "/Netflix/Netflix.html",
      },
      {
        image: "/rps.jpeg",
        alt: "Rock Paper Scissors",
        link: "/RPS/RockPaperScissor.html",
      },
      {
        image: "/tickcross.jpeg",
        alt: "Tic Tac Toe",
        link: "/TicTacToe/TicTacToe.html",
      },
    ],
  },
];

const About = () => {
  const { userData, setUserData } = useUser();

  const handleResume = () => {
    const link = document.createElement("a");
    link.href = "/api/downloadResume";
    link.download = "SubhanResume.pdf";
    link.click();
  };

  return (
    <>
      {/* New Attractive Heading */}
      <h2 className="font-bold text-4xl mb-3 mt-6 w-full text-center h-auto py-5 mx-auto">
        More About
      </h2>

      <Skills />

      <hr className="w-full mb-10 border-t-2 border-gray-300" />

      <h2 className="font-bold text-4xl mt-6 w-full text-center h-auto mx-auto">
        Projects
      </h2>

      <div className="w-full text-center h-auto py-10 mx-auto flex flex-col items-center">
        {projectSections.map((section, index) => (
          <div key={index} className="mb-10">
            <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {section.projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg 
                  transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Image
                    className="w-full h-[28vh] object-cover rounded-lg mb-4 
                    transition duration-300 group-hover:opacity-90"
                    src={project.image}
                    alt={project.alt}
                    width={400}
                    height={300}
                  />

                  <Link
                    href={project.link}
                    target={
                      project.link.startsWith("http") ? "_blank" : "_self"
                    }
                  >
                    <button
                      className="w-full bg-linear-to-r from-purple-600 to-blue-600 
                      hover:from-pink-500 hover:to-indigo-700 text-white font-semibold 
                      py-2 px-4 rounded-lg transition duration-300 shadow-md"
                    >
                      🚀 Open Project
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        {userData ? (
          <Link
            href={"/read"}
            className="mt-6 bg-linear-to-r from-purple-500 to-blue-500 
          hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
          >
            Read More
          </Link>
        ) : (
          <Link
            href={"/login"}
            className="mt-6 bg-linear-to-r from-purple-500 to-blue-500 
          hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
          >
            Read More
          </Link>
        )}
      </div>
    </>
  );
};

export default About;
