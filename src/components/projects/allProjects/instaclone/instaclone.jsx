import React from 'react'
import Footer from '../../../footer/footer'
import Header from '../../../header/header'
import "./instaclone.css"
import { useNavigate } from 'react-router-dom'

const Instaclone = () => {
  const navigate=useNavigate()
  return (
    <>
      <Header></Header>
      <div className='instaparent'>
        <div className=''><h1>InstaClone Application</h1></div><br></br>
        <div className=''>
          <h2>About:</h2>
          <h3 className=''> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is a Full Stack Application where users can store their images and can view later as their memories. So using this application users can collect their memories.</h3>
          <h2 className=''>Technologies Used:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript, React JS, Node JS, Express JS and MongoDB.</h3>
          <h2 className=''>GitHub Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://github.com/Soumyashree-Soumyajit-Baral/Insta-Clone' target="_soumya">https://github.com/Soumyashree-Soumyajit-Baral/Insta-Clone</a></h3>
          <h2 className=''>Deployement Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://soumya-instaclone-application.netlify.app/' target="_soumya">https://soumya-instaclone-application.netlify.app/</a></h3>
          <p className='btn' onClick={()=>navigate("/projects")}>Go Back</p>

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Instaclone