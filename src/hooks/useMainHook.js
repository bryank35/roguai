import { useState, useEffect, useReducer } from "react";
import { mainReducer } from "../store/reducers";
import * as ACTIONS from '../store/actions/index';

import Cyperpuck from '../assets/models/templates/Humanoid_Mecha/Cyberpunk_azura';

const initialState={
    isModalOpen:{status:false, name:''},
    profile:{
        iswalletConnect:false,
        username:'Unnamed'
    },
    theme:'default',
    modelcustomize:{
        wing:0,
        ear:0,
        glass:0
    },
    currentModel:{
        Preview:props=><Cyperpuck position={[0,-1,0]} {...props}/>,
        customizable:false
    }
};

const useMainHook=()=>{
    const [state, dispatch]=useReducer(mainReducer, initialState);
    
    const toggleModal=(name)=>{
        dispatch(ACTIONS.modal(name));
    };

    const changeProfile=(username, isw=true)=>{
        dispatch(ACTIONS.changeProfile(username, isw));
    }

    const changeTheme=(theme)=>{
        dispatch(ACTIONS.changeTheme(theme));
    }

    const changeModelcustomize=(val)=>{
        dispatch(ACTIONS.changeModelcustomize(val))
    }

    const changeCurrentModel=(model)=>{
        dispatch(ACTIONS.changeCurrentModel(model));
    }

    return {
        state, 
        toggleModal,
        changeProfile,
        changeTheme,
        changeModelcustomize,
        changeCurrentModel
    }
};

export default useMainHook;