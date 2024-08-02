import React from 'react'
import bgCTA from '../assets/astronaut_3.png'
const CTA = () => {
  return (
    <div className='h-56 w-full bg-center bg-cover rounded-xl mt-14'
      style={{
        backgroundImage: `url(${bgCTA})`,
      }}
    >
      <div className='bg-black bg-opacity-25 h-full w-full flex justify-center items-center'>
        <div className='flex flex-col items-center justify-between gap-2 max-w-lg '>
          <h2 className='text-white sm:text-5xl text-3xl text-center'>Build your NFT profile</h2>
          <p className='text-white'>Join almost 10k NFT profile on digit!</p>
          <button className='rounded-3xl w-40 text-neutral-800 py-2 px-8 bg-white'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default CTA
