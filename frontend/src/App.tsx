import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"

function App() {

  return (
    <main>
      <NavBar/>

      <div className="pt-16">
        <Home/>

      </div>

      <Footer/>
    </main>
  )
}

export default App
