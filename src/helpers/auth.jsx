import {fetchWithoutToken} from "./fetch";
import {notification, timerNotification} from "./alert";
import {types} from "./types";

export const startLogin = (email, password) => {
    return async( dispatch ) => {

        const response = await fetchWithoutToken(
                                'auth/login/',
                                { email, password },
                                'POST'
                            );
        const body = await response.json();


        if ( response.status === 200 ||  response.status === 201 ){

            // set user info
            localStorage.setItem('email',body.user.email);
            localStorage.setItem('password',body.user.password);

            dispatch( login({
                username: body.user.username
            }) );

            timerNotification( 'Inicio de Sesion Exitoso!' );

        }else{
            notification( 'ERROR',body.error,'error' );
        }

    }
}


export const startChecking = () => {

    return async(dispatch) =>{

        const response = await fetchWithoutToken();
        const body = await response.json();


        if ( response.status === 200 ||  response.status === 201 ){

            // set user info
            localStorage.setItem('email',body.user.email);
            localStorage.setItem('password',body.user.password);

            dispatch( login({
                username: body.user.username
            }) );

        }else{
            dispatch( checkingFinish() );
        }

    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish })

const login = ( user ) => ({
    type: types.login,
    payload: user
})