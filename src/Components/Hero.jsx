import React from 'react'
const Hero = () => {
    return (
        <div className='p-16 flex flex-col items-center container mx-auto space-y-4'>
            <h1 className='text-center text-4xl p-2'>VirtualIR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent' >for developers</span></h1>
            <p className='line-clamp-4 text-gray-500 text-center max-w-[600px]'>Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!</p>
            <div className='flex'>
                <button className='bg-gradient-to-r from-orange-500 to-orange-800 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600'>Start For Free</button>
                <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600'>Documenttation</button>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 '>

                <video className='bg-gradient-to-r from-orange-500 to-orange-800  overflow-hidden  max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[400px] border-transparent bg-clip-border border-1 p-[1px] rounded-lg' autoPlay muted loop>
                    <source src="/" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <video className='bg-gradient-to-r from-orange-500 to-orange-800 overflow-hidden  max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[400px] border-transparent bg-clip-border border-1 p-[1px] rounded-lg' autoPlay muted loop>
                    <source src="/" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    )
}

export default Hero