import { SAVE_DESIGN } from '../../action/type'

const initialState = {
    order: []
}

const designReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_DESIGN:
            // return addOrder(acton.payload, state);
            return {
                ...state,
                order: [...state.order, action.payload]
            }
            
        default: return state
    }
}

export default designReducer;