import Image from 'next/image';
import React from 'react';
import { Code, Server, Briefcase, Sparkles } from 'lucide-react';

const Skills = () => {
    const Values = [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 85 },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 85 },
        { name: "JAVASCRIPT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 75 },
        { name: "REACT JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 70 },
        { name: "NEXT JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", percentage: 70 },
        { name: "TAILWIND CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", percentage: 80 },
        { name: "NODE JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 60 },
        { name: "EXPRESS JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", percentage: 55 },
        { name: "MONGO DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percentage: 60 }
    ];
    const icons = {
        Code,
        Server,
        Briefcase,
        Sparkles,
    };

    const Experience = [
        { icon: "Code", name: "Frontend Dev", value: "1+ year" },
        { icon: "Server", name: "Backend Dev", value: "1 year" },
        { icon: "Briefcase", name: "Freelancing", value: "6 month" },
        { icon: "Sparkles", name: "Designing", value: "1+ year" },

    ];

    return (
        <>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full h-full px-4 pb-6 mx-auto'>
                {Values.map((value, index) => (

                    <div className='flex gap-2' key={index}>
                        <div className='p-1'>
                            <Image width={50} height={50} src={value.logo} alt="" />
                        </div>
                        <div className='w-[70%] mr-4'>
                            <div className='flex justify-between w-full'>
                                <div>
                                    {value.name}
                                </div>
                                <div>{value.percentage}%</div>
                            </div>
                            <div className='bg-gray-950 rounded-full w-full overflow-hidden leading-none py-1'>
                                <div
                                    className={`bg-blue-700 text-center rounded-full`}
                                    style={{ width: `${value.percentage}%` }}
                                >
                                    {value.percentage}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto mb-8 p-4 rounded-2xl text-center text-blue-700">

                {Experience.map((exp, index) => {
                    const IconComponent = icons[exp.icon];
                    return (
                        <div key={index} className="flex flex-col items-center rounded-xl p-4 hover:scale-105 transition duration-300 ease-in-out">
                            <div className="text-blue-600 font-bold text-xl">{exp.value}</div>
                            <IconComponent size={40} className="my-3 text-blue-700" />
                            <p className="text-base font-semibold">{exp.name}</p>
                        </div>
                    );
                })}

            </div>

        </>
    );
}

export default Skills;
