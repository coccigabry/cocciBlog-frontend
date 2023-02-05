import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'
import WritePosts from './pages/WritePosts'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.scss'


function App() {

  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route exact path="/" element={<Home />} />

              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/write" element={<WritePosts />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
