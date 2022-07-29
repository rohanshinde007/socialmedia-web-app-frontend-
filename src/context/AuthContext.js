import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:  "62b3fd3aa3b393690cb2b61e" ,
         username: "jon",
          email: "jon@gmail.com", 
          profilePicture: "",
           coverPicture: "", 
           followings: [],
            isAdmin: false, 
            createdAt: {} , 
            updatedAt: { },
             followers: []
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}