import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-4 block w-full top-0 '>
        <div className="container">
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <h2 className='text-lime-400 text-4xl font-bold '>Pokedex</h2>
                </Link>
                {/* <input type='search' className='bg-lime-200 py-2 px-4 rounded-xl text-gray-500 md:w-[300px] cursor-pointer' placeholder='Search For Pokemon...' /> */}
                    
            </div>
        </div>
    </div>
  )
}

export default Navbar