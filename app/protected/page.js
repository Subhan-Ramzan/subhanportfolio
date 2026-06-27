"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "../context/usercontext.js";

const Protect = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const BackendUrl = process.env.NEXT_PUBLIC_BACKEND;
  const [loading, setLoading] = useState(true);
  const { userData, setUserData } = useUser();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");

        // JWT Login Check
        if (token) {
          const res = await axios.get(`${BackendUrl}/api/protected`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.status === 200) {
            setLoading(false);
            setUserData(res.data.user);
            return;
          }
        }

        // NextAuth Login Check
        if (status === "authenticated") {
          setLoading(false);
          setUserData(session.user);
          return;
        }

        // Not Logged In
        if (status === "unauthenticated") {
          router.replace("/login");
        }
      } catch (error) {
        localStorage.removeItem("token");
        console.log(error);
        router.push("/login");
      }
    };

    if (status !== "loading") {
      checkAuth();
    }
  }, [status, router]);

  if (status === "loading") {
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

  return <>{children}</>;
};

export default Protect;
