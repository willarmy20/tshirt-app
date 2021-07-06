import React from 'react';
import {Link} from 'react-router-dom';

const VinoBlak = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <iframe id="d341be48-d3c1-43f6-a6ad-b2e2a76cd57c" src="https://www.vectary.com/viewer/v1/?model=d341be48-d3c1-43f6-a6ad-b2e2a76cd57c&env=studio3&turntable=-4&showInteractionPrompt=0" frameborder="0" width="100%" height="480"></iframe>
            <Link className=" py-2 px-3  h-400 w-900 justify-center bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce" to='/customize'>Customize Here</Link>
        </div>
    )
}

export default VinoBlak
