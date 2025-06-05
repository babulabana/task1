import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Alldata from './component/Alldata'
import Task1 from './component/Task1'
import Task2 from './component/Task2'
import Task3 from './component/Task3'
import Starfield from "react-starfield";
import { Link, Route, Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className='text-white'>
    {/* <Task1></Task1>
    <Task2></Task2>
    <Task3></Task3>
    <Alldata></Alldata> */} 
    <Starfield
     starCount={1000}
     starColor={[255,255,255]}
     speedFactor={0.05}
     backgroundColor='black'
     ></Starfield>
    <div>
    
                <nav class="bg-white border-gray-200 dark:bg-gray-500">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Trakky techno</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-500 md:dark:bg-gray-500 dark:border-gray-400">
                       
                        <li>
                        <Link to={"task1"} href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">task1</Link>
                        </li>
                        <li>
                        <Link to={"task2"} href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">task2</Link>
                        </li>
                        <li>
                        <Link to={"task3"} href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">task3</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            <h1 className='text-4xl text-center p-5 border-1 w-fit m-auto bg-red-800'>all tasks created in  one project</h1>
    <Routes>
      <Route path='/' element={<Task1></Task1>}></Route>
      <Route path='/task1' element={<Task1></Task1>}></Route>
      <Route path='/task2' element={<Task2></Task2>}></Route>
      <Route path='/task3' element={<Task3></Task3>}></Route>
    </Routes>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
    <script src="../node_modules/flowbite/dist/flowbite.min.js" ></script>
   </>
  )
}

export default App
