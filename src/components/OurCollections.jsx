import React from 'react'
import Button from './Button'
import OurCollectionsCard from './OurCollectionsCard'
import { Collections } from '../constants'
const Buttons = [
  { id: 1, title: 'All categories' },
  { id: 2, title: 'Art' },
  { id: 3, title: 'Celebrities' },
  { id: 4, title: 'Gaming' },
  { id: 5, title: 'Sport' },
]

const OurCollections = () => {
  return (
    <div className='py-10'>
      <h2 className='text-neutral-800 text-2xl font-bold mb-5'>Our collection</h2>
      <div className='flex sm:items-center items-start gap-4 justify-between flex-col sm:flex-row'>
        <div className='w-full sm:overflow-hidden overflow-x-auto flex sm:flex-wrap flex-nowrap items-center gap-2 scrollbar-thin custom-scrollbar sm:pb-0 pb-4'>
          {
            Buttons.map((button, index) => (
              <Button
                key={button.id}
                ButtonName={button.title}
              />
            ))
          }
        </div>
        <a href="#" className='font-bold text-sm text-neutral-500 underline whitespace-nowrap'>View more</a>
      </div>
      <div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 lg:px-0 md:px-20 px-10 grid-cols-1 lg:gap-2 gap-4 mt-5'>
          <OurCollectionsCard CollectionsData={Collections} />
        </div>
      </div>
      
    </div>
  )
}

export default OurCollections
