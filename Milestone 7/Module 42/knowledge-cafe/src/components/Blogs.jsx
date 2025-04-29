import { useEffect, useState } from 'react'

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
        <h1>Blogs: {Blogs.length}</h1>
    </div>
  )
}

export default Blogs
