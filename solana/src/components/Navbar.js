import React from 'react'


function Navbar() {
  return (
    <div >
      <ul id="nav" className=" flex w-full  h-16 shadow-md shadow-stone-100 ">
        <div className='w-full h-2'>
        <div className=''>

          <li className=" ml-6  my-3 ">
            
            <a href="#" className='font-bold text-xl mt-1'>Buildspace</a>

            <a className='float-right mr-7 text-lg ' >
              <button className=' px-4 py-2 rounded-full bg-pink-600 text-white shadow-lg text-base font-semibold shadow-pink-300' >Join -&gt;</button>
            </a>
            <a className='float-right mr-7 text-lg mt-1 text-indigo-800 font-medium' href="#">Work with us</a>
            <a className='float-right mr-7 text-lg mt-1 font-medium ' href="#">Login</a>
            
          </li>

        
          
          

        </div>
        </div>

        


        <div className='flex-1'>
          
        </div>
      </ul>
    </div>
  )
}

export default Navbar