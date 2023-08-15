import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
        <button className='flex px-5 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 '>{name}</button>
    </div>
  )
}

export default Buttons;