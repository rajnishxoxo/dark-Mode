import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between'>
        <ul className='flex flex-row justify-evenly w-full bg-gray-200 '>
            <li>Home</li>
            <li>about us</li>
            <li>contact us</li>
        </ul>
        <button className='bg-orange-500 w-40 p-2 rounded'>Dark-Mode</button>
    </div>
  )
}

export default Header