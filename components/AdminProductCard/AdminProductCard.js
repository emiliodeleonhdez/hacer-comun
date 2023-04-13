import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import styles from "./AdminProductCard.module.css"
import Modal from "../Modal/Modal"

const AdminProductCard = (props) => {
  console.log(props)

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

  const openModal = (modalData) => {
    const { title, message } = modalData
    setModalContent({
      title,
      message
    })
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div className="w-64 flex flex-col justify-center items-center m-1 p-1">
      <Image
        src="http://placekitten.com/180/180"
        alt="hacer-comun"
        width={180}
        height={180}
        className="rounded-full self-center	"
      />
      <div className="flex w-20 justify-between items-center m-1">
        {/* <Link href={props.path}> */}
        <Link
          href={"/admin/edit-product"}
          className={`rounded-full p-1  ${styles.editButton}`}
        >
          <AiOutlineEdit />
        </Link>
        {/* </Link> */}
        <div
          className={`rounded-full p-1  ${styles.deleteButton}`}
          onClick={() =>
            openModal({
              title: "¿Estás seguro de eliminar este producto?",
              message:
                "Al eliminar este producto, también se eliminará todo el stock asociado."
            })
          }
        >
          <BsTrash />
        </div>
      </div>
      <Modal
        isOpenProp={isOpenModal}
        props={modalContent}
        onClose={closeModal}
      />
    </div>
  )
}

export default AdminProductCard
