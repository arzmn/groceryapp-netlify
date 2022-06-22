import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import {Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import {ContactUs} from "./pages/ContactUs"
import {Navbar} from "./components/Navbar"
import {Carousel} from "./components/Carousel"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    <Container>
      <Routes>
      
        {/* <Route path="/" element ={<><Carousel/><Home/></>} /> */}
      
        <Route path="/" element ={<><Carousel/><Store/></>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact-us" element ={<ContactUs/>}/>
       
      </Routes>
      </Container>
      </ShoppingCartProvider>

    </>
  )
}

export default App
