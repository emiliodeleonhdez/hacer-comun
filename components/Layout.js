import { useRouter } from 'next/router'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
    
    const router = useRouter()
    console.log(router.pathname)
    return (
       <div className="flex flex-col h-full">
            { router.pathname !== "/login" ? <Navbar />: null}
                <main className="flex-1">
                { children }
                </main>
            { router.pathname !== "/login" ? <Footer />: null}
        </div> 
    )
}

export default Layout