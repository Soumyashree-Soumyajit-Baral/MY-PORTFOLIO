import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "./project.css"
import { useNavigate } from 'react-router-dom'

const Project = () => {
  const navigate=useNavigate()
  return (
    <>
    <Header></Header>
    <div className='parentP'>
        <div className='box1 box'> <h1 onClick={()=>navigate("/imgsearch")}>Library Book Store Application</h1></div>
        <div className='box1 box'> <h1>Tasks Manager Application</h1></div>
        <div className='box1 box'> <h1>Instaclone Application</h1></div>
        <div className='box1 box'> <h1>React Ecommerce Application</h1></div>
        <div className='box1 box'> <h1 onClick={()=>navigate("/imgsearch")}>Image Search Application</h1></div>
        <div className='box1 box'> <h1 onClick={()=>navigate("/imgsearch")}>Arithmatic Calculator</h1></div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Project