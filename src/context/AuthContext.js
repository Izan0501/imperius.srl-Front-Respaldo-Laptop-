import { useState, createContext } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const data = {
        user,
        setUser,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

} 