import React from 'react'
import CurvedTxt from './CurvedTxt'
import image3 from '../assets/first.jpg'
import image4 from '../assets/second.jpg'
import './SecondPage.scss'
import CurvedTxt1 from './CurvedTxt1'


const SecondPage = () => {
  return (
    <div className='second-page'>
        <div className="sp-container">
            <div className='sp-left'>
                <h1>ABOUT US</h1>
                <p>ModeKos is the leading interactive fashion database connecting the
                    world to models, creative talent, magazines, and luxury and
                    commercial brands. With 1.1 million unique visits per month, the site
                    stands as an essential tool to attribute credit and source new talent.
                </p>
            </div>
            <div className='sp-right'>
               
                <div className="first-card">
                    <div className='first-image' style={{ content: `url(${image3})`, 
                    width:'90%'
                }}></div>
                    <div className="first-info">
                    <h2>DEA GASHI</h2>
                    <ul>
                        <a href="">Model</a>
                        <li>Photography</li>
                        <li>Artist</li>
                    </ul>
                    <h3>19 MAY 2022</h3>
                    </div>
                </div>
                <div className="second-card">
                <div className='second-image' style={{ content: `url(${image4})`,
             width:'90%' }}></div>
                <div className="second-info">
                    <h2>DEA GASHI</h2>
                    <ul>
                        <a href="">Model</a>
                        <li>Photography</li>
                        <li>Artist</li>
                    </ul>
                    <h3>19 MAY 2022</h3>
                </div>
                </div>
                <CurvedTxt1  className='crvd-txt'/>
            </div>
        </div>
    </div>
  )
}

export default SecondPage