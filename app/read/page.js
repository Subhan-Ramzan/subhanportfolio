"use client";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Protect from "../protected/page";
export default function About() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <Protect>
      <Head>
        <title>About Me | Subhan Ramzan Portfolio</title>
        <meta
          name="description"
          content="Learn more about Subhan Ramzan, a passionate web developer and full stack developer with expertise in modern web technologies."
        />
        <meta name="robots" content="index, follow" /> {/* Allow indexing */}
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Subhan Ramzan" />
        <meta
          property="og:description"
          content="Explore Subhan Ramzan's journey as a web developer and full stack developer. Discover his projects and skills."
        />
        <meta property="og:url" content="https://subhanportfolio.vercel.app/read" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex items-center justify-center space-x-5 px-4 md:px-0">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg text-center py-5 sm:py-10 transition-transform duration-500 transform hover:scale-110 hover:rotate-3">
          About
        </h1>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 drop-shadow-lg text-center py-5 sm:py-10 transition-transform duration-500 transform hover:scale-110 hover:rotate-3">
          Me
        </h1>
      </div>

      <div className="min-h-screen py-10">
        {/* Container */}
        <div className="max-w-6xl mx-auto px-6 sm:px-4 lg:px-0">
          {/* Profile Section */}
          <section className="opacity-100 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-x-6 sm:space-y-0 mb-4">
              <Image
                width={100}
                height={100}
                src="/Subhan-Crop.jpg"
                className="rounded-full w-24 h-24 sm:w-28 sm:h-28 object-cover shadow-lg"
                alt="Subhan's Photo"
              />
              <div className="flex gap-2 items-center sm:items-start max-sm:w-full max-sm:justify-center max-sm:flex-wrap">
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-wider transition-transform duration-500 transform hover:scale-105 hover:rotate-2 drop-shadow-lg">
                  Subhan
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wider transition-transform duration-500 transform hover:scale-105 hover:rotate-2 drop-shadow-lg">
                  Ramzan
                </h1>
              </div>
            </div>


            <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4">
              Web Developer & Full Stack Developer
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              I&apos;m a passionate web developer with a solid background in
              both front-end and back-end technologies. With experience building
              highly responsive websites using modern frameworks, I aim to
              create seamless user experiences while ensuring robust backend
              functionality.
            </p>

            <div className="flex flex-wrap md:justify-start lg:gap-4 pt-4 max-md:truncate">
              <div className="md:flex lg:gap-x-3 items-center justify-center">
                <h4 className="text-black max-md:w-full font-semibold">
                  LinkedIn Profile:{" "}
                </h4>
                <Link
                  href="https://www.linkedin.com/in/subhanramzan/"
                  className="text-blue-500 hover:underline transition-all transform hover:scale-105 text-sm sm:text-base overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs md:max-w-none"
                >
                  https://www.linkedin.com/in/subhanramzan
                </Link>
              </div>
              <div className="md:flex max-md:w-full lg:gap-x-3 items-center">
                <h4 className="text-black max-md:w-full font-semibold">
                  Github Profile:{" "}
                </h4>
                <Link
                  href="https://github.com/Subhan-Ramzan"
                  className="text-blue-500 hover:underline transition-all transform hover:scale-105 text-sm sm:text-base overflow-hidden overflow-ellipsis whitespace-nowrap max-w-xs md:max-w-none"
                >
                  https://github.com/Subhan-Ramzan
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="opacity-0 text-black transition-all duration-700 bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 rounded-lg shadow-xl mb-10 transform">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-10 text-center">
              Contact Information
            </h2>
            <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 md:max-w-6xl">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700">
                  <strong className="font-semibold text-black">Phone: </strong>
                  <Link
                    href="https://wa.me/+923250826305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline transition-all transform hover:scale-105"
                  >
                    +92 3250826305
                  </Link>
                </p>

                <p className="text-base sm:text-lg text-gray-700">
                  <strong className="font-semibold text-black ">Email: </strong>
                  <Link
                    href="mailto:subhanramzan215@gmail.com"
                    className="text-blue-600 hover:underline transition-all transform hover:scale-105"
                  >
                    subhanramzan215@gmail.com
                  </Link>
                </p>

                <p className="text-base sm:text-lg text-gray-700">
                  <strong className="font-semibold text-black">Address: </strong>
                  <Link
                    href="https://www.google.com/maps?q=Mukarram+Town,+Rawalpindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline transition-all transform hover:scale-105"
                  >
                    Chor Chowk, Mukarram Town, Rawalpindi
                  </Link>
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700">
                  <strong className="font-semibold text-black">Portfolio: </strong>
                  <Link
                    href="https://subhanportfolio.vercel.app"
                    className="text-blue-600 hover:underline transition-all transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://subhanportfolio.vercel.app
                  </Link>
                </p>
              </div>
            </div>
          </section>


          {/* Skills Section */}
          <section className="opacity-0 transition-all duration-700 bg-white p-4 sm:p-6 lg:p-10 rounded-lg shadow-lg mb-10 transform">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                "Web Development",
                "Full Stack Development",
                "Frontend Development",
                "Backend Development",
                "Project Management",
                "Teamwork",
                "Time Management",
                "C++",
                "Effective Communication",
                "Critical Thinking",
                "SEO",
                "Problem Solving",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg duration-300 shadow-lg transform transition-all hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>


          {/* Education Section */}
          <section className="opacity-0 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Education
            </h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  Harvard College - ICS (Computer Science)
                </h3>
                <p className="text-gray-700">2022 - 2024</p>
              </li>
              <li>
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  DSA - C++
                </h3>
                <p className="text-gray-700">2020 - 2022</p>
              </li>
              <li>
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  Matric - Computer Science
                </h3>
                <p className="text-gray-700">
                  Languages: English (Basics), Urdu (Fluent), Punjabi (Fluent)
                </p>
              </li>
            </ul>
          </section>

          {/* Projects Section */}
          <section className="opacity-0 transition-all duration-700 bg-white p-6 sm:p-10 rounded-lg shadow-lg mb-10 transform">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mb-6 justify-center items-center flex">
              Projects
            </h2>
            <div className="space-y-8">
              {[
                {
                  name: "Portfolio Website",
                  description:
                    "Developed a personal portfolio website with Next.js, Tailwind CSS, and MongoDB, featuring user login, signup, support messaging, and showcasing all my projects.",
                  link: "https://subhanportfolio.vercel.app",
                },
                {
                  name: "Watch Movie",
                  description:
                    "Created a movie app website using the MERN stack and Next.js, featuring user authentication with JWT, cookies, and sessions. Users can sign up with their information and upload a profile image (stored via Cloudinary). The app allows users to favorite movies and view them on a My List page. User data is securely stored in MongoDB",
                  link: "https://watchmovie-nine.vercel.app",
                },
                {
                  name: "E-Commerce Website",
                  description:
                    "Developed a responsive e-commerce platform featuring session-based authentication, including social logins (Google, GitHub, Facebook). Integrated MongoDB for product and image management using Multer, Cloudinary, and multer-storage-cloudinary.",
                  link: "https://newfashion.vercel.app",
                },
                {
                  name: "Real-Time Location Tracking",
                  description:
                    "Developed a dynamic web application that utilizes real-time location tracking and interactive mapping. The application was built using Node.js, Express.js, Socket.io, and Leaflet.js, providing users with live Real-Time Geolocation Update positions.",
                  link: "https://boggy-shadowed-plain.glitch.me",
                },
                {
                  name: "Spotify Clone",
                  description:
                    "Create a Spotify clone with JavaScript functionality for browsing singers, displaying their song libraries, and controlling playback (play, stop, skip, and adjust volume).",
                  link: "/Spotify/Spotify.html",
                },
                {
                  name: "SafePass",
                  description:
                    "Create a saved password manager website to save the user&apos;s website name, username, and password. Store this information in MongoDB and allow users to easily view their saved password manager data.",
                  link: "/safepass",
                },
                {
                  name: "Netflix Clone",
                  description:
                    "Created a Netflix home page clone using HTML and CSS.",
                  link: "/Netflix/Netflix.html",
                },
                {
                  name: "Todo List",
                  description:
                    "Our Todo List website is built using React.js, allowing users to input todo items. Each todo item is stored in local storage, enabling users to easily edit, delete, and finish them.",
                  link: "/todolist",
                },
                {
                  name: "Tic-Tac-Toe",
                  description:
                    "Developed a Tic-Tac-Toe website using JavaScript for win, lose, and two-player modes. Players compete by placing marks on a 3x3 grid to align three in a row, column, or diagonal.",
                  link: "/TicTacToe/TicTacToe.html",
                },
                {
                  name: "Rock-Paper-Scissors",
                  description:
                    "Created a Rock-Paper-Scissors website where the user can choose one option (rock, paper, or scissors), and the computer randomly selects one as well. The website then displays the result, indicating whether the user wins, loses, or if it&apos;s a draw.",
                  link: "/RPS/RockPaperScissor.html",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
                >
                  <h3 className="text-lg sm:text-2xl font-semibold text-black mb-2">
                    {project.name}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-2">
                    {project.description}
                  </p>
                  <Link
                    target="_blank"
                    href={project.link}
                    className="text-blue-500 hover:underline"
                  >
                    {project.name}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          opacity: 1;
          transform: translateY(0);
        }
        section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
      `}</style>
    </Protect>
  );
}
