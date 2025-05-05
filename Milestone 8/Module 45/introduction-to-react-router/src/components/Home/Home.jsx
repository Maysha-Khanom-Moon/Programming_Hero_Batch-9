import { Outlet } from "react-router-dom"
import Header from "../Header/Header"


function Home() {
  return (
    <div>
        <Header />
        <h1>Home</h1>
        <Outlet />
    </div>
  )
}

export default Home
