import './App.css'
import Blogs from './components/Blogs';
import Header from './components/Header';
import Bookmarks from './components/bookmarks/Bookmarks';

import { useState } from 'react';

function App() {
  // lift up the state of the blog list to the App component
  // drill down the blog list: App --> Blogs --> Blog
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // console.log(blog);
  }

  const handleReadingTime = (blog) => {
    const newReadingTime = readingTime + blog.reading_time;
    setReadingTime(newReadingTime);

    handleRemoveBookmark(blog);
  }

  const handleRemoveBookmark = (blog) => {
    const newBookmarks = bookmarks.filter((b) => b.id !== blog.id);
    setBookmarks(newBookmarks);
  }

  return (
    <div className='mx-24 lg:mx-48 mb-12'>
      <Header></Header>
      
      <div className='flex flex-col lg:flex-row gap-14 lg:gap-6'>
        <div className='w-full lg:w-[60%]'>
          <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className='w-full lg:w-[40%]'>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App
