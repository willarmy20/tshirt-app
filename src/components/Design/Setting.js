import React from 'react';
import '../Design/Display.css'
const urlImgBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';



function Setting({color}) {
    return (
        <div>
            <h3 className='text-center'>Setting</h3>
            <h2>Change T-shirt Color</h2>
            <div className='tshirt-color'>
                <img onClick={color} src={`${urlImgBase}white.png`} alt='white tshirt' id='white' />
                <img onClick={color} src={`${urlImgBase}black.png`}  alt='black tshirt'id='black'  />
                <img onClick={color} src={`${urlImgBase}grey.png`}  alt='grey tshirt'  id='grey'/>
                <img onClick={color} src={`${urlImgBase}blue.png`}  alt='blue tshirt'id='blue' />
                <img onClick={color} src={`${urlImgBase}red.png`}  alt='red tshirt' id='red' />
            </div>
            <hr />
            <h4>Upload Image</h4>
            <div className='form-group' >
                <input type='file' className='form-controle-file mb-2' />
            </div>
            <hr />
            <button className='btn btn-primary btn-sm p-2'>Save</button>
        </div>
    )
}

export default Setting
