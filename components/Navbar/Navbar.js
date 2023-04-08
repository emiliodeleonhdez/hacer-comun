// styles
import styles from './Navbar.module.css'

// next tools
import Link from 'next/link'


const Navbar = () => {
    return (
       <nav className={`flex justify-between px-6 navbar items-center ${styles.navbar}`}>
            <Link href="/">
                <img src="/logo.png" width='130'></img>
            </Link>
            <ul className="flex">
                <li className="mx-2">Buscar</li>
                <li className="mx-2">Carrito</li>
                <li className="mx-2">Perfil</li>
            </ul>
       </nav>
    )
}

export default Navbar