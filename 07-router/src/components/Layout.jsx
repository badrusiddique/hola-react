import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <Header />
            {/* <h1 className="text-center text-2xl font-bold p-4">07 - React Router</h1> */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
