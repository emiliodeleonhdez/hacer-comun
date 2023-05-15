import styles from './ProductCard.module.css'

// Context
import { Cart_data } from "@/context/CartContext"
import { useContext } from "react"
// Image component
import Image from "next/image"
// Icon 
import { AiOutlineShoppingCart } from "react-icons/ai"

const ProductCard = ({ cardContent }) => {
  const { title, price, images, id, description } = cardContent
  const addItem = (id) => {
  }

  return (
    <div className="p-4 flex flex-col justify-center relative">
        <div className={`absolute rounded-full p-2 bottom-1/4 right-8 ${styles.cartButton}`} onClick={()=> {addItem(id)}}>
          <AiOutlineShoppingCart />
        </div>
        <Image src={images[0]} alt="hacer-comun" width={260} height={390} className="w-full"/>
        <h2 className="font-bold mt-2 mb-1">{title}</h2>
        <span className="my-1">{description}</span>
        <span className="text-left my-1">{price}</span>
    </div>
  )
}

export default ProductCard
