import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"

const ProductDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const product = {
    img_url:
      "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0=",
    product_title: "I'm a super product Title",
    product_category: "random category",
    stock: 25,
    variants: ["variant 1", "variant 2", "variant 3"],
    price: "$45.02",
    product_description:
      "Este hermoso textil bordado a mano en Oaxaca es más que una simple pieza decorativa. Cada hilo y cada puntada cuentan una historia de la tradición y la cultura de las comunidades indígenas de la sierra. Lo que hace especial a este producto es que, al adquirirlo, estás contribuyendo a fomentar el comercio justo y apoyar directamente a las comunidades de la región. De esta manera, no solo estás adquiriendo una obra de arte única, sino que también estás haciendo una diferencia positiva en la vida de las personas que la crearon."
  }

  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-center container">
      <aside className="flex flex-col p-8">
        <Image
          src={product.img_url}
          alt="hacer-comun"
          width={500}
          height={500}
        />
      </aside>
      <aside className="product-detail flex flex-col w-full md:w-2/5lg:h-3/5 p-8 justify-center items-center md:items-start justify-between">
        <h1 className="text-xl md:text-3xl lg:text-5xl">
          {product.product_title}
        </h1>
        <span className="my-3">Categoría: {product.product_category} </span>
        <span className="mb-3">{product.price}</span>
        <span>Cantidad</span>
        <div className="qty-counter w-20 flex justify-between items-center">
          <AiOutlinePlusCircle className="hover:border-slate-500 hover:text-rose-900" />
          <span>{product.stock}</span>
          <AiOutlineMinusCircle className="hover:border-slate-500 hover:text-rose-900" />
        </div>
        <div className="product-variant flex m-5 md:m-0 md:my-3">
          {product.variants.map((variant) => (
            <div key={variant} className="bg-slate-200 p-2 mr-5 hover:text-rose-900">
              {variant}
            </div>
          ))}
        </div>
          <button className="border-solid border border-zinc-400 p-2 text-zinc-800 hover:bg-zinc-600 hover:text-white px-8 inline-block">
            <span>Añadir al carrito</span>
          </button>
        <span className="my-3">Descripción:</span>
        <p>{product.product_description}</p>
      </aside>
    </div>
  )
}

export default ProductDetail
