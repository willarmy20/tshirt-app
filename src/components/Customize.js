import React, { Component } from 'react';
import Display from './Design/Display'
import Setting from './Design/Setting';
import { storage } from '../config/firebaseConfig';
import { saveDesign} from '../action/saveDesign'
import { connect } from 'react-redux';




class Customize extends Component {
    constructor(props) {
        super(props)
        this.state = {
           tshirtColor: 'black',
           memeImg: 'http://via.placeholder.com/400x300',
           url: ''
        }
        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.handleSaveDesign = this.handleSaveDesign.bind(this)
    }

    handleTshirtColor = (e) => {
        this.setState({tshirtColor: e.target.id});
        localStorage.setItem('tshirtColor',e.target.id)
    }

    handleImageUpload = (e) => {
        // this.setState({ memeImg: URL.createObjectURL(e.target.files[0]) })
        // localStorage.setItem('uploadImage',(e.target.files[0]) )

        if(e.target.files[0]){
            console.log('e.target', e.target);
            const image = (e.target.files[0]);
            console.log(image)
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url =>{
                    this.setState({url});
                })
            }
            )
        }
    }

    handleSaveDesign = (e) =>{
        // if(e.target.id === 'saveDesign'){
        //     this.props.saveDesign(this.state)
        // }

        const design = {
            tshirtColor: this.state.tshirtColor,
            memeImg: this.state.memeImg,
            url: this.state.url
        }

        console.log("YO: ", design);

        this.props.saveDesign(design);
    }

    render() {
        return (
            <>
                <div className ='grid grid-cols-2 place-items-center h-48'>
                    <Display  shirtImage={this.state.memeImg} display={this.state}  />
                    <Setting 
                    color={this.handleTshirtColor}
                    uploadImage={this.handleImageUpload}
                    // saveDesign={this.handleSaveDesign}
                    />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
                <button id='handleSaveDesign' onClick={this.handleSaveDesign} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded jusify-content-center'> <a href='/order'>Save</a> </button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        saveDesign: (design) => dispatch(saveDesign(design))
    }
}

export default connect(null, mapDispatchToProps)(Customize)