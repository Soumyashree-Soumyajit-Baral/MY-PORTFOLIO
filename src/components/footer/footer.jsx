import React from 'react'
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import {AiFillGithub} from "react-icons/ai"
import {RiContactsFill} from "react-icons/ri"
import {IoIosContact,IoMdContact} from "react-icons/io"
import "./footer.css"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate()
  return (
    <>
    <footer>
        <div className='sm'>
            <ul className='sm-desktop'>
                <li>
                    <a href="https://www.linkedin.com/in/Soumyashree-Soumyajit-Baral/" target="_soumya">
                        <FaLinkedin className='white'></FaLinkedin>
                        
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Soumyashree-Soumyajit-Baral" target="_soumya">
                    {/* <AiFillGithub></AiFillGithub> */}
                    <FaGithub className='white'></FaGithub>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={()=>navigate("/contact")}>
                    {/* <AiFillGithub></AiFillGithub> */}
                    {/* <IoIosContact></IoIosContact> */}
                    {/* <IoMdContact></IoMdContact> */}
                    <RiContactsFill className='white'></RiContactsFill>
                    </a>
                </li>
            </ul>
        </div>

    </footer>
    
    </>
  )
}

export default Footer