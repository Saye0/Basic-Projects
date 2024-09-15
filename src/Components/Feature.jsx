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
            <div className='flex flex-wrap mt-10 lg:mt-20 gap-4 '>
                {card.map((item, i) => (
                    <div key={i} className='flex bg-black '>
                        <div className='h-10 w-10 mx-auto bg-gray-800 rounded-full '>
                            {item.icon}
                        </div>
                        <div >
                            <h1>{item.header}</h1>
                            <p className='line-clamp-3'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feature