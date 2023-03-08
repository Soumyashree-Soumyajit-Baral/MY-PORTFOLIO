import React from 'react'
import Footer from '../../../footer/footer'
import Header from '../../../header/header'
import "./calculator.css"
import { useNavigate } from 'react-router-dom'

const Calculator = () => {
  const navigate=useNavigate()
  return (
    <>
      <Header></Header>
      <div className='IMGparent'>
        <div className=''><h1>Arithmatic Calculator</h1></div><br></br>
        <div className=''>
          <h2>About:</h2>
          <h3 className=''> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This application is built using HTML, CSS, JavaScript and React JS by which users can perform Arithmetic operations like Addition, Subtraction, Multiplication and Division. So by using this Calculator complex calculation will be done very easily.</h3>
          <h2 className=''>Technologies Used:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript, React JS,etc.</h3>
          <h2 className=''>GitHub Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://github.com/Soumyashree-Soumyajit-Baral/calculator' target="_soumya">https://github.com/Soumyashree-Soumyajit-Baral/calculator</a></h3>
          <h2 className=''>Deployement Link:</h2>
          <h3 className=''>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://calculator-soumya.netlify.app/' target="_soumya">https://calculator-soumya.netlify.app/</a></h3>
          <p className='btn' onClick={()=>navigate("/projects")}>Go Back</p>

        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Calculator