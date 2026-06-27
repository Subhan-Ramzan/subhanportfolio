"use client"; // To indicate this component runs client-side

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function NotFound() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            router.push(`/${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 sm:px-12 lg:py-8">
            <div className="text-center justify-center mx-auto max-w-5xl">
                <div className="md:flex gap-6 items-center justify-center mb-4">
                    <h1 className="text-6xl font-extrabold text-red-600">404</h1>
                    <div className="max-md:hidden border-l-4 border-gray-500 h-12"></div>
                    <hr className="md:hidden my-3" />
                    <h2 className="text-2xl font-semibold text-gray-300">
                        Oops! The page you&apos;re looking for doesn&apos;t exist.
                    </h2>
                </div>
                <Link href="/">
                    <button className="bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 transform hover:scale-105">
                        Go back to Home
                    </button>
                </Link>
            </div>

            <div className="mt-8 text-center font-semibold text-gray-200 text-sm">
                <p>Or you can try searching:</p>
                <form onSubmit={handleSearch} className="mt-4">
                    <div className="flex justify-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search our site"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state on input change
                            className="p-3 w-full max-w-md text-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        <button
                            type="submit"
                            className="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
