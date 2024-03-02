import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='mybg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 px-4 block w-full top-0 '>
        <div className="container">
            <div className='flex justify-between items-center'>
                <Link href={'/'}>
                  <div>
                    <h2 className='text-lime-400 text-3xl font-bold cursor-pointer'>Pokemon Finder</h2>
                    </div>
                </Link>
                {/* <input type='search' className='bg-lime-200 w-[100px] py-2 px-4 rounded-xl text-gray-500 md:w-[300px] cursor-pointer' placeholder='Search For Pokemon...' />
                <button className='rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600' type='submit' onClick={} value={}>Search</button> */}
                    
            </div>
        </div>
    </div>
  )
}

export default Navbar