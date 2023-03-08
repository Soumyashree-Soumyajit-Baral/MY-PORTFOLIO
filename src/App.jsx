import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/home/home'
import Contact from './components/contact/contact'
import About from './components/about/about'
import Resume from './components/resume/resume'
import Project from './components/projects/project'
import Imagesearch from './components/projects/allProjects/imageSearch/imageSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Header></Header>
      <div className='body'>
        <h2><span>W</span>elcome</h2>
        <h3><span>T</span>o</h3>
        <h1><span>M</span>y <span>W</span>ebsite.</h1><br></br>
        <h4>* I appreciate the time you took to visit my website and I hope you will have a greate experience. *</h4>
        <h4>* Thank You *</h4>
      </div>
      

      <Footer></Footer> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/projects" element={<Project></Project>}></Route>
          <Route path="/imgsearch" element={<Imagesearch></Imagesearch>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
