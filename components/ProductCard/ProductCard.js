import React from "react"
import Image from "next/image"
import { AiOutlineShoppingCart } from "react-icons/ai"

const ProductCard = ({ cardContent }) => {
  const { title, sub, price, img_url } = cardContent

  return (
    <div className="w-64 h-96  p-7 m-4 border-solid border border-slate-800 rounded-2xl flex justify-center">
      <div className="flex flex-col justify-between ">
        <Image src={img_url} alt="hacer-comun" width={500} height={500} />
        <h2 className="font-bold text-center">{title}</h2>
        <span className="text-center">{sub}</span>
        <span className="text-left">{price}</span>
        <div className="flex justify-end">
          <button className="border-solid border border-slate-800 p-2 rounded-2xl hover:border-slate-500 hover:text-rose-900">
            <span className="flex justify-center items-center">
              <AiOutlineShoppingCart className="mr-3" />
              Añadir al carrito
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
