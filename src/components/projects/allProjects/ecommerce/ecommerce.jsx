import React from 'react'
import Footer from '../../../footer/footer'
import Header from '../../../header/header'
import "./ecommerce.css"
import { useNavigate } from 'react-router-dom'

const Ecommerce = () => {
  const navigate=useNavigate()
  return (
    <>
      <Header></Header>
      <div className='IMGparent'>
        <div className=''><h1>React Ecommerce Application</h1></div><br></br>
        <div className=''>
          <h2>About:</h2>
          <h3 className=''> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It is built using HTML, CSS, JavaScript, React JS and Redux Toolkit, in which users can search items of different categories like Cloths, Electronics, Jewellery etc. according to their interest and can get those items in multiple pages. Also it has the Add to Cart feature so users can add items to their cart and can remove as well.</h3>
          <h2 className=''>Technologies Used:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript, React JS, Redux Toolkit etc.</h3>
          <h2 className=''>GitHub Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://github.com/Soumyashree-Soumyajit-Baral/React-Ecommerce' target="_soumya">https://github.com/Soumyashree-Soumyajit-Baral/React-Ecommerce</a></h3>
          <h2 className=''>Deployement Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://soumya-react-ecommerce-application.netlify.app/' target="_soumya">https://soumya-react-ecommerce-application.netlify.app/</a></h3>
          <p className='btn' onClick={()=>navigate("/projects")}>Go Back</p>

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Ecommerce