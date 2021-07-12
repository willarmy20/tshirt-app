import React, { Component } from 'react';
import Display from './Design/Display'
import Setting from './Design/Setting';
import { storage } from '../config/firebaseConfig';
import { saveDesign} from '../action/saveTshirt'
import { connect } from 'react-redux';





class Customize extends Component {
    constructor(props) {
        super(props)
        this.state = {
           tshirtColor: 'black',
           memeImg: 'http://via.placeholder.com/400x300',
           url: '',
           userUrl: ''
           
        }
        this.handleImageUpload = this.handleImageUpload.bind(this)
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
                    console.log('user', this.state.url)
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
            tshirtColor:"https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/" + this.state.tshirtColor,
            memeImg: this.state.memeImg,
            url: this.state.url
        }

        console.log("YO: Im saving", design);

        this.props.saveDesign(design);
        this.props.history.push('/order');
    };



    render() {
    return (
            <div className ='grid grid-cols-2 place-items-center h-48'>
                <Display  shirtImage={this.state.memeImg} display={this.state}  />
                <Setting 
                color={this.handleTshirtColor}
                uploadImage={this.handleImageUpload}
                handleSaveDesign={this.handleSaveDesign}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        saveDesign: (design) => dispatch(saveDesign(design))
    }
}


export default connect(null, mapDispatchToProps)(Customize)