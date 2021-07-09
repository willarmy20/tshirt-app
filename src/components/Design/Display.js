import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import '../Design/Display.css'


function Display({ display, shirtImage }) {
    
    return (
        <div id='my-node' className='imgtshirt h-58 p-8'>
            <img className='img responsive' src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`} 
            alt="img-tshirt"
            />
            <canvas id="canvas" />
                <div className='memetext'>
                    <img className='memetxt img' src={`${display.url}`|| 'http://via.placeholder.com/400x300'} alt='meme-text' />
                </div>
        </div>
    )
}

export default Display
