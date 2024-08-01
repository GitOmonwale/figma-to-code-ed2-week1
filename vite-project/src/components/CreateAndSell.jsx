import React from 'react'
import CreateAndSellCard from './CreateAndSellCard'
import { CreateAndSell as CreateAndSellData } from '../constants'
const CreateAndSell = () => {
  return (
    <div className='py-10'>
      <h2 className='text-neutral-800 text-2xl font-bold mb-5'>Create and sell</h2>
      <div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:px-0 md:px-20 px-10 grid-cols-1 lg:gap-2 gap-4 mt-5'>
          <CreateAndSellCard CreateAndSellData={CreateAndSellData} />
        </div>
      </div>
    </div>
  )
}

export default CreateAndSell
