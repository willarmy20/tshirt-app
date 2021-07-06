import React from 'react';
import '../Design/Display.css'
const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';



function Setting() {
    return (
        <div>
            <h3 className='text-center'>Setting</h3>
            <h2>Change T-shirt Color</h2>
            <div className='tshirt-color'>
                <img src={`${urlImgBase}white.png`} alt='white tshirt' />
                <img src={`${urlImgBase}black.png`}  alt='black tshirt' />
                <img src={`${urlImgBase}grey.png`}  alt='grey tshirt' />
                <img src={`${urlImgBase}blue.png`}  alt='blue tshirt' />
                <img src={`${urlImgBase}red.png`}  alt='red tshirt' />
            </div>
        </div>
    )
}

export default Setting
