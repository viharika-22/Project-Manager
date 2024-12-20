import { forwardRef, useImperativeHandle, useRef } from "react"
import Button from "./Button"

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
      close() {
        dialog.current.close()
      }
    }
  })

  return (
    <dialog ref={dialog}className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right ">
        <Button type="button" onClick={() => dialog.current.close()}>Close</Button>
      </form>
    </dialog>
  )
})

export default Modal
