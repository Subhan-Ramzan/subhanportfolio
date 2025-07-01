"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaBeer,
  FaReact,
  FaBlogger,
} from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const [publicId, setPublicId] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoutCookies = async () => {
    try {
      await axios.post("/api/logout");
      setUserData(null);
      toast.success("Logout successful!"); // Notify successful logout
    } catch (err) {
      console.error("Logout Error:", err);
      toast.error("Logout failed. Please try again."); // Notify error on logout
    }
  };

  const phoneNumber = "+923250826305"; // Replace with the actual phone number
  const textMessage = encodeURIComponent("Hello! I need help."); // Customize your message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

  useEffect(() => {
    console.log("status:", status); // Debugging line
    console.log("userData:", userData); // Debugging line

    const fetchCookieData = async () => {
      try {
        const response = await axios.get("/api/protected", {
          withCredentials: true,
        });
        setUserData(response.data.user);
        const user = response.data.user;
        const id = user.id;

        if (id) {
          const imageResponse = await axios.get(`/api/profileimage/${id}`);
          setPublicId(imageResponse.data.public_id);
        } else {
          console.log("No user ID found; skipping profile image fetch");
        }
      } catch (error) {
        console.log("Failed to fetch protected data:", error);
        setUserData(null);
        console.log("User data set to null due to fetch error");
      }
    };

    if (status === "unauthenticated" && userData === null) {
      fetchCookieData();
    }
  }, [status, userData, router]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full top-0 left-0 transition-opacity duration-300 ${
          isScrolled ? "bg-gray-900/70 fixed shadow-lg" : "bg-gray-900"
        } z-50`}
      >
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="relative group text-white text-2xl font-semibold hover:animate-spin transition-colors duration-300 transform hover:scale-110">
                <span className="text-blue-500">&lt;</span>
                <span className="text-white group-hover:rotate-45 transition-transform duration-500">
                  Port
                </span>
                <span className="text-blue-500 group-hover:text-blue-900 group-hover:rotate-45 transition-all duration-1000">
                  Folio/&gt;
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/read"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaServicestack /> Services
              </Link>
            </li>
            <li>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaEnvelope /> Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaBlogger /> Blog
              </Link>
            </li>
          </ul>

          {/* Auth & Cart Section */}
          <div className="hidden md:flex items-center gap-2">
            <div className="md:block hidden items-center">
              {status === "authenticated" || userData !== null ? (
                <Link href="/profile">
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image.url || session.user.image}
                      alt="User PProfile"
                      width={40}
                      height={40}
                      className="rounded-full object-cover cursor-pointer"
                    />
                  ) : publicId ? (
                    <CldImage
                      src={publicId}
                      alt="User Prrofile"
                      width={40}
                      height={40}
                      className="rounded-full object-cover cursor-pointer"
                    />
                  ) : (
                    <FaRegCircleUser className="text-3xl cursor-pointer" />
                  )}
                </Link>
              ) : (
                <Link href="/login">
                  <FaRegCircleUser className="text-2xl text-white md:text-3xl cursor-pointer" />
                </Link>
              )}
            </div>
            {status === "authenticated" || userData !== null ? (
              <>
                <p className="text-white">
                  Welcome,{" "}
                  {session?.user?.name ||
                    userData.username ||
                    session?.user?.email?.split(/(?=\d)/)[0]}
                </p>
                <button
                  onClick={async () => {
                    await signOut();
                    await logoutCookies();
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-blue-500 transition-colors duration-300"
                >
                  Login
                </Link>
                <Link href="/signup">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FaBars
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                } transform hover:scale-110`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "max-h-screen opacity-100 translate-y-0 py-2"
              : "max-h-0 opacity-0 -translate-y-4"
          } overflow-hidden bg-gray-900 px-4`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/read"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaServicestack /> Services
              </Link>
            </li>
            <li>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 hover:rotate-3"
              >
                <FaEnvelope /> Contact
              </Link>
            </li>
            {/* Adding Login and Signup to the mobile menu */}
            <div className="flex flex-col items-center gap-2 md:hidden">
              {status === "authenticated" || userData !== null ? (
                <>
                  <p className="text-white">
                    Welcome,{" "}
                    {session?.user?.name ||
                      userData.username ||
                      session?.user?.email?.split(/(?=\d)/)[0]}
                  </p>
                  <button
                    onClick={async () => {
                      await signOut();
                      await logoutCookies();
                    }}
                    className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition-colors duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <li className="w-full">
                    <Link href="/login">
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 rounded-lg transition-colors duration-300">
                        Login
                      </button>
                    </Link>
                  </li>
                  <li className="w-full">
                    <Link href="/signup">
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 rounded-lg transition-colors duration-300">
                        Sign up
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Navbar;
