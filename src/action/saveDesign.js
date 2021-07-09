import { SAVE_DESIGN } from './type';
import { v4 as uuidv4 } from 'uuid';

export const saveDesign = (design) => {
    return {
        type: SAVE_DESIGN,
        payload: {
            ...design,
            id: uuidv4()
        }
    }
}