import React from 'react'
import { Link } from 'react-router-dom';

export default function Home(){
    return (
         <>
        <div className='flex space-x-4 flex justify-end space-x-4 pr-8 pt-8 '>  
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'> 
            <Link to="/" className='flex items-center'> 
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                            />
                    </Link>
                            </div>
                            
            <h1 className='text-red-600 hover:bg-gray-50 flex justify-center p-4 bg-gray-200 rounded-full '>Home</h1>
            <h1 className='text-red-600 hover:bg-gray-50 flex justify-center p-4 bg-gray-200 rounded-full'>TechSkills</h1>
            <h1 className='text-red-600 hover:bg-gray-50 flex justify-center p-4 bg-gray-200 rounded-full'>Projects</h1>
            <h1 className='text-red-600 hover:bg-gray-50 flex justify-center p-4 bg-gray-200 rounded-full'>About</h1>
        </div>
    
     </>
   
)

}