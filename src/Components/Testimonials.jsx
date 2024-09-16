import React from 'react'
const Testimonials = () => {
    const testimonials = [
        {
            user: "John Doe",
            company: "Stellar Solutions",
            image: "profile-pictures/user1.jpg",
            text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
        },
        {
            user: "Jane Smith",
            company: "Blue Horizon Technologies",
            image: "profile-pictures/user2.jpg",
            text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
        },
        {
            user: "David Johnson",
            company: "Quantum Innovations",
            image: "profile-pictures/user3.jpg",
            text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
        },
        {
            user: "Ronee Brown",
            company: "Fusion Dynamics",
            image: "profile-pictures/user4.jpg",
            text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
        },
        {
            user: "Michael Wilson",
            company: "Visionary Creations",
            image: "profile-pictures/user5.jpg",
            text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
        },
        {
            user: "Emily Davis",
            company: "Synergy Systems",
            image: "profile-pictures/user6.jpg",
            text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
        },
    ];
    return (
        <div className='container mx-auto pt-[106px]' id='Testimonials'>
            <h1 className='text-center text-4xl pt-10'>What People are saying</h1>
            <div className='flex flex-wrap gap-8 justify-center pt-20'>
                {testimonials.map((item, i) => (
                    <div key={i} className='bg-neutral-900 min-w-[300px] gap-y-4 rounded-lg flex flex-col justify-between w-1/2 lg:1/3  xl:w-1/4  p-4'>
                        <p className='line-clamp-4 text-sm md:text-lg md:line-clamp-6'>{item.text}</p>
                        <div className='flex gap-x-3'>
                            <img className='max-w-10 max-h-10 rounded-full' src={item.image} alt="" />
                            <div className='flex-col'>
                                <p>{item.user}</p>
                                <p className='text-neutral-500 font-light'>{item.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}


export default Testimonials