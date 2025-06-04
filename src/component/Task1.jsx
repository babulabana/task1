import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../config/Apicall'
import { data } from 'react-router'
import parse from 'html-react-parser';
export default function Task1() {
    const [salonUI,setsalonUI] = useState()

    useEffect(()=>{
      axios.get(API_URL)
       .then((d)=>{
         let si = d.data.map((s) => {
            return (
              <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 border-4 rounded-2xl p-10'>
                <div className='text-xl leading-8'>
                  <h1><span className='font-bold'>Service: </span>{s.service_name}</h1>
                  <h1><span className='font-bold'>User: </span>{s.user}</h1>
                  <h1><span className='font-bold'>Price: </span>{s.price}</h1>
                  <h1><span className='font-bold'>Gender: </span>{s.gender}</h1>
                  <h1><span className='font-bold'>Categories: </span>{s.categories}</h1>
                  <h1><span className='font-bold'>Area: </span>{s.area}</h1>
                  <h1><span className='font-bold'>City: </span>{s.city}</h1>
                </div>
                <div className='text-xl leading-8'>
                  <h1><span className='font-bold'>Description: </span></h1>
                  <div>{parse(s.description)}</div>
                </div>
                <div>
                  <img src={s.service_image} className='m-auto w-1/3 rounded-2xl animate-pulse' />
                </div>
              </div>
            );
          });

        setsalonUI(si)

       })
       .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <div>    
        <form class="max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        </div>
        <div className='flex flex-wrap gap-10 m-20 '>{salonUI}</div>
    </div>
  )
}
