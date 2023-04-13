import React, { useState, useEffect } from "react"

const Modal = ({ props, isOpenProp, onClose }) => {
  const { title, message } = props

  const [isOpen, setIsOpen] = useState(isOpenProp)

  useEffect(() => {
    setIsOpen(isOpenProp)
  }, [isOpenProp])

  const closeModal = () => {
    setIsOpen(false)
    onClose && onClose()
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-64 h-72 flex flex-col justify-center items-center">
            <h2 className="text-lg font-medium mb-4 text-center">{title}</h2>
            <p className="text-gray-500 text-center">{message}</p>
            <div className="mt-8 flex items-center justify-between w-40">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                Sí, borrar
              </button>
              <button
                onClick={closeModal}
                className="text-rose-800 hover:text-gray-600 focus:outline-none"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
