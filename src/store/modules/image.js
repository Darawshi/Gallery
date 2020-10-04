import api from '../../api/imgur'
import router from "../../router";

const state ={
    images:[]
};


const getters = {
    imageList:state => state.images
};

const actions ={
    async fetchImage({rootState ,commit}){
        const token =rootState.auth.token;
      const response =await api.getImage(token);
        commit('setImage',response.data.data);
    },
    async uploadImage({rootState} , images){
        //get the access token
        const token =rootState.auth.token;
        //call our API module to do the upload
        await  api.uploadImage(images ,token);
        //redirect our user to imageList component
        router.push('/');

    }
};
const mutations ={
    setImage:(state,images)=>{
        state.images=images;
    }
};



export default {
    state,
    getters,
    actions,
    mutations,

};