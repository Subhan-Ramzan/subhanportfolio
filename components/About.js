// components/About.js
"use client"; // Yeh directive add karein
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Correct import
import Skills from "./Skills";

const About = () => {
  const handleResume = () => {
    const link = document.createElement("a");
    link.href = "/api/downloadResume";
    link.download = "SubhanResume.pdf";
    link.click();
  };

  return (
    <>
      <h2 className="font-bold text-4xl mb-3 mt-6 w-full text-center h-auto py-5 mx-auto">More About</h2>
      <Skills />
      <hr className="w-full mb-10 border-t-2 border-gray-300" />
      <div className="mt-10 w-full text-center h-auto py-10 mx-auto flex flex-col items-center">
        <div className="mb-10">
          <h2 className="font-bold text-3xl mb-5">Projects</h2>
          <div className="py-5 grid md:grid-cols-2 gap-8 grid-cols-1">
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover mb-4"
                src="/E-Commerce.png"
                alt="SafePass"
                width={400}
                height={300}
              />
              <Link href="https://newfashion.vercel.app" target="_blank">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover mb-4"
                src="/WatchMovie.png"
                alt="WatchMovie"
                width={400}
                height={300}
              />
              <Link href="https://watchmovie-nine.vercel.app" target="_blank">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold text-3xl mb-5">
            React and MongoDB/LocalStorage
          </h2>
          <div className="py-5 grid md:grid-cols-2 gap-8 grid-cols-1">
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover object-top mb-4"
                src="/safepass.jpeg"
                alt="SafePass"
                width={400} // Set width
                height={300} // Set height
              />
              <Link href="/safepass">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover object-top mb-4"
                src="/todolist.jpeg"
                alt="TodoList"
                width={400} // Set width
                height={300} // Set height
              />
              <Link href="/todolist">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold text-3xl mb-5">Spotify and Netflix</h2>
          <div className="py-5 grid md:grid-cols-2 gap-8 grid-cols-1">
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover mb-4"
                src="/spotify.png"
                alt="Spotify"
                width={400} // Set width
                height={300} // Set height
              />
              <Link href="/Spotify/Spotify.html">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover mb-4"
                src="/netflix.png"
                alt="Netflix"
                width={400} // Set width
                height={300} // Set height
              />
              <Link href="/Netflix/Netflix.html">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-3xl mb-5">Games</h2>
          <div className="py-5 grid md:grid-cols-2 gap-8 grid-cols-1">
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover object-top mb-4"
                src="/rps.jpeg"
                alt="Rock Paper Scissors"
                width={400} // Set width
                height={300} // Set height
              />
              <Link href="/RPS/RockPaperScissor.html">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
            <div className="item p-2 m-auto w-[98vw] md:w-[24vw] h-auto bg-[#000] rounded-lg shadow-lg text-center text-lg font-sans">
              <Image
                className="w-full h-[24vh] object-cover mb-4"
                src="/tickcross.jpeg"
                alt="Tic Tac Toe"
                width={400}
                height={300}
              />
              <Link href="/TicTacToe/TicTacToe.html">
                <button className="bg-gradient-to-r w-full from-purple-600 to-[#000] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Open Link
                </button>
              </Link>
            </div>
          </div>
        </div>

        <button
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleResume}
        >
          Download Resume
        </button>
      </div>
    </>
  );
};

export default About;
