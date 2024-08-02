import React from 'react'
import diamond from '../assets/diamond.svg'
const OurCollectionsCard = ({ CollectionsData }) => {
  return (
    <>{
      CollectionsData.map((Data, index) => (
        <div className='rounded-xl border border-neutral-100 p-2 flex flex-col gap-2 ' key={index}>
          <img src={Data.image} alt="" className='rounded-xl h-56 w-full' />
          <div className='flex items-center justify-between font-bold'>
            <span className='text-sm'>{Data.title}</span>
            <div className='flex items-center justify-between gap-1'>
              <img src={diamond} alt="icon price" />
              <span>{Data.price}</span>
            </div>
          </div>
 <button className='text-neutral-800 font-bold border border-neutral-800 py-2 rounded-md w-full hover:bg-neutral-800 hover:text-white transition-all duration-100 hover:scale-100'>Place a bid</button>
        </div>
      ))
    }
    </>
  )
}

export default OurCollectionsCard
