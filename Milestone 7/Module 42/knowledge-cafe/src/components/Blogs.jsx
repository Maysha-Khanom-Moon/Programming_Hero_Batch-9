import React from 'react'
import { useEffect, useState } from 'react'

function Blogs() {

    const [blogs, setBlogs] = React.useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }
    , [])

  return (
    <div>
      
    </div>
  )
}

export default Blogs
