import Banner from "../Banner/Banner"
import CategoryList from "../CategoryList/CategoryList"
import FeaturedJobs from './../FeaturedJobs/FeaturedJobs';


function Home() {
  return (
    <div>
        <Banner />
        <CategoryList />
        <FeaturedJobs />
    </div>
  )
}

export default Home
