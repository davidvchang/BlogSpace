import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import BlogView from "./pages/BlogView"
import Login from "./pages/Login"
import Register from "./pages/Register"
import BlogsUser from "./pages/BlogsUser"
import AddBlog from "./pages/AddBlog"

function App() {
  const token = localStorage.getItem('token');

  return (
    <main>
      <NavBar/>

      <div className="pt-16">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blog/:id_blog" element={<BlogView/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>


            <Route path="/user/blogs" element={token ? <BlogsUser/> : <Navigate to="/login"/>}/>
            <Route path="/user/add-blog" element={token ? <AddBlog/> : <Navigate to="/login"/>}/>
          </Routes>
        
        </BrowserRouter>
        

      </div>

      <Footer/>
    </main>
  )
}

export default App
