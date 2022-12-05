import axios from 'axios';

const url = 'http://localhost:5000/colleges';

export const fetchColleges = () => axios.get(url);

export const createCollege = (newCollege) => axios.post(url,newCollege); 

export const updateCollege = (id, updatedPost) => axios.patch(`${url}/${id}`,updatedPost);

export const deleteCollege = (id) => axios.delete(`${url}/${id}`);