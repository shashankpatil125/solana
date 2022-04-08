import React from 'react'
// import './App.css';

function Card() {
    return (
        <div className='flex pt-20'>
            <div className='h-2/4 w-5/12 mx-24'>
                <p className='text-6xl font-bold my-10'  >Build your own <span className='c'>online store</span> with<span className='c1'> Solana Pay.</span></p>
                <p className='from-neutral-500' >Cryptocurrencies. You've seen them make your money disappear. How about using them to make money appear? This is a chill weekend project where you'll build your own online store using Solana Pay. No Rust knowledge required. Learn how to take payments directly on the blockchain via wallets by hacking around on your own store app. No payment processors here.</p>
                <button class="bg-fuchsia-600  text-white font-bold py-2 px-4 rounded-full font-bold text-lg mt-3 shadow-xl shadow-pink-300">
                    SIGN UP FOR FREE WOOO -{'>'}
                </button>
            </div>
            <div className='h-96 w-96 mt-12 ml-12' >
                <img src='https://renderer-v2.vercel.app/_next/image?url=https%3A%2F%2Fapi.typedream.com%2Fv0%2Fdocument%2Fpublic%2F05d38e4f-2cdd-42d3-98d0-672a213c0a20_Solana_pay_tile_2_png.png%3Fbucket%3Ddocument&w=640&q=75'></img>
            </div>

        </div>
    )
}

export default Card