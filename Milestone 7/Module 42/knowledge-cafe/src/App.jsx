import './App.css'
import Blogs from './components/Blogs';
import Header from './components/Header';
// import { useState } from 'react';

function App() {
  // lift up the state of the blog list to the App component
  // drill down the blog list: App --> Blogs --> Blog
  // const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = () => {
    // const newBookmarks = [...bookmarks, blog];
    // setBookmarks(newBookmarks);
    console.log("bookmark adding soon");
    
  }

  return (
    <div className='mx-24 lg:mx-64 mb-12'>
      <Header></Header>
      
      <div className='flex flex-col lg:flex-row gap-6'>
        <div className='w-2/3'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className='w-1/3'>
          
        </div>
      </div>
    </div>
  )
}

export default App
