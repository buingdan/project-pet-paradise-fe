import React from 'react';

const UserContext = React.createContext({ username: '', auth: false });

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ username: '', auth: false });

    const loginContext = (username, token, role) => {
        setUser((user) => ({
            username: username,
            auth: true,
        }));
        localStorage.setItem("token", token);
        localStorage.setItem("username", username)
        localStorage.setItem("role", role)
    };

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("role")
        setUser((user) => ({
            username: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };