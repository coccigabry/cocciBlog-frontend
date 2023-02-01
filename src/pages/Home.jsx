import React from 'react'
import { Link } from 'react-router-dom'
import posts from '../data.js'


const Home = () => {

  const renderPosts = posts.map(post => {
    const { id, title, desc, img } = post
    return (
      <div className='post' key={id}>
        <div className='img'>
          <img src={img} alt='' />
        </div>
        <div className='content'>
          <Link className='link' to={`/post/${id}`}>
            <h1>{title}</h1>
          </Link>
            <p>{desc}</p>
            <button>Read more</button>
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