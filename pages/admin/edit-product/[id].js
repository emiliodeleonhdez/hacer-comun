import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"

import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { useState } from "react"

const EditProduct = () => {
  const router = useRouter()
  const { id } = router.query

  const product = {
    img_url:
      "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0=",
    product_title: "I'm a super product Title",
    product_category: "random category",
    stock: 25,
    variants: ["variant 1", "variant 2", "variant 3"],
    price: "45.02",
    product_description:
      "Este hermoso textil bordado a mano en Oaxaca es más que una simple pieza decorativa. Cada hilo y cada puntada cuentan una historia de la tradición y la cultura de las comunidades indígenas de la sierra. Lo que hace especial a este producto es que, al adquirirlo, estás contribuyendo a fomentar el comercio justo y apoyar directamente a las comunidades de la región. De esta manera, no solo estás adquiriendo una obra de arte única, sino que también estás haciendo una diferencia positiva en la vida de las personas que la crearon."
  }

  const [productUpdate, setProductUpdate] = useState({})

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      e.target.blur()
    }
  }

  const handleUpdateProduct = (e) => {
    setProductUpdate({
      ...productUpdate,
      [e.target.name]: e.target.value
    })
  }
  console.log(productUpdate)
  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-center">
      <aside className="flex flex-col p-8">
        <Image
          src={product.img_url}
          alt="hacer-comun"
          width={500}
          height={500}
        />
      </aside>
      <aside className="product-detail flex flex-col w-full md:w-2/5lg:h-3/5 p-8 items-center md:items-start md:justify-center">
        <h1 className="text-xl md:text-3xl lg:text-5xl">
          <input
            className="text-center md:text-start"
            type="text"
            name="product_title"
            value={
              productUpdate.product_title
                ? productUpdate.product_title
                : product.product_title
            }
            onChange={handleUpdateProduct}
            onKeyDown={(e) => {
              handleEnterKey(e)
            }}
          />
        </h1>
        <div>
          <span>Categoría: </span>
          <input
            type="text"
            name="product_category"
            value={
              productUpdate.product_category
                ? productUpdate.product_category
                : product.product_category
            }
            onChange={handleUpdateProduct}
            onKeyDown={(e) => {
              handleEnterKey(e)
            }}
          />
        </div>
        <span className="mb-3 text-center md:text-start">
          $
          <input
            type="text"
            name="price"
            value={productUpdate.price ? productUpdate.price : product.price}
            onChange={handleUpdateProduct}
            onKeyDown={(e) => {
              handleEnterKey(e)
            }}
          />
        </span>
        <span>Stock</span>

        <div className="qty-counter w-20 flex justify-between items-center">
          <AiOutlinePlusCircle className="hover:border-slate-500 hover:text-rose-900" />
          <input
            type="number"
            min={0}
            name="stock"
            value={productUpdate.stock ? productUpdate.stock : product.stock}
            onChange={handleUpdateProduct}
            onKeyDown={(e) => {
              handleEnterKey(e)
            }}
          />
          <AiOutlineMinusCircle className="hover:border-slate-500 hover:text-rose-900" />
        </div>
        <div className="product-variant flex m-5 md:m-0 md:my-3">
          {product.variants.map((variant) => (
            <div
              key={variant}
              className="bg-slate-200 p-2 mr-5 hover:text-rose-900"
            >
              {variant}
            </div>
          ))}
        </div>
        <span className="my-3">Descripción:</span>
        <div className="w-full h-65 overflow-y-auto">
          <input
            type="text"
            name=" product_description"
            className="w-full"
            value={
              productUpdate.product_description
                ? productUpdate.product_description
                : product.product_description
            }
            onChange={handleUpdateProduct}
            onKeyDown={(e) => {
              handleEnterKey(e)
            }}
          />
        </div>
      </aside>
    </div>
  )
}

export default EditProduct
