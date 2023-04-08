import React from "react"
import Image from "next/image"

const ProductCard = ({ cardContent }) => {
  const { title, sub, price, img_url } = cardContent

  return (
    <div className="w-64 h-80  p-7 m-4 border-solid border border-slate-800 rounded-2xl flex justify-center">
      <div className="flex flex-col justify-between ">
        <Image src={img_url} alt="hacer-comun" width={500} height={500} />
        <h2 className="font-bold text-center">{title}</h2>
        <span className="text-center">{sub}</span>
        <span className="text-left">{price}</span>
      </div>
    </div>
  )
}

export default ProductCard
