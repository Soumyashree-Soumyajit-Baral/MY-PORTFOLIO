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
                    <h2 className='Atext'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node.js developer with a robust background in software development, blending practical
internship training with a focus on scalable backend solutions and a Proven track record of
delivering high-quality, tailored software solutions.</h2><br></br>
                    <h2 className='skill'>SKILLS:</h2>
                    <h2 className='Askill'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, JavaScript, React JS, Node JS, Express JS, Python, MySQL, MongoDB, Redis, GIT, GITHUB, Bitbucket, TypeScript, Rest API, GRPC, RabbitMQ, Docker, Kubernetes, Postman.</h2>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About