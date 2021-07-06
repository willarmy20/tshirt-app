import React from 'react';
import Display from './Design/Display'
import Setting from './Design/Setting';

const Customize = () => {
    return (
        <div className='grid grid-cols-2 place-items-center h-48' >
            <Display />
            <Setting />
        </div>
    )
}

export default Customize