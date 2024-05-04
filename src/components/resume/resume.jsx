import React from 'react'
import myResume from "../../assets/Soumyashree_Resume_Image.jpg"
import Resumepdf from "../../assets/Soumyashree Soumyajit Baral.pdf"
import Header from '../header/header'
import Footer from '../footer/footer'
import "./resume.css"
import {MdDownload} from "react-icons/md"


const Resume = () => {
  return (
    <>
    <Header></Header>
    <div className='Resumep'>
        <img src={myResume} alt="Resume"></img>
    </div>
    <div className='Resumed'>
        <a href={Resumepdf} download className="pdf">Download</a>
        <div><MdDownload className='icon'></MdDownload></div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Resume