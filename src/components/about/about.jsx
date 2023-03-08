import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import myImg from "../../assets/IMG_SOUMYA.jpg"
import "./about.css"

const About = () => {
    return (
        <>
            <Header></Header>
            <div className='Aparent'>
                <div className='imgdiv'><img src={myImg} alt="Profile Image"></img></div>
                <div className='para'>
                    <h2 className='Atext'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A motivated individual who is good at problem solving and programming, with an emphasis on
                        writing clean and maintainable code. Experienced with data structures/algorithms and
                        designing optimal solutions, aspiring to make a career in software engineering with a focus on
                        full stack development.</h2><br></br>
                    <h2 className='skill'>SKILLS:</h2>
                    <h2 className='Askill'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript, React JS, Redux Toolkit, Node JS, Express JS, Python, MySQL etc.</h2>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About