import React from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const WritePosts = () => {
  const [values, setValues] = React.useState({ title: '', desc: '', cat: '' });
  const [img, setImg] = React.useState(null);


  const handleValues = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', img)
      const res = await axios.post('http://localhost:4000/api/upload', formData)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    upload()
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
            value={values.desc}
            onChange={handleValues}
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
          <input
            style={{ display: 'none' }}
            type='file' 
            id='file'
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label className='file' htmlFor='file'>Upload Image</label>
          {img &&
            <span>Image uploaded</span>
          }
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