import React, { useContext, useState } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/context';


const WritePosts = () => {
  const { currentUser } = useContext(AuthContext)
  const token = currentUser.token

  const state = useLocation().state

  const navigate = useNavigate()

  const [values, setValues] = useState({
    title: state?.title || '',
    img: {},
    cat: state?.cat || ''
  });
  const [desc, setDesc] = useState(state?.desc || '');


  const handleValues = (e) => {
    if (e.target.name === 'img') {
      setValues({ ...values, img: e.target.files[0] })
    } else {
      const name = e.target.name
      const value = e.target.value
      setValues({ ...values, [name]: value })
    }
  }

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', values.img)
      const res = await axios.post('http://localhost:4000/api/upload', formData)
      return res.data
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const imgUrl = await upload()
    try {
      if (state) {
        const res = await axios.put(`http://localhost:4000/api/posts/${state.id}`, {
          title: values.title,
          desc,
          img: values.img ? imgUrl : '',
          cat: values.cat
        })
        console.log(res.data)
      } else {
        const res = await axios.post(
          `http://localhost:4000/api/posts`,
          {
            title: values.title,
            desc,
            img: values.img ? imgUrl : '',
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm"),
            cat: values.cat
          },
          {
            headers: {
              token: `Bearer ${token}`
            }
          }
        )
        console.log(res.data)
      }
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className='add'>
      <div className="content">
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={values.title}
          onChange={handleValues}
        />
        <div className="editor-cnt">
          <ReactQuill
            className='editor'
            theme="snow"
            name='desc'
            value={desc}
            onChange={setDesc}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <div className="img-uploader">
            <input
              style={{ display: 'none' }}
              type='file'
              id='file'
              name='img'
              onChange={handleValues}
            />
            <label className='file' htmlFor='file'>Upload Image</label>
            {
              values.img.name &&
              <span>
                {values.img.name}
                <RiDeleteBin2Line
                  className="uploader-icon"
                  onClick={() => setValues({ ...values, img: {} })}
                  title='remove image'
                />
              </span>
            }
          </div>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat-cnt">
            <input
              type="radio"
              checked={values.cat === 'art'}
              name='cat'
              value='art'
              id='art'
              onChange={handleValues}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat-cnt">
            <input
              type="radio"
              checked={values.cat === 'tech'}
              name='cat'
              value='tech'
              id='tech'
              onChange={handleValues}
            />
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="cat-cnt">
            <input
              type="radio"
              checked={values.cat === 'design'}
              name='cat'
              value='design'
              id='design'
              onChange={handleValues}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat-cnt">
            <input
              type="radio"
              checked={values.cat === 'food'}
              name='cat'
              value='food'
              id='food'
              onChange={handleValues}
            />
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat-cnt">
            <input
              type="radio"
              checked={values.cat === 'travel'}
              name='cat'
              value='travel'
              id='travel'
              onChange={handleValues}
            />
            <label htmlFor="travel">Travel</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WritePosts