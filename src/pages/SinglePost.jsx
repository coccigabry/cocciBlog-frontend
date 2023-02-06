import React, { useEffect, useState, useContext } from 'react'
import Sidebar from '../components/Sidebar'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RiEditLine } from 'react-icons/ri';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { AuthContext } from '../context/context';
import axios from 'axios';
import moment from 'moment'


const SinglePost = () => {
  const [post, setPost] = useState({})

  const { currentUser } = useContext(AuthContext)
  const user = currentUser?.other
  const token = currentUser?.token

  const { id } = useParams()

  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/posts/${id}`)
        setPost(res.data[0])
        window.scrollTo(0, 0)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [id])


  const innerHTMLreplacer = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/posts/${id}`, {
        headers: {
          token: `Bearer ${token}`
        }
      })
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className='single'>
      <div className="content">
        <img src={post.img} alt='' />
        <div className="user">
          {
            post.userImg && <img src={post.userImg} alt='' />
          }
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {post.date ? moment(post.date).fromNow() : 'date not available'}</p>
          </div>
          {
            currentUser && user.username === post.username &&
            <div className="edit">
              <Link to={`/write?edit=${id}`} state={post}>
                <RiEditLine className='icon edit-icon' style={{ backgroundColor: 'lightblue' }} />
              </Link>
              <RiDeleteBin2Line onClick={handleDelete} className='icon delete-icon' style={{ backgroundColor: 'salmon' }} />
            </div>
          }
        </div>
        <div className="text">
          <h1>{post.title}</h1>
          <p>{innerHTMLreplacer(post.desc)}</p>
        </div>
      </div>
      <Sidebar cat={post.cat} />
    </div>
  )
}

export default SinglePost