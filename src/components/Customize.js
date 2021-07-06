import React, { Component } from 'react';
import Display from './Design/Display'
import Setting from './Design/Setting';


class Customize extends Component {

    state = {
        tshirtColor: 'black',
        memeImg: ''
    }

    handleTshirtColor = (e) => {
        this.setState({tshirtColor: e.target.id});
    }

    render(){
    return (
            <div className ='grid grid-cols-2 place-items-center h-48'>
                <Display  display={this.state} />
                <Setting 
                color={this.handleTshirtColor}/>
            </div>
        )
    }
}

export default Customize