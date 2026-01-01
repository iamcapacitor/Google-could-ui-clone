import React from 'react'

const page = () => {
    return (
        <main className='bg-white'>
            <header className='mx-auto py-20 text-center'>
                <div>

                    <h1 className='flex flex-col font-bold text-7xl bg-linear-to-br from-yellow-300 via-black to-white bg-clip-text text-transparent'>
                        <div>Ye Re Ye Re Pavsa </div>
                        <div>Tula Detu Paisa</div>
                    </h1>
                    <p className='py-8 flex flex-col justify-center text-cyan-800 '>
                        <span className='inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi id</span>
                        <span className='inline-block'>, aut accusamus eius itaque fugiat rerum optio blanditiis quia!</span>
                    </p>
                    <button className='border-2 border-blue-800 p-2 rounded-full font-bold cursor-pointer px-6 hover:-translate-y-0.5 inset-shadow-sm shadow-sm inset-shadow-gray-800 shadow-gray-800 '>Get Started</button>
                </div>
                <div className='px-4 py-10  '>
                    <div className='mx-auto border-2 border-amber-400 flex justify-center w-2/3 rounded-xl overflow-hidden shadow-2xl shadow-slate-800 '>
                        <img className='' src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" alt="Getty sample image" />
                    </div>
                </div>
            </header>
            <section>
                <div className='text-center text-md  py-10'>
                    <h2 className='font-bold text-3xl bg-linear-to-br from-yellow-300 via-black to-white bg-clip-text text-transparent'>Paisa Zala khota , Paus ala motha</h2>
                    <p className='py-3 w-[90%] max-w-md mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sequi asperiores!</p>
                    <div className='pt-10 flex justify-center gap-2 flex-wrap '>
                        <div className='bg-amber-300 w-30 min-h-12 '></div>
                        <div className='bg-amber-300 w-30 min-h-12 '></div>
                        <div className='bg-amber-300 w-30 min-h-12 '></div>
                        <div className='bg-amber-300 w-30 min-h-12 '></div>
                    </div>
                </div>
            </section>
            <section className='py-20 '>
                <div className='text-center text-md  py-10'>
                    <h2 className='font-bold text-5xl bg-linear-to-br from-yellow-300 via-black to-white bg-clip-text text-transparent'>Ye Ge Ye Ge Sari</h2>
                    <p className='py-3 w-[90%] max-w-md mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis et, suscipit asperiores nihil facere voluptate quidem hic eum.</p>
                <div>Unlocking the Power of CSS Motion path</div>
                </div>
                <div className='mx-auto max-w-6xl text-white grid grid-cols-3 gap-3 bg-linear-to-r from-amber-300 via-gray-300 to-orange-400'>
                    <div className=' h-95 bg-radial from-slate-800 to-slate-600  rounded-lg transition-all col-span-2 hover:-translate-x-2'>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Motion_path" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Motion_path</a>
                    </div>

                    <div className=' h-95 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/017/188/879/small/geometric-dark-background-with-gradient-shapes-composition-good-for-posters-design-illustration-vector.jpg")] bg-no-repeat bg-cover rounded-lg transition-all col-span-1 hover:-translate-y-2'></div>

                    <div className=' h-95 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9Ef4dSr0PXNr3AhkaAyereO_iyVoeH02sA&s")] bg-no-repeat bg-cover rounded-lg transition-all col-span-1 hover:translate-y-2'></div>

                    <div className=' h-95 bg-linear-to-r from-slate-700 via-gray-700 to-slate-800 rounded-lg transition-all col-span-2 hover:translate-x-2'></div>
                </div>
            </section>

        </main>
    )
}

export default page