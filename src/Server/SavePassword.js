import axios from 'axios';
const API = process.env.REACT_APP_BASE_URL;

export const SavePassword = (field, password, access ) => {
    const requestData = {
        'field': field, 
        'password':password,
        'access': access
    };
    return axios.post(`${API}/pass/api/savepassword/`,
        requestData,
        {
            headers: {
                
                'Content-Type': 'application/json'
            }
        }
    ).then((respose) => {
    
        return respose.data
    }).catch((error) => {
        return error
    })

}