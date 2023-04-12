import React from "react"
import Image from "next/image"

import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"

import styles from "./AdminProductCard.module.css"

const AdminProductCard = () => {
  return (
    <div className="w-64 flex flex-col justify-center items-center">
      <Image
        src="http://placekitten.com/180/180"
        alt="hacer-comun"
        width={180}
        height={180}
        className="rounded-full self-center	"
      />
      <div className="flex w-16 justify-between items-center">
        <div className={`rounded-full p-1  ${styles.editButton}`}>
          <AiOutlineEdit />
        </div>
        <div className={`rounded-full p-1  ${styles.deleteButton}`}>
          <BsTrash />
        </div>
      </div>
    </div>
  )
}

export default AdminProductCard
