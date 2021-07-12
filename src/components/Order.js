import {useSelector}  from 'react-redux'
import './Design/Display.css'


const Order = () => {
    const order = useSelector(state => state.design.order)
    return <div>
        <h1>Order Page</h1>

        <div>

        {order.map((tshirtorder,index) =>{
            return  (
                <div className='orderShirt'>
                    <h2>Order {index}: </h2>
                    <img src={tshirtorder.tshirtColor}></img>
                    <img className='shirtDesign' src={tshirtorder.url}></img>
                    <div className='shirtDesign'></div>
                    <div>
                        <button className='bg-blue-500'><a href='/payment'>Checkout</a></button>
                    </div>
                </div>
                
            );
            
        })}
        </div>
        
    </div>
}

export default Order