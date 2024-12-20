import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

const NewProject = ({ onAdd,onCancel }) => {
  const modal = useRef()
  const title = useRef()
  const desc = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDesc = desc.current.value
    const enteredDueDate = dueDate.current.value

    if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open()
      return
    }

    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: enteredDueDate
    })
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Oops... you have forgotten to fill one of the inputs!</h2>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
          <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button></li>
        </menu>
        <div>
          <div> {/* Replaced <p> with <div> */}
            <Input ref={title} label='Title' />
            <Input ref={desc} label='Description' textArea />
            <Input type='date' ref={dueDate} label='Due Date' />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewProject
