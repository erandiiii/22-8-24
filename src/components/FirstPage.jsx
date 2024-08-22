import React from 'react'
import { Link } from 'react-router-dom'
import './FirstPage.scss'
import { TbLetterM } from 'react-icons/tb'
import { IoMdArrowDropright } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import image1 from '../assets/secondpic.jpg'
import image2 from '../assets/thirdpic.jpg'
import CurvedTxt from './CurvedTxt'

const FirstPage = () => {
    return (
        <div className='fp-container'>
            <div className='background'></div>
            
            <div className='left-div'>
                <div className='heading-div'>
                    <h2 className='first-heading'>HIRE A MODEL OR</h2>
                    <h2 className='second-heading'>BECOME ONE</h2>
                </div>
                <div className='input-div'>
                    <div className='input-holder' >
                        <div className='input-icon'>
                            <TbLetterM />
                        </div>
                        <input type='text' placeholder='Female Models'>
                        </input>
                        <div className='input-arrow'>
                            <IoMdArrowDropright />
                        </div>
                    </div>
                    <div className='input-holder2'>
                        <div className='input-icon2'>
                            <div><CiLocationOn /></div>
                        </div>
                        <input id='inputi' type='text' placeholder='Find location' >
                        </input>
                        <div className='input-arrow2'>
                            <IoMdArrowDropright />
                        </div>
                    </div>
                    <button type='submit'>Find Model</button>
                </div>
            </div>

            <div className='right-div'>
                <Link className='link-div'>
                <CurvedTxt/>
                </Link>
                <div className="image-holder">
                <div className='imgja' style={{ content: `url(${image1})` }}></div>
                </div>
                
                <div className="image-holder2">
                <div className='imgja2' style={{ content: `url(${image2})` }}></div>
                </div>

            </div>
        </div>
    )
}

export default FirstPage