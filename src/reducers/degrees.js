import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (degrees = [] ,action) =>{
    switch (action.type) {
        case DELETE:
            return degrees.filter((degree)=> degree._id !== action.payload)
        case UPDATE:
            return degrees.map((degree)=>degree._id===action.payload._id ? action.payload: degree);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...degrees, action.payload];
        default:
            return degrees;
    }
}