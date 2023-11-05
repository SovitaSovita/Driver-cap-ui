import { API, BASE_URL_UnAuth } from "../Constants"


export const loginService = async(user) => {
    try{
        console.log(user)
        const response = await API.post(`${BASE_URL_UnAuth}/auth/login`,user);
        return response;
    }catch(e){
        return e;
    }
}