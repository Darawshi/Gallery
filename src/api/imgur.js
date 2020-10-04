import qs from 'qs';
import axios from 'axios';

const CLIENT_ID="b5e7fef2f59932e";
const ROOT_URL="https://api.imgur.com";

export default {

    login(){
        const queryString={
            client_id : CLIENT_ID,
            response_type: "token"
        };
        window.location= `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },
    getImage(token){
        // https://api.imgur.com/3/account/me/images
        // Authorization Bearer {{accessToken}}

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        return axios.get(`${ROOT_URL}/3/account/me/images`, config);
    },
    uploadImage(images,token){
        const promises = Array.from(images).map(image =>{
            const formData = new FormData();
            formData.append('image' ,image);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                    }};
            return axios.post(`${ROOT_URL}/3/image` ,formData ,config);
        });
        return Promise.all(promises);
    }
};