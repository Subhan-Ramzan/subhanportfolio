"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CldImage, CldUploadWidget } from "next-cloudinary";

const Signup = () => {
  const BackendUrl = process.env.NEXT_PUBLIC_BACKEND;
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    profileImage: "",
  });
  const [publicId, setPublicId] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    const checkSessionOrCookie = async () => {
      try {
        // Check if session exists
        if (sessionStatus === "authenticated") {
          router.push("/read");
          return;
        }

        if (response.status === 200 && response.data?.user) {
          router.push("/profile");
        }
      } catch (error) {
        // If no session or cookie, remain on the login page
        console.log("No session or cookie found.");
      }
    };

    checkSessionOrCookie();
  }, [sessionStatus, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = { ...form, profileImage: publicId }; // Use publicId as profileImage
      const response = await axios.post(
        `${BackendUrl}/api/signup/create`,
        formData,
      );
      if (response.status === 201) {
        setSuccess("Signup successful");
        setError(null);
        toast.success("Account created successfully!");
        router.push("/login");
        return;
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred");
      } else {
        setError("An error occurred. Please try again.");
      }
      setLoading(false);
      setSuccess(null);
    }
  };

  if (sessionStatus === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className="text-center">
          <svg
            className="animate-spin h-10 w-10 text-white mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 20a8 8 0 008-8h4c0 6.627-5.373 12-12 12v-4z"
            ></path>
          </svg>
          <p className="mt-4 text-white text-lg font-semibold">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Sign Up | Subhan Website Portfolio</title>
        <meta
          name="description"
          content="Create your account on Subhan Ramzan's portfolio. Join now to access exclusive features, manage your projects, and connect with the community."
        />
        <meta name="robots" content="noindex" />{" "}
        {/* Prevent indexing if desired */}
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Create Your Account" />
        <meta
          property="og:description"
          content="Join Subhan Ramzan's community by signing up. Access exclusive features and manage your projects."
        />
        <meta
          property="og:url"
          content="https://subhanwebsite.vercel.app/signup"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen py-4 flex flex-col justify-center items-center bg-[radial-linear(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-4">
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-center text-3xl font-bold text-white">
            Create an account
          </h2>
          <div className="bg-white/10 backdrop-blur-lg p-8 shadow-lg rounded-lg mt-4">
            {error && (
              <div className="mb-4 text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center mt-6">
                <CldUploadWidget
                  uploadPreset="next-image"
                  onSuccess={({ event, info }) => {
                    if (event === "success") {
                      setPublicId(info?.public_id);
                    }
                  }}
                >
                  {({ open }) => (
                    <label
                      htmlFor="uploadImageInput"
                      className={`cursor-pointer rounded-full relative w-40 h-40 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden ${
                        publicId
                          ? ""
                          : "border-2 border-dashed border-gray-300 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-green-500 hover:to-purple-500 transition-all duration-500 ease-in-out"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        open();
                      }}
                    >
                      {publicId ? (
                        <CldImage
                          src={publicId}
                          alt="Uploaded Image"
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-white">
                          <FaCloudUploadAlt className="text-6xl mb-2 opacity-80" />
                          <button>Upload an Image</button>
                        </div>
                      )}
                    </label>
                  )}
                </CldUploadWidget>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-white"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter a Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter an Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    loading ? "cursor-not-allowed bg-gray-400" : ""
                  }`}
                  disabled={loading} // Disable button when loading
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0a12 12 0 00-12 12h4z"
                        />
                      </svg>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </form>
          </div>
          <p className="mt-6 text-center text-sm text-white">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-blue-400 hover:text-blue-300 transition duration-200"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
