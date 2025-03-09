import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import BlogView from "./pages/BlogView"

function App() {

  return (
    <main>
      <NavBar/>

      <div className="pt-16">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blog" element={<BlogView/>}/>
          </Routes>
        
        </BrowserRouter>
        

      </div>

      <Footer/>
    </main>
  )
}

export default App
