import { useRouter } from 'next/router'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
    
    const router = useRouter()
    return (
       <div className="flex flex-col h-full">
            { router.pathname !== "/login" && router.pathname !== "/signup" ? <Navbar />: null}
                <main className="flex-1">
                { children }
                </main>
            { router.pathname !== "/login" && router.pathname !== "/signup" ? <Footer />: null}
        </div> 
    )
}

export default Layout