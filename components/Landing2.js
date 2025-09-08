import React from 'react'
import Image from 'next/image'

const Landing2 = () => {
  const list = [
    {
      title:"AI and machine learning",
    },
    {
      title:"Compute",
    },
    {
      title:"Storage",
    },
    {
      title:"Database",
    },
    {
      title:"Data Analytics",
    },
    {
      title:"Networking",
    },
    {
      title:"Developer tools",
    },
    {
      title:"Security ",
    },
    {
      title:"Startup tools",
    },
  ]
  return (
    <article className='p-10 py-18 flex items-start border border-amber-400 '>
        <section className=' w-1/2 sticky top-30 bottom-0'>
            <div className='text-4xl font-bold'>
                <h2 className='' >Lorem ipsum dolor sit amet.</h2>
                <h2 className='text-blue-500'>Lorem ipsum dolor sit amet.</h2>
            </div>
            <div className='text-xl text-gray-400 py-4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repudiandae blanditiis soluta voluptatum possimus perferendis aliquam.</p>
            </div>
            <div className='flex gap-[2vw]'>
            <button className='p-3 border border-blue-500 rounded-full bg-blue-700 text-white hover:shadow shadow-gray-500 '>Get started for free</button>
            <button className='p-3 rounded-full hover:bg-gray-100 text-blue-700 font-bold '>Lorem, ipsum dolor.</button>
          </div>
        </section>
        <section className=' w-1/2 text-blue-600 font-bold'>
            {list.map((e,i)=>{
              return (<div key={i} className='p-3 py-4 text-lg flex justify-between items-center border-b-2 border-b-gray-300 cursor-pointer active:border-b-blue-900'>
                <div>{e.title}</div>
                <div className=' '><Image src="/down_arrow.svg" width={30} height={30} alt='down' /></div>
            </div>)
            })}
        </section>
    </article>
  )
}

export default Landing2