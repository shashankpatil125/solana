import React, { useState } from 'react'

let int=0;

function MainInfo() {
  
  const photo=[
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwyNjgwMjM0Nzk4OC1wdWJsaWMtaW1hZ2Uta29ucThtbWUta3plbWd3ZGMuanBn.jpg?s=MHW_mgYTh3Nhql7EB5IFp5_Q01h8I9abA6OkdFOL9kE",
    "https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwyNjgwMjM1ODI2OC1wdWJsaWMtaW1hZ2Uta29ucThqNXUta3plbW04bncuanBn.jpg?s=eKiALiLuv8ntvxOeBLz_cpADdgB2yTeYAmxVgMkk53w",
    "https://images.rawpixel.com/image_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNjQ0NTYwLXdpa2ltZWRpYS1pbWFnZS1rb3diNWJ0bC5qcGc.jpg?s=sj8WOQ6KTfkOLS56dQCpJfvKgXBljHNu08OkKl_2SuQ",
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxNi1qZXJlbXliLTMxLmpwZw.jpg?s=2wedEdTfsTxOTYgoVU8__gHT6R0nofgoFmh8aqzE37M"
  ]

  const cbullet=[
      <div className='flex justify-center'>
      <p className='m-2 font-extrabold text-3xl '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      </div>,
      <div className='flex justify-center'>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      </div>,
      <div className='flex justify-center'>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      </div>,
      <div className='flex justify-center'>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl text-zinc-400 '>•</p>
      <p className='m-2 font-extrabold text-3xl '>•</p>
      </div>,
    <p></p>
  ]
  const [i,seti]=useState(photo[0]);
  const [bullet,setbullet]=useState(cbullet[0])
  // seti(photo[int])

  function decrement(){
    if(int==0)
    {
      int=0
    }
    else if(int!=0 && int>0)
    {
      int=int-1;
      
    }
    seti(photo[int])
    setbullet(cbullet[int])
    console.log(int);
  }

  function increment(){
    if(int==3)
    {
      int=3
    }
    else if(int!=3 && int<3)
    {
      int=int+1;
      
    }
    seti(photo[int])
    setbullet(cbullet[int])
    console.log(int);
  }


  return (
    <div className='pt-20 text-center'>
      <p className='text-4xl font-bold'>BingoETH</p>
      <p className='font-semibold text-xl mt-6'>BingoETH - A number calling game styled as a slow casino. Now Play Bingo on the Blockchain!</p>
      <div className='mt-4'>
        <button className='bg-sky-600 rounded-lg mr-2 text-xl p-3 font-medium text-white'>Live demo</button>
        <button className='bg-slate-600 rounded-lg text-xl p-3 font-medium text-white'>Source Code</button>
      </div>
      <div className='flex justify-center mt-16'>
        
        <button onClick={decrement} className='bg-slate-600 shadow-lg  h-12 w-20 my-auto mr-14 rounded-xl text-white'> Previous </button>
        <div className= 'w-96'>
        <img className='w-96 content-center flex-1 mx-auto ' src={i}></img>
        </div>
        <button onClick={increment} className='bg-slate-600 shadow-lg  h-12 w-20 my-auto ml-14 rounded-xl text-white'> Next</button>  
      </div>

      
      <div>{bullet}</div>
      
    </div>
  )
}

export default MainInfo