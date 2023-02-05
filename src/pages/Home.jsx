import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [cat])

  const renderPosts = posts.map(post => {
    const { id, title, desc, img } = post
    return (
      <div className='post' key={id}>
        <div className='img'>
          <img src={img} alt='' />
        </div>
        <div className='content'>
          <h1>{title}</h1>
          <p>{desc}</p>
          <Link className='link' to={`/post/${id}`}>
            <button>Read more</button>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div className='home'>
      <div className='posts'>
        {renderPosts}
      </div>
    </div>
  )
}

export default Home