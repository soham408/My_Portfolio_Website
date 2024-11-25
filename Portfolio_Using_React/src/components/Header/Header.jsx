import React from 'react'
import {Link, NavLink} from 'react-router-dom'

 
 export default function Header () {
    // document.body.style.backgroundColor = "lightblue";

    return (
        <>
            <header className="shadow sticky z-50 top-0">
            {/* <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5"> */}
                <div className="pt-5 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                    <div className=''>
                    <Link to="/" className="flex items-center ">
                        <img 
                            // src="https://drive.google.com/file/d/1V0CJr2hMImTuIKXHxVCI3QZ9Dr0i4RMz/view?usp=sharing"
                            src="https://drive.google.com/thumbnail?id=1V0CJr2hMImTuIKXHxVCI3QZ9Dr0i4RMz"
                            className="mr-3 h-12 rounded-full transition-all duration-300 hover:scale-110"
                            alt="Logo"
                            //  src="" alt=""
                            
                            />
                            
                    </Link>
                            </div>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink 
                                    to={"/"}
                                    className={({isActive}) =>
                                    `font-serif hover:bg-gray-50  flex justify-center  p-4  bg-gray-200 ${isActive ? 'text-orange-700' : 'text-black'} rounded-full`
                                }
                                >
                                    <strong> Home </strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/Techskills"} 
                                    className={({isActive}) =>
                                        `${isActive ? 'text-orange-600' : 'text-black'} font-serif hover:bg-gray-50 flex justify-center p-4 bg-gray-200 rounded-full`}>
                                    <strong> TechSkills </strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                to={"/Projects"}
                                    className={({isActive})=>
                                        `${isActive ? 'text-orange-600' : 'text-black'} font-serif hover:bg-gray-50 flex justify-center p-4 bg-gray-200 rounded-full`}>
                                   <strong> Projects </strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to={"/About"}
                                    className={({isActive})=>
                                        `${isActive ? 'text-orange-600' : 'text-black'} font-serif text-black-600 hover:bg-gray-50 flex justify-center p-4 bg-gray-200 rounded-full`}>
                                    <strong> About </strong>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            {/* </nav> */}
        </header>
        </>
    
    );
 }