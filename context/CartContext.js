import { createContext, useState } from "react";

export const Cart_data = createContext(13)

const CartContext = ({children}) => {
    const [cart, setCart] = useState()
    return (
    <Cart_data.Provider value={{cart, setCart}}>
        {children}
    </Cart_data.Provider>
        
    )
}

export default CartContext