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
    product_description:
      "Discover the beauty of Oaxacan craftsmanship with our exquisite craft product, handmade with love by skilled artisans from the state of Oaxaca in Mexico."
  }

  return (
    <main className="flex flex-col md:flex-row h-full items-center justify-center">
      <aside className="flex flex-col p-8">
        <Image
          src={product.img_url}
          alt="hacer-comun"
          width={500}
          height={500}
        />
      </aside>
      <aside className="product-detail flex flex-col w-full md:w-2/5 h-480 md:h-3/5 p-8 justify-center items-center md:items-start justify-between">
        <h1 className="text-5xl">{product.product_title}</h1>
        <span>Categoría: {product.product_category} </span>
        <span>Cantidad</span>
        <div className="qty-counter w-20 flex justify-between items-center">
          <AiOutlinePlusCircle className="hover:border-slate-500 hover:text-rose-900" />
          <span>{product.stock}</span>
          <AiOutlineMinusCircle className="hover:border-slate-500 hover:text-rose-900" />
        </div>
        <div className="product-variant flex w-2/5 justify-between">
          {product.variants.map((variant) => (
            <div key={id} className="bg-slate-200 p-2">
              {variant}
            </div>
          ))}
        </div>
        <button className="border-solid border border-slate-800 p-2 rounded-2xl hover:border-slate-500 hover:text-rose-900">
          <span>Añadir al carrito</span>
        </button>
        <span>Descripción:</span>
        <p>{product.product_description}</p>
      </aside>
    </main>
  )
}

export default ProductDetail
