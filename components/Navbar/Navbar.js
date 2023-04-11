import { useRouter } from "next/router"

// styles
import styles from "./Navbar.module.css"

// next tools
import Link from "next/link"

// icons
import { BsSearch, BsCart } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineShop } from "react-icons/ai"

const Navbar = () => {
  const router = useRouter()
  console.log(router.pathname)
  const isAdminRoute = router.pathname.includes("admin")

  return (
    <nav
      className={`flex justify-between px-6 navbar items-center ${styles.navbar}`}
    >
      <Link href="/">
        <img src="/logo.png" width="130"></img>
      </Link>
      <ul className="flex">
        {!isAdminRoute && (
          <li className="mx-3">
            <Link href="cart" as="">
              <BsSearch />
            </Link>
          </li>
        )}
        <li className="mx-3">
          <Link
            href={isAdminRoute ? "/admin" : ""}
            as={isAdminRoute ? "" : "/cart"}
          >
            {isAdminRoute ? <AiOutlineShop /> : <BsCart />}
          </Link>
        </li>
        <li className="mx-3">
          <Link
            href={isAdminRoute ? "admin/users" : "cart"}
            as={isAdminRoute ? "" : "/cart"}
          >
            <AiOutlineUser />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
