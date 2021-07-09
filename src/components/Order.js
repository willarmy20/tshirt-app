import { createContext } from 'react' 

const Order = createContext({
    order: [],
    addOrders: order => {}
})

export default Order