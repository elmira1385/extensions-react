import React from 'react'

const ExtentionList = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-6'>
         <div className='flex gap-2'>
            <p className='text-3xl font-bold'>Extensions List  <span className='text-gray-500'>(12)</span></p>
         </div>
         <div className='flex justify-between items-center gap-2'>
           <button className='py-2 px-4 text-xl rounded-full bg-gray-300'>All</button>
           <button className='py-2 px-4 text-xl rounded-full bg-gray-300'>Active <span>(8)</span></button>
           <button className='py-2 px-4 text-xl rounded-full bg-gray-300'>Inactive <span>(4)</span></button>
         </div>
    </div>
  )
}

export default ExtentionList