import axios from "axios";
const API = process.env.REACT_APP_BASE_URL;

// axios call for user login
export const UserLogin = (email, password) => {
    
    const data = {
        email: email,
        password: password
    };

    const headers = {
        'Content-Type': 'application/json', 
    };
   
    return axios.post(`${API}/user/login/`, data, { headers: headers })
        .then((response) => {
         
            const access = response.data.access;
            
            const authdata = { 'access': access };
            return authdata;
        })
        .catch((error) => {
            console.error('Authentication Failed:', error);
            return { 'error': 'Authentication Failed' };
        });
};
