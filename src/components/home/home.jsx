import { useState } from 'react'
import './home.css'
import Header from '../header/header'
import Footer from '../footer/footer'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <div className='body'>
        <h2><span>W</span>elcome</h2>
        <h3><span>T</span>o</h3>
        <h1><span>M</span>y <span>P</span>ortfolio!</h1><br></br>
        <h4>* I'm thrilled to have you here, exploring my creative journey and professional endeavors. Within these digital walls, you'll find a curated collection of my work, reflecting my passion, skills, and dedication to excellence. *</h4>
        <h4>* Thank You *</h4>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default Home;
