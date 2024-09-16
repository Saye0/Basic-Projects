import React from 'react'
import { BotMessageSquare, BatteryCharging, Fingerprint, ShieldHalf, PlugZap, GlobeLock } from "lucide-react";
const Feature = () => {
    const card = [
        {
            header: "Drag-and-Drop interface",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab provident possimus doloremque reiciendis deserunt. Atque dolorum numquam est eos in magnam ipsum laboriosam sequi, ipsam, perferendis porro quaerat deserunt.",
            icon: <BatteryCharging />
        },
        {
            header: "Drag-and-Drop interface",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab provident possimus doloremque reiciendis deserunt. Atque dolorum numquam est eos in magnam ipsum laboriosam sequi, ipsam, perferendis porro quaerat deserunt.",
            icon: <BotMessageSquare />
        },
        {
            header: "Drag-and-Drop interface",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab provident possimus doloremque reiciendis deserunt. Atque dolorum numquam est eos in magnam ipsum laboriosam sequi, ipsam, perferendis porro quaerat deserunt.",
            icon: <Fingerprint />
        },
        {
            header: "Drag-and-Drop interface",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab provident possimus doloremque reiciendis deserunt. Atque dolorum numquam est eos in magnam ipsum laboriosam sequi, ipsam, perferendis porro quaerat deserunt.",
            icon: <ShieldHalf />
        },
        {
            header: "Drag-and-Drop interface",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab provident possimus doloremque reiciendis deserunt. Atque dolorum numquam est eos in magnam ipsum laboriosam sequi, ipsam, perferendis porro quaerat deserunt.",
            icon: <PlugZap />
        },
        {
            header: "Drag-and-Drop interface",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda ab provident possimus doloremque reiciendis deserunt. Atque dolorum numquam est eos in magnam ipsum laboriosam sequi, ipsam, perferendis porro quaerat deserunt.",
            icon: <GlobeLock />
        }
    ];

    return (
        <div className='flex flex-col items-center justify-center space-y-6 '>
            <h1 className='bg-gray-800  text-orange-500 rounded-xl px-4 py-1'>Feature</h1>
            <h1 className='text-[50px] text-center'>Easy build <span className='bg-gradient-to-r from-orange-500 to-orange-800  bg-clip-text text-transparent'>your code</span></h1>
            <div className='flex flex-wrap mt-10 lg:mt-20 gap-4 justify-center items-center '>
                {card.map((item, i) => (
                    <div key={i} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                                {item.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-xl">{item.header}</h5>
                                <p className="text-md mb-4 text-neutral-500 line-clamp-3 overflow-hidden">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feature