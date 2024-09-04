import { useState, createContext, useEffect } from "react";
import { getUser } from "../api/getUser";
import Loading from '../components/Loading';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('access');
            await login(token);
            setLoading(false)
        })();
    }, []);

    const login = async (token) => {
        try {
            const user = await getUser(token)
            delete user.password;
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        setUser(false);
        localStorage.clear()
    }

    const data = {
        user,
        setUser,
        login,
        logout,
    };

    if(loading) return <Loading/>

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

} 
