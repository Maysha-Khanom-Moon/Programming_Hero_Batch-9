import propTypes from 'prop-types'

import { useEffect, useState } from 'react'
import Blog from './Blog';

function Blogs({handleBookmark, handleReadingTime}) {

    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }
    , [])

  return (
    <div>
        <div className='flex flex-col gap-6'>
          {
            Blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blog>)
          }
        </div>
    </div>
  )
}

Blogs.propTypes = {
  handleBookmark: propTypes.func.isRequired
}

export default Blogs