import { useEffect, useState } from 'react'
import Blog from './Blog';

function Blogs() {

    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }
    , [])

  return (
    <div>
        {
          Blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
    </div>
  )
}

export default Blogs
