import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import './Root.css'

function Root() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
