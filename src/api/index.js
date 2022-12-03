import axios from 'axios';

const url = 'http://localhost:5000/colleges';

export const fetchColleges = () => axios.get(url);

export const createCollege = (newCollege) => axios.post(url,newCollege); 