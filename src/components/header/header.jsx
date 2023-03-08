import React from 'react'
import "./header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate()
  return (
    <>
        <header className='main-nav'>
            <div className='logo'>
                <h2>
                    <span className='fl'>S</span>OUMYASHREE
                    <span className='fl'>S</span>OUMYAJIT
                    <span className='fl'>B</span>ARAL
                </h2>

            </div>
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='#' onClick={()=>navigate("/")}>Home</a>
                    </li>
                    <li>
                        <a href='#' onClick={()=>navigate("/about")}>about</a>
                    </li>
                    <li>
                        <a href='#' onClick={()=>navigate("/projects")}>projects</a>
                    </li>
                    <li>
                        <a href='#' onClick={()=>navigate("/contact")}>contact</a>
                    </li>
                    <li>
                        <a href='#' onClick={()=>navigate("/resume")}>resume</a>
                    </li>
                </ul>
            </div>

        </header>
    
    </>
  )
}

export default Header