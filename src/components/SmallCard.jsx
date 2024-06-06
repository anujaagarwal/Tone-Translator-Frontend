import React from 'react'

export default function SmallCard({text}) {
  return (
    <div className='border border-gray-200 rounded-md p-4'>
        <p className='text-black'>{text}</p>
      
    </div>
  )
}
