//components Maincontent.jsx
"use client";
import React from 'react';
import About from './About';
import "@/app/index.css";
import Link from 'next/link';
import Image from 'next/image'; // Correct import
import Typewriter from './Typewriter';

const MainContent = () => {
    // const scrollToBottom = () => {
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         behavior: 'smooth'
    //     });
    const handleResume = () => {
        const link = document.createElement("a");
        link.href = "/api/downloadResume";
        link.download = "SubhanResume.pdf";
        link.click();
    };

    return (
        <>
            <Typewriter />

            <div className='w-[95vw] text-center md:w-[70vw] h-[auto] p-5 mx-auto flex flex-col items-center'>
                <h1 className='font-bold text-3xl flex flex-col mb-2'>
                    <div className='pt-[1vh]'>
                        <span className="text-blue-500">&lt;</span>
                        <span className="text-white">Port</span>
                        <span className="text-blue-500">Folio/&gt;</span>
                    </div>
                </h1>
                <p>
                    I am a website builder, and this website has been created as my personal portfolio to showcase my skills to clients and companies for potential hiring opportunities.
                </p>
                <p>
                    You can contact me via WhatsApp, LinkedIn, or Fiverr, and explore my work on GitHub.
                </p>


                <div className='mt-4 space-x-2 max-md:space-y-2 '>
                    <Link href="/login">
                        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded">
                            Start Here
                        </button>
                    </Link>

                    <Link href="/read">
                        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded">
                            Read More
                        </button>
                    </Link>
                    <button
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleResume}
                    >
                        Resume
                    </button>
                </div>
            </div>
            <hr />
            {/* <div className="mt-2 w-[100vw] text-center md:w-[90vw] h-[auto] py-5 mx-auto flex flex-col items-center">
                <h2 className='font-bold text-2xl'>Your Fans can buy your Chai</h2>
                <div className="flex justify-around mt-4 w-full">
                    <div className='flex flex-col justify-center text-center items-center m-auto space-y-2'>
                        <Image
                            src="/coin.png"
                            alt="coin"
                            width={64}
                            height={64}
                            className="object-cover rounded-full"
                        />
                        <h3>Fans want to contribute</h3>
                        <p>Your fans are writing to contribute financially</p>
                    </div>
                    <div className='flex flex-col justify-center text-center items-center m-auto space-y-2'>
                        <Image
                            src="/Robot.jpeg"
                            alt="robot"
                            width={64}
                            height={64}
                            className="object-cover rounded-full"
                        />
                        <h3>Fans want to contribute</h3>
                        <p>Your fans are writing to contribute financially</p>
                    </div>
                    <div className='flex flex-col justify-center text-center items-center m-auto space-y-2'>
                        <Image
                            src="https://th.bing.com/th/id/OIP.kXVqMQdA_kfb36a3v1vc4gHaEY?rs=1&amp;pid=ImageDetMain"
                            alt="external image"
                            width={64}
                            height={64}
                            className="object-cover rounded-full bg-cover"
                        />
                        <h3>Fans want to contribute</h3>
                        <p>Your fans are writing to contribute financially</p>
                    </div>
                </div>
            </div> */}
            <hr />

            <About />
        </ >
    );
}

export default MainContent;
