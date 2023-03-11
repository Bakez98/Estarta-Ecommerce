import * as AUTH_ACTIONS_CONSTANTS from "./constants"

const initState = {
    isAuth:false,
    token:null,
    loading:false,
    user:{},
    error: null,
}


 function authReducer(state = initState, action){
    switch (action.type) {
        case AUTH_ACTIONS_CONSTANTS.AUTH_LOADING:
        return {
            ...state,
            loading:true,
        }
        case AUTH_ACTIONS_CONSTANTS.AUTH_ERROR:
        return {
            ...state,
            loading:false,
            error: action.payload,
        }
        case AUTH_ACTIONS_CONSTANTS.AUTH_SUCCESS:
        return {
            ...state,
            loading:false,
            isAuth:true,
            // user:,
            //tokem:
        }
        default:
            return state;
    }
}

export default authReducer;