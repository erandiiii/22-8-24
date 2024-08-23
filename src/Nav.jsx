import React from 'react'
import './Nav.scss'
import { TbLetterM } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { useState } from 'react'
import NavMegamenu from './components/NavMegamenu'
import MobileNav from './components/MobileNav'

const Nav = () => {

    const [menuOpen, setMenuOpen]= useState(false);
    const [menuOpen1, setMenuOpen1]= useState(false);
    
    
   
    return (
        <div className='nav'>
            <div className="nav-content">
                
                <div className="nav-logo">
                    <Link to='/'>
                        <div className='logo-container'>  <TbLetterM /></div>
                        <h3>MODELKOS</h3>
                    </Link>
                </div>
                <div className='menu' onClick={()=>{
                    setMenuOpen(!menuOpen)
                    setMenuOpen1(!menuOpen1)
                    
               
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
                <div id='mb-nav' className={menuOpen1 ? "open" : ""}><MobileNav/></div>
                <div id='nav-menu' className={menuOpen ? "open" : ""}>
                    <div className="nav-link">
                        <Link to='/'>
                            Home
                        </Link>
                        
                    </div>
                    <div className="nav-link">
                        <Link to='/'>
                            Our Work
                            <IoMdArrowDropright />
                        </Link>
                        <NavMegamenu/>
                    </div>
                    <div className="nav-link">
                        <Link to='/'>
                            About us
                            <IoMdArrowDropright />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='/'>
                            Models
                            <IoMdArrowDropright />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='/'>
                            Academy
                            <IoMdArrowDropright />
                        </Link>
                    </div>
                    <div className="nav-link">
                        <Link to='/'>Blog</Link>
                    </div>
                </div>
                
                <div className="nav-auth">
                    <div className="auth-link">
                        <Link to='/'>Apply now</Link>
                    </div>
                    <div className="auth-link1">
                        <div className='contacts-div'>
                            <Link to='/'>Contacts</Link>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Nav