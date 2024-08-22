import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNav.scss'
import { TbLetterM } from 'react-icons/tb'

const MobileNav = () => {
    return (
        <div className='mobilenav-container'>
            <div className='mobilenav-logo'>
            <Link to='/'>
                        <div className='logo-container'>  <TbLetterM /></div>
                        <h3>MODELKOS</h3>
                    </Link>
            </div>
            <div className='mobilenav-links'>
                <div className='contacts-div'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>Our Work</Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>About us</Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>Models</Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>Academys</Link>
                </div>
                <div className='contacts-div'>
                    <Link to='/'>Blog</Link>
                </div>
            </div>
            <div className="mobilenav-auth">

            </div>
        </div>

    )
}

export default MobileNav