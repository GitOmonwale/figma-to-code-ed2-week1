import React from 'react'

const CreateAndSellCard = ({CreateAndSellData}) => {
  return (
    <>{
      CreateAndSellData.map((Data, index) => (
        <div className='rounded-xl border bg-neutral-50 p-4 flex flex-col gap-2' key={index}>
          <div className='bg-neutral-600 rounded-lg w-10  p-2'>
            <img src={Data.image} alt="" className='' />
          </div>
          <h3 className='text-neutral-800 text-xl font-bold'>{Data.title}</h3>
          <p className='text-neutral-400'>{Data.description}</p>
        </div>
      ))
    }
    </>
  )
}

export default CreateAndSellCard
