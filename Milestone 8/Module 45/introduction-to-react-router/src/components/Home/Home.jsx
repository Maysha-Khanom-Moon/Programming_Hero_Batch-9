import { Outlet, useNavigation } from "react-router-dom"
import Header from "../Header/Header"


function Home() {

  const navigation = useNavigation();

  return (
    <div>
        <Header />
        <h1>Home</h1>
        {
          navigation.state === 'loading' ? <p>Loading...</p> : <Outlet />
        }
    </div>
  )
}

export default Home
