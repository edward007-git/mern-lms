import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assests';    

const Navbar = () => {

  const isCourselistPage = location.pathname.includes('/course-list');
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-12 lg:px-36 border-b border-gray-500 py-4
     ${isCourselistPage ? 'bg-white shadow-md' : 'bg-cyan-100/70'}`}>
     <img src={assets.logo} alt="Logo" className='h-10 object-contain cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
      <div className='flex items-center gap-5'>
        <button>Become Educator</button>
       |<Link to='/my-enrollment'>My Enrollments</Link>
      </div>
      <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
      </div>
      {/* Mobile Navbar */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
     <div>
         <button>Become Educator</button>
       |<Link to='/my-enrollment'>My Enrollments</Link>
         </div><img
  src={assets.user_icon}
  alt="User"
  className="h-8 w-8 object-contain cursor-pointer"
/>



      </div>

        
    
    
    
    </div>
  )
}

export default Navbar