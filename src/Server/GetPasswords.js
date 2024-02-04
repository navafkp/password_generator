import axios from 'axios';

const API = process.env.REACT_APP_BASE_URL;

export const GetPassword = (access) => {
   
    return axios.get(`${API}/pass/getpassword/?access=${access}`).then((response) => {
        
        return response.data;
    }).catch((error) => {
      
        return error;
    });
};
