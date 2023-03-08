import React from 'react'
import Footer from '../../../footer/footer'
import Header from '../../../header/header'
import "./bookstore.css"
import { useNavigate } from 'react-router-dom'

const Bookstore = () => {
  const navigate=useNavigate()
  return (
    <>
      <Header></Header>
      <div className='IMGparent'>
        <div className=''><h1>Library Book Store Application</h1></div><br></br>
        <div className=''>
          <h2>About:</h2>
          <h3 className=''> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is a Full Stack Application which can be used to store different books. In this application, users need to sign-up first, then log-in and only after log-in successfully users can be able to store different books of different Subject, Author, Publication etc. So this application can be used in Libraries, Bookshops etc.</h3>
          <h2 className=''>Technologies Used:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript, React JS, Redux Toolkit, Node JS, Express JS and MongoDB etc.</h3>
          <h2 className=''>GitHub Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://github.com/Soumyashree-Soumyajit-Baral/Book-List-Full-Stack' target="_soumya">https://github.com/Soumyashree-Soumyajit-Baral/Book-List-Full-Stack</a></h3>
          <h2 className=''>Deployement Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://soumya-book-store-application.netlify.app/' target="_soumya">https://soumya-book-store-application.netlify.app/</a></h3>
          <p className='btn' onClick={()=>navigate("/projects")}>Go Back</p>

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Bookstore