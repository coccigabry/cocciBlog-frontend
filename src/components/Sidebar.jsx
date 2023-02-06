import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Sidebar = ({ cat }) => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/posts/?cat=${cat}`)
                setPosts(res.data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [cat])

    const innerHTMLreplacer = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.body.textContent
      }

    const renderPosts = posts.map(post => {
        const { id, title, desc, img } = post
        return (
            <div className='post' key={id}>
                <img src={img.charAt(0) === 'h' ? img : `../../uploads/${img}`} alt='' />
                <h2>{title}</h2>
                <p>{innerHTMLreplacer(desc).substring(0, 150)}...</p>
                <Link className='link' to={`/post/${id}`}>
                    <button>Read more</button>
                </Link>
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