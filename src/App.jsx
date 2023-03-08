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
import Calculator from './components/projects/allProjects/calculator/calculator'
import Ecommerce from './components/projects/allProjects/ecommerce/ecommerce'
import Instaclone from './components/projects/allProjects/instaclone/instaclone'
import Tasks from './components/projects/allProjects/tasks/tasks'
import Bookstore from './components/projects/allProjects/bookstore/bookstore'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route path="/projects" element={<Project></Project>}></Route>
          <Route path="/imgsearch" element={<Imagesearch></Imagesearch>}></Route>
          <Route path="/calculator" element={<Calculator></Calculator>}></Route>
          <Route path="/ecommerce" element={<Ecommerce></Ecommerce>}></Route>
          <Route path="/bookstore" element={<Bookstore></Bookstore>}></Route>
          <Route path="/instaclone" element={<Instaclone></Instaclone>}></Route>
          <Route path="/tasks" element={<Tasks></Tasks>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
