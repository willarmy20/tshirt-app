import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import '../Design/Display.css'


function Display({display}) {
    // const [canvas, setCanvas] = useState('');
    // const initCanvas = () => (
    //     new fabric.Canvas('canvas', {
    //       height: 800,
    //       width: 800,
    //       backgroundColor: 'pink'
    //     })
    // )
    // useEffect(() => {
    //   setCanvas(initCanvas());
    // }, []);
    
    return (
        <div className='imgtshirt h-58 p-8'>
            <img className='img responsive' src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`} 
            alt="img-tshirt"
            />
            <canvas id="canvas" />
                <div className='memetext'>
                    <img className='memetxt img' src="http://via.placeholder.com/400x300" alt='meme-text' />
                </div>
        </div>
    )
}

export default Display
