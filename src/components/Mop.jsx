import React from 'react'

import firstImage from '../assets/bershkalogo.png.png'
import secondImage from '../assets/bohologo.png.png'
import fifthImage from '../assets/fashionnovalogo.png.png'
import sixthImage from '../assets/mangologo.png.png'
import seventhImage from '../assets/paradalogo.png.png'
import './Mop.scss'

const Mop = () => {
    return (
        <div className='mop-div'>
            <div><h3>OUR PARTNERS</h3></div>
            <div className="our-partners">
                <div className='logo-container'>
                    <div className='fotoja' style={{ content: `url(${firstImage})` }}></div>
                </div>
                <div className='logo-container'>
                    <div className='fotoja' style={{ content: `url(${secondImage})` }}></div>
                </div>
                <div className='logo-container'>
                    <div className='fotoja' style={{ content: `url(${fifthImage})` }}></div>
                </div>
                <div className='logo-container'>
                    <div className='fotoja' style={{ content: `url(${firstImage})` }}></div>
                </div >
                <div className='logo-container'>
                    <div className='fotoja' style={{ content: `url(${fifthImage})` }}></div>
                </div>
                <div className='logo-container'>
                    <div className='fotoja' style={{ content: `url(${sixthImage})` }}></div>
                </div>
                <div className='logo-container'>
                    <div className='fotoja' style={{ content: `url(${seventhImage})` }}></div>
                </div>
            </div>
           <div><button className='butonii'>See all partners</button></div> 
        </div>
    )
}

export default Mop