const addorder = (order, state) =>{
    const newOrders = [...state.orders, order];
    return{
        ...state,
        order:newOrders
    }
}


const designReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ORDER':
            return addOrder(acton.payload, state);
}

export default designReducer