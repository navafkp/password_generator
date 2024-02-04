import axios from 'axios'
const API = process.env.REACT_APP_BASE_URL;

// axios call for registering new user
export const UserRegister = (
    email, password,
    
) => {
    const newuserData = {
       email,
        password
    };
    const headers = { 'Content-Type': 'application/json' };
    return axios.post(`${API}/user/register/`,
        newuserData,
        headers
    ).then((response) => {
        return response.data
    }).catch((error) => {
        if (error.response.data.error) {
            return error.response.data.error
        } else {
            return error
        }

    })

}