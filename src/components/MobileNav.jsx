import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNav.scss'
import { TbLetterM } from 'react-icons/tb'
import { IoMdArrowDropright } from 'react-icons/io'

const MobileNav = ({ isVisible, onClose }) => {
    
    return (
        <nav className={`mobile-nav ${isVisible ? 'visible' : ''}`}>
        
            <div className='mobilenav-logo'>
                <Link to='/'>
                    <div className='logo-container'>  <TbLetterM /></div>
                    <h3>MODELKOS</h3>
                </Link>
                <div className="button-div">
                <button className="close-btn" >×</button>
                </div>
            </div>
            <div className='mobilenav-links'>
                <div className='contacts-div'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>
                    Our Work
                    <IoMdArrowDropright />

                    </Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>
                    About us
                    <IoMdArrowDropright />
                    </Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>Models</Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>
                        Academys
                        <IoMdArrowDropright
                        /></Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>Blog</Link>
                </div>
            </div>
            <div className="mobilenav-auth">
                <div className='auths-links'>
                    <div className='aut-link'>
                        <Link>Apply now</Link>
                    </div>
                    <div className='aut-link'>
                        <Link>Contacts</Link>
                    </div>
                    <div className='aut-link'>
                        <Link>Support</Link>
                    </div>
                    <div className='aut-link'>
                        <Link>Send Feedback</Link>
                    </div>
                    <div className='aut-link'>
                        <Link>FAQs</Link>
                    </div>
                    <div className='aut-link'>
                        <Link>Contact us</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default MobileNav