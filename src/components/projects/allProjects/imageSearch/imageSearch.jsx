import React from 'react'
import Footer from '../../../footer/footer'
import Header from '../../../header/header'
import "./imageSearch.css"
import { useNavigate } from 'react-router-dom'

const Imagesearch = () => {
  const navigate=useNavigate()
  return (
    <>
      <Header></Header>
      <div className='IMGparent'>
        <div className=''><h1>Image Search Application</h1></div><br></br>
        <div className=''>
          <h2>About:</h2>
          <h3 className=''> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is an application built using HTML, CSS, JavaScript and React JS.
            In this app users can search any images according to their interest and can store images they like in the book mark list and also they can remove images from their book mark list.</h3>
          <h2 className=''>Technologies Used:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript, React JS,etc.</h3>
          <h2 className=''>GitHub Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://github.com/Soumyashree-Soumyajit-Baral/Image-Search' target="_soumya">https://github.com/Soumyashree-Soumyajit-Baral/Image-Search</a></h3>
          <h2 className=''>Deployement Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://soumya-image-search-application.netlify.app/' target="_soumya">https://soumya-image-search-application.netlify.app/</a></h3>
          <p className='btn' onClick={()=>navigate("/projects")}>Go Back</p>

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Imagesearch