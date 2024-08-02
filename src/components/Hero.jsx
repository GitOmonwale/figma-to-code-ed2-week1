import React from 'react'
import aureole from '../assets/aureole.svg';
import model from '../assets/model.png';
import monkey_1 from '../assets/monkey_1.png';
import move from '../assets/moveRight.svg'
const Hero = () => {
  return (
    <>
      <div className='grid md:grid-cols-2 gap-2 sm:pt-10 pt-5'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-neutral-500 sm:text-7xl text-5xl'>
            See the NFT new world
          </h1>
          <p className='text-neutral-400 max-w-md'>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di
          </p>
          <div className='flex gap-2 items-center text-neutral-600'>
            <h3>Discover now</h3>
            <div className='border-2 border-neutral-600 p-4 rounded-full'>
              <img src={move} alt="icon arrow right" />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 sm:h-[500px] h-[430px] md:px-0 sm:px-20 px-0'>
          <div className='relative max-w-60'>
            <img src={aureole} alt="" className='absolute -right-5 top-2'/>
            <img src={model} alt="image model" className='rounded-full max-w-full sm:h-96 h-80 pb-0 absolute bottom-0 left-0' />
          </div>
          <div className='relative max-w-60'>
            <img src={monkey_1} alt="image model" className='rounded-full max-w-full sm:h-96 h-80 top-0 right-0' />
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero
