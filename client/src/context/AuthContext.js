import { createContext, useEffect, useReducer } from "react";
import AuthReducer from './AuthReducer';

const INTIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INTIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useEffect(AuthReducer, INTIAL_STATE);

    useEffect (()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
return(
    <AuthContext.Provider
    value={
        {
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }
    }
    >
        {children}
    </AuthContext.Provider>
)    
}