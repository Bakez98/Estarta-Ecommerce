import * as AUTH_ACTIONS_CONSTANTS from "./constants"
import magic from "../../lib/magic-sdk"


export default function login(email) {
    return async (dispatch) => {

        dispatch({
            type:AUTH_ACTIONS_CONSTANTS.AUTH_LOADING,
        });

        try {
            const responce = magic.auth.loginWithMagicLink({ email });
            if(responce){
                const Token = magic.user.getIdToken();
                const userInformation = magic.user.getMetadata();

                localStorage.setItem("Token", Token);
                localStorage.setItem("user", JSON.stringify(userInformation))


                dispatch({
                type:AUTH_ACTIONS_CONSTANTS.AUTH_SUCCESS,
                payload: {Token , userInformation}
                });


            }
        } catch (error) {
            
            dispatch({
                type:AUTH_ACTIONS_CONSTANTS.AUTH_ERROR,
                payload: error,
            })

        }









    }
}