import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
    return (
       <div className="flex flex-col h-full">
            <Navbar />
                <div className="flex-1">
                { children }
                </div>
            <Footer />
        </div> 
    )
}

export default Layout