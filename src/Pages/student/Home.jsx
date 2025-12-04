import React from 'react'
import Hero from '../../Components/student/Hero'
import Companies from '../../Components/student/Companies'
import CoursesSection from '../../Components/student/CoursesSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-6 text-center'>



    <Hero/>
    <Companies/>
    <CoursesSection/>
    </div>
  )
}

export default Home