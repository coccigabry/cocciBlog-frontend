import React from 'react'
import posts from '../data'


const Sidebar = () => {

    const renderPosts = posts.map(post => {
        const { id, title, img } = post
        return (
            <div className='post' key={id}>
                <img src={img} alt='' />
                <h2>{title}</h2>
                <button>Read more</button>
            </div>
        )
    })

    return (
        <div className='sidebar'>
            <h1>Other posts you may like</h1>
            {renderPosts}
        </div>
    )
}

export default Sidebar