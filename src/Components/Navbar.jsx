import React from "react";
import { Menu, X } from "lucide-react"
import { useState } from "react";
const Navbar = () => {
  const navItems = ["Features", "Workflow", "Pricing", "Testimonials"]


  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const toggleNavber = () => {
    setMobileDrawerOpen(!mobileDrawerOpen)
  }
  return (
    <nav className="sticky backdrop-blur-xl z-30 top-0 py-3 border-b-2 border-b-neutral-700/80">
      <div className="container mx-auto px-4 lg:text-sm flex justify-between">
        <div className="flex justify-between w-full ">

          <div className="flex items-center  gap-2">
            <img src="../../public/logo.png" alt="" className="max-h-20 max-w-20" />
            <span className="text-xl font-bold">Saye</span>
          </div>

          <ul className="hidden xl:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center">
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">
              Sign in
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-800 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">Create an account</button>
          </div>
        </div>

        <button onClick={toggleNavber} className="block z-30 xl:hidden">
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>


      </div>
      <div className={`${mobileDrawerOpen ? 'max-h-96 ' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out right-0 z-20  w-full  flex flex-col justify-center items-center  space-y-4`}>
        <ul className="flex flex-col items-center mt-4">
          {navItems.map((item, i) => (
            <li className=" transition-all duration-200 cursor-pointer font-bold bg-gray-400 hover:bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text" key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex  lg:hidden  items-center">
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">
            Sign in
          </button>
          <button className="bg-gradient-to-r from-orange-500 to-orange-800 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ">Create an account</button>
        </div>
      </div>

    </nav >
  );
};

export default Navbar;
