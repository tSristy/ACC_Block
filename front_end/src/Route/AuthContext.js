// AuthContext.js
import { createContext, useEffect, useState } from "react";
import { ServerApi } from "./ServerApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const loginInfo = JSON.parse(sessionStorage.getItem('loginInfo')) || false;

        if (loginInfo) {
            ServerApi(`/auth-check`, 'GET', loginInfo.access_token)
                .then(res => {
                    if (res.ok && res.status === 200) {
                        setAuth(true);
                    } else {
                        setAuth(false);
                    }
                })
                .catch(() => setAuth(false))
                .finally(() => setLoading(false));
        } else {
            setAuth(false);
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
