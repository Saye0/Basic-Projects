import React from 'react'
import { CheckCircle2 } from "lucide-react";
const Workflow = () => {
    const card = [
        {
            title: "Code merge made easy",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
            title: "Review code without worry",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
            title: "AI Assistance to reduce time",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
            title: "Share work in minutes",
            description:
                "Track the performance of your VR apps and gain insights into user behavior.",
        },
    ];


    return (
        <div className='pt-36'>
            <h1 className='text-4xl text-center'>Accelerate your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    coding workflow.
                </span>
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start  mt-10'>
                <div className=' max-w-[350px] lg:max-w-[550px] overflow-hidden object-contain'><img src="/code.jpg" alt="" /></div>
                <div className='pt-32 space-y-6'>
                    {card.map((item, i) => (
                        <div key={i} className='flex gap-2 items-center justify-center '>
                            <div className='bg-gray-700 text-green-500 flex justify-center items-center rounded-full w-10 h-10'>
                                <CheckCircle2 />
                            </div>
                            <div className='max-w-[200px] lg:max-w-[400px] '>
                                {item.title}
                                <p className='text-gray-500 line-clamp-2 lg:line-clamp-none'>{item.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Workflow