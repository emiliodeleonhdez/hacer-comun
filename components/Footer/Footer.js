// Img component
import Image from 'next/image'

// styles
import styles from './Footer.module.css'

// Icons
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";

const Footer = () => {
    return (
       <footer className={`${styles.footer} items-center flex flex-col py-[20px] px-[15px] bg-footer text-white brandon`}>
            <Image src="/Icono_blanco.png" alt="hacer-comun" width={60} height={60} className="mt-6" />
            <p className="mb-10 max-w-[83%] mt-10 text-center">"Hacer Común" es un centro de diseño inclusivo y proyecto de impacto social que vincula el talento de los oficios para promover las virtudes y la prosperidad de comunidades creativas, a través del desarrollo colaborativo de objetos cotidianos que revalorizan la tradición.</p>
            <p>hola@hacercomun.com | Oaxaca, México</p>
            <ul className="flex mt-10">
                <a href="https://www.instagram.com/hacercomun/" className="mx-2">
                    <BsInstagram size="2em"/>
                </a>
                <a href="https://www.facebook.com/ComunHacer" className="mx-2">
                    <BsFacebook size="2em"/>
                </a>
                <a href="https://www.pinterest.com.mx/HacerComun/_created/" className="mx-2">
                    <BsPinterest size="2em"/>
                </a>
            </ul>
       </footer>
    )
}

export default Footer