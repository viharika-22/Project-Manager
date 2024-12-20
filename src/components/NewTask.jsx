import React, { useRef, useState } from 'react'

const NewTask = () => {
    const entered=useRef()
    function handleInput(){
        entered.current.value
    }
    function handleClick(){
        entered.current.value=''
    }
  return (
    <div className='flex items-center gap-4'>
      <input type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' onChange={handleInput}/>
      <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask
