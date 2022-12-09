import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

import * as api from '../api';


//Get all degrees from database
export const getDegrees = () => async (dispatch) =>{
    try {
        
        const { data } = await api.fetchDegrees();

        dispatch({ type: FETCH_ALL ,payload: data});

    } catch (error) {
        
        console.log(error.message);   
    
    }
}

//Creat A single Degree 

export const createDegree = (degree) => async (dispatch) => {
    try {

        const { data } = await api.createDegree(degree);

        dispatch ({type: CREATE , payload : data});

    } catch (error) {

        console.log(error.message);

    }
}

//updateDegree

export const updateDegree = (id,degree) => async (dispatch) => {
    try {
        
        const { data } = await api.updateDegree(id,degree);
        
        dispatch({type: UPDATE , payload : data});

    } catch (error) {
        
        console.log(error.message);
    
    }
}

//deleteCollege

export const deleteDegree = (id) => async (dispatch) => {
    try {
        await api.deleteDegree(id);

        dispatch({type: DELETE , payload : id});
    
    } catch (error) {
    
        console.log(error.message);
    
    }
}