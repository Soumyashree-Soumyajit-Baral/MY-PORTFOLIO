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
        <h1><span>M</span>y <span>W</span>ebsite.</h1><br></br>
        <h4>* I appreciate the time you took to visit my website and I hope you will have a greate experience. *</h4>
        <h4>* Thank You *</h4>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default Home;
