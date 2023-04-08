import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"

const ProductDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const product = {
    img_url:
      "https://media.istockphoto.com/id/1136422297/photo/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves.jpg?s=612x612&w=0&k=20&c=mwzWVrDvJTkHlVf-8RL49Hs5xjuv1TrYcBW4DnWVt-0=",
    product_title: "I'm a super product Title",
    product_category: "random category",
    stock: 25,
    variant: ["variant 1", "variant 2", "variant 3"]
  }

  return (
    <main className="flex h-full items-center justify-center">
      <aside className="flex flex-col p-8">
        <Image
          src={product.img_url}
          alt="hacer-comun"
          width={500}
          height={500}
        />
      </aside>
      <aside className="flex flex-col p-8">
        <h1 className="text-5xl">{product.product_title}</h1>
        <span>Categoría: {product.product_category} </span>
        <span>Cantidad</span>
        {/* ----counter---- */}
        {/* ----variant---- */}
      </aside>
    </main>
  )
}

export default ProductDetail
