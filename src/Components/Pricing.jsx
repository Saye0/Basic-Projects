import { CheckCircle2 } from 'lucide-react';
import React from 'react'

const Pricing = () => {
    const pricingOptions = [
        {
            title: "Free",
            price: "$0",
            features: [
                "Private board sharing",
                "5 Gb Storage",
                "Web Analytics",
                "Private Mode",
            ],
        },
        {
            title: "Pro",
            price: "$10",
            features: [
                "Private board sharing",
                "10 Gb Storage",
                "Web Analytics (Advance)",
                "Private Mode",
            ],
        },
        {
            title: "Enterprise",
            price: "$200",
            features: [
                "Private board sharing",
                "Unlimited Storage",
                "High Performance Network",
                "Private Mode",
            ],
        },
    ];
    return (
        <div className='my-12 space-y-10'>
            <h1 className='text-center text-5xl'>Pricing</h1>
            <div className='flex justify-center gap-8 flex-wrap'>
                {pricingOptions.map((item, i) => (
                    <div className='border min-w-[320px] w-1/2 lg:w-1/3  xl:w-1/4 border-gray-400 px-12 py-8 space-y-8 flex flex-col justify-between' key={i}>
                        <h1 className='text-4xl text-start'>{item.title}</h1>
                        <div className='text-4xl'>{item.price}
                            <span className='text-sm'> {"\\Month"}</span>
                        </div>
                        <ul>
                            {item.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2 />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className='px-4 py-1 border border-orange-600 rounded-lg'>Subscribe</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pricing