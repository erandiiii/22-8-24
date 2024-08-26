import React from 'react'
import ReactCurvedText from 'react-curved-text';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLogoMedium } from 'react-icons/io5';

const CurvedTxt1 = () => {
  return (
    <svg className='curved-txt' width={300} height={300} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <ReactCurvedText
        width={250}
        height={250}
        cx={150}
        cy={150}
        rx={100}
        ry={100}
        startOffset={0}
        reversed={false}
        text="-Instagram-Agency-Modeling-Modelkos"
        textProps={{
             style: { 
                fontSize: 38,
                fill:'black'
             } }}
        textPathProps={null}
        tspanProps={null}
        ellipseProps={null}
        svgProps={null}
        
        
    />
    <FaArrowRightLong className='cruved-arrow'
        x={138}
        y={138}
        height={150}
        width={120}
        fontSize={30}
        color='white'
       
    />
   

</svg>
  )
}

export default CurvedTxt1