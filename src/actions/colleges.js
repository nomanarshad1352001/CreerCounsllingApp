import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

import * as api from '../api';

//Action Creaters

export const getColleges = () => async (dispatch) =>{
    try {
        
        const { data } = await api.fetchColleges();
        dispatch({ type: FETCH_ALL ,payload: data});

    } catch (error) {
        
        console.log(error.message);   
    
    }
}

export const createCollege = (college) => async (dispatch) => {
    try {
        const { data } = await api.createCollege(college);

        dispatch ({type: CREATE , payload : data});

    } catch (error) {
        console.log(error.message);
    }
}

//updateCollege

export const updateCollege = (id,college) => async (dispatch) => {
    try {
        const { data } = await api.updateCollege(id,college);
        
        dispatch({type: UPDATE , payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

//deleteCollege

export const deleteCollege = (id) => async (dispatch) => {
    try {
        await api.deleteCollege(id);

        dispatch({type: DELETE , payload : id});
    } catch (error) {
        console.log(error.message);
    }
}