import React from 'react'
import Link from 'next/link'

const Landing3 = () => {
  return (
    <section className='p-20 min-h-screen bg-black text-white '>
        <div className="part1 border border-amber-200 flex ">
            <div className='w-1/2'>
            <h2 className='text-4xl font-bold'><span>Lorem ipsum dolor sit amet consectetur </span> <span className='text-[#fbbc04]'>adipisicing elit. Consequuntur iure cumque</span></h2>
            </div>
            <div className='w-1/2 text-xl'>
                <p>Lorem <Link className='text-blue-600 hover:underline' href="/">ipsum, dolor</Link> sit amet consectetur adipisicing elit. <Link className='text-blue-600 hover:underline' href="/">Eligendi provident</Link> libero qui quis, aspernatur dolore!</p>
                <button className='p-3 my-4 rounded-full bg-white text-blue-700 '>Get started for free</button>
            </div>
        </div>
        <div className="part2">part3</div>
        <div className="part3">part3</div>
    </section>
  )
}

export default Landing3