import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

export default (colleges = [] ,action) =>{
    switch (action.type) {
        case DELETE:
            return colleges.filter((college)=> college._id !== action.payload)
        case UPDATE:
            return colleges.map((college)=>college._id===action.payload._id ? action.payload: college);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...colleges, action.payload];
        default:
            return colleges;
    }
}