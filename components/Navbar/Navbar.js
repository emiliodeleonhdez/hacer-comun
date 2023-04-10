// styles
import styles from './Navbar.module.css'

// next tools
import Link from 'next/link'

// icons
import { BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";


const Navbar = () => {
    return (
       <nav className={`flex justify-between px-6 navbar items-center ${styles.navbar}`}>
            <Link href="/">
                <img src="/logo.png" width='130'></img>
            </Link>
            <ul className="flex">
                <li className="mx-3">
                    <Link href="cart"><BsSearch /></Link>
                </li>
                <li className="mx-3">
                    <Link href="cart"><BsCart /></Link>
                </li>
                <li className="mx-3">
                    <Link href="cart"><AiOutlineUser /></Link>
                </li>
            </ul>
       </nav>
    )
}

export default Navbar