import React from 'react'
import img from "../image/task2/chicken.avif"
import img1 from "../image/task2/aloo-gobi.avif"
import img2 from "../image/task2/fried_chicken.avif"
import img3 from "../image/task2/sauteed_mushrooms.avif"
import img4 from "../image/task2/georgian.avif"
import img5 from "../image/task2/spaghetti.avif"
import img6 from "../image/task2/top.avif"
import img7 from "../image/task2/chicken.avif"

export default function Task2() {
  return (
    <div>
       




        
        <div className='m-20  '>
            <h1 className='text-2xl font-bold'>Enjoy Your Welcome Offer!</h1>
            <p>get flat rupees 125 off on your next order </p>
            <div className='flex flex-col lg:flex-row   text-center gap-20 m-10'>
                <div>
                    <div>
                         <img src={img} className='h-60 hover:animate-pulse   w-60 opacity-50 m-auto rounded-2xl' alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>The Black Chimney </h1>
                    <p className='text-xl'>Biryani</p>
                </div>
                <div>
                    <div>
                         <img src={img} className='h-60 hover:animate-pulse    w-60 opacity-50 m-auto rounded-2xl' alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>Burger Farm </h1>
                    <p className='text-xl'>Burger</p>
                </div>
                <div>
                    <div>
                         <img src={img} className='h-60 w-60 hover:animate-pulse   opacity-50 m-auto rounded-2xl' alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>The Black Chimney </h1>
                    <p className='text-xl'>Biryani</p>
                </div>
                <div>
                    <div>
                         <img src={img} className='h-60 w-60 hover:animate-pulse   opacity-50 m-auto rounded-2xl' alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>The Black Chimney </h1>
                    <p className='text-xl'>Biryani</p>
                </div>
                <div>
                    <div>
                         <img src={img} className='h-60 w-60 opacity-50 m-auto rounded-2xl' alt="" />
                    </div>
                    <h1 className='text-xl font-bold'>The Black Chimney </h1>
                    <p className='text-xl'>Biryani</p>
                </div>
                
                
                
            </div>
        </div>
         <div className='m-20  '>
            <h1 className='text-2xl  my-10'>Gaurang what's on your mind ?</h1>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 ">
            
               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                 <img src={img} className='h-60 w-60  rounded-2xl hover:animate-pulse     m-auto' alt="" />
               <p>chicken</p>
               </div>
               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                <img src={img1} className='h-60 w-60  rounded-2xl  hover:animate-pulse       m-auto'  alt="" />
                <p>aloo-gobi</p>
               </div>
               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                <img src={img2} className='h-60 w-60  rounded-2xl hover:animate-pulse        m-auto'  alt="" />
                <p>fried_chicken</p>
               </div>
               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                <img src={img3} className='h-60 w-60   rounded-2xl  hover:animate-pulse      m-auto'  alt="" />
                <p>sauteed_mushrooms</p>
               </div>
               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                <img src={img4} className='h-60 w-60  rounded-2xl  hover:animate-pulse       m-auto'  alt="" />
                <p>georgian</p>
               </div>
               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                <img src={img5} className='h-60 w-60   rounded-2xl   hover:animate-pulse     m-auto'  alt="" />
                <p>spaghetti</p>
               </div>

               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                <img src={img6} className='h-60 w-60   rounded-2xl   hover:animate-pulse     m-auto'  alt="" />
                <p>chicken</p>
               </div>
               <div className='text-center text-xl gap-3 flex flex-col font-bold  '>
                <img src={img7} className='h-60 w-60   rounded-2xl hover:animate-pulse     m-auto'  alt="" />
                <p>chicken</p>
               </div>
            </div>
         </div>
          
        <h1 className='text-2xl font-bold my-10 mx-20'>Top 2295 restraurants to explore</h1>
         <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-20 mx-20 mb-20'>
            <div className='flex  gap-5'>
                <img src={img}  className='h-32 w-30 hover:animate-pulse   rounded-2xl' alt="" />
               <div>
                 <h1 className='text-xl font-bold'>Wow! chicken</h1>
                <h1 className=' font-bold'>time: 35-40 mins</h1>
                <p className=''>Lorem ipsum, dolor sit amet consectetur.</p>
                <h1 className='text-xl text-red-700 font-bold bg-red-200 px-5 py-2 mt-5 rounded-2xl '>FREE DELIVERY</h1>
                </div>

                
            </div>
            <div className='flex  gap-5'>
                <img src={img}   className='h-32 w-30  hover:animate-pulse     rounded-2xl'  alt="" />
                <div>
                 <h1 className='text-xl font-bold'>Wow! chicken</h1>
                <h1 className=' font-bold'>time: 35-40 mins</h1>
                <p className=''>Lorem ipsum, dolor sit amet consectetur.</p>
                <h1 className='text-xl text-red-700 font-bold bg-red-200 px-5 py-2 mt-5 rounded-2xl '>FREE DELIVERY</h1>
                </div>
            </div>
            <div className='flex  gap-5'>
                <img src={img}   className='h-32 w-30 hover:animate-pulse   rounded-2xl'  alt="" />
                <div>
                 <h1 className='text-xl font-bold'>Wow! chicken</h1>
                <h1 className=' font-bold'>time: 35-40 mins</h1>
                <p className=''>Lorem ipsum, dolor sit amet consectetur.</p>
                <h1 className='text-xl text-red-700 font-bold bg-red-200 px-5 py-2 mt-5 rounded-2xl '>FREE DELIVERY</h1>
                </div>
            </div>
            <div className='flex  gap-5'>
                <img src={img}   className='h-32 w-30 hover:animate-pulse      rounded-2xl'  alt="" />
                <div>
                 <h1 className='text-xl font-bold'>Wow! chicken</h1>
                <h1 className=' font-bold'>time: 35-40 mins</h1>
                <p className=''>Lorem ipsum, dolor sit amet consectetur.</p>
                <h1 className='text-xl text-red-700 font-bold bg-red-200 px-5 py-2 mt-5 rounded-2xl '>FREE DELIVERY</h1>
                </div>
            </div>
         </div>
    </div>
  )
}
//20.193.149.47:2242/spas/vendor-spa-update-test/1