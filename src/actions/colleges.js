import * as api from '../api';

//Action Creaters

export const getColleges = () => async (dispatch) =>{
    try {
        
        const { data } = await api.fetchColleges();
        dispatch({ type: 'FETCH_ALL',payload: data});

    } catch (error) {
        
        console.log(error.message);   
    
    }
}

export const createCollege = (college) => async (dispatch) => {
    try {
        const { data } = await api.createCollege(college);

        dispatch ({type: 'CREATE', payload : data});

    } catch (error) {
        console.log(error.message);
    }
}