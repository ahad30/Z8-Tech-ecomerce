import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import Footer from "../Shared/Footer"


const MainLayout = () => {
  return (
    <div className="">
        <Navbar></Navbar>
       <div className="max-w-6xl  mx-auto">
       <Outlet></Outlet>
       </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout