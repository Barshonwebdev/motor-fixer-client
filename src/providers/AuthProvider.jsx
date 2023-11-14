import { Children, createContext, useState } from "react";
import {getAuth} from "firebase/auth"
import app from "../Firebase/firebase.config";
const auth=getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({Children}) => {
    const [user,setUser]=useState();
    const [loading,setLoading]=useState(true);
    const authInfo={
        user,loading
    };
   
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;