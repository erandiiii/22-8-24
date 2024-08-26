import React from 'react'
import ReactCurvedText from 'react-curved-text';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLogoMedium } from 'react-icons/io5';

const CurvedTxt = () => {
  return (
    <svg className='curved-txt' width={800} height={800} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <ReactCurvedText
        width={500}
        height={500}
        cx={150}
        cy={150}
        rx={100}
        ry={100}
        startOffset={0}
        reversed={false}
        text="-Instagram-Agency-Modeling-Modelkos"
        textProps={{
             style: { 
                fontSize: 30,
                fill:'white'
             } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
        
        
    />
    <FaArrowRightLong className='cruved-arrow'
        x={139}
        y={139}
        height={130}
        width={120}
        fontSize={22}
        color='white'
       
    />
   

</svg>
  )
}

export default CurvedTxt