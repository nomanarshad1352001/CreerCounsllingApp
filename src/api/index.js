import axios from 'axios';

// const url = 'http://localhost:5000';
const url = 'https://backend-beryl-omega.vercel.app';

export const fetchColleges = () => axios.get(`${url}/colleges`);

export const createCollege = (newCollege) => axios.post(`${url}/colleges`,newCollege); 

export const updateCollege = (id, updatedCollege) => axios.patch(`${url}/colleges/${id}`,updatedCollege);

export const deleteCollege = (id) => axios.delete(`${url}/colleges/${id}`);

// degrees api calls

export const fetchDegrees = () => axios.get(`${url}/degrees`);

export const createDegree = (newDegree) => axios.post(`${url}/degrees`,newDegree); 

export const updateDegree = (id, updatedDegree) => axios.patch(`${url}/degrees/${id}`,updatedDegree);

export const deleteDegree = (id) => axios.delete(`${url}/degrees/${id}`);
