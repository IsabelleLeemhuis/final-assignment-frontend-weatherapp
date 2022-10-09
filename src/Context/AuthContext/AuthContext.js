import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
import axios from "axios";


export const AuthContext = createContext({})

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = useState( {
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();

    useEffect(() => {
            const token = localStorage.getItem('token');
            if (token) {
                async function getUserData() {
                    jwt_decode(token);
                    try {
                        const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            }
                        });
                        console.log(response.data);
                        toggleAuth({
                            isAuth: true,
                            user: {
                                username: response.data.username,
                                email: response.data.email,
                                id: response.data.id,
                            },
                            status: 'done',
                        })
                    } catch (e) {
                        toggleAuth({
                            ...auth,
                            status: 'error',
                        });
                        localStorage.clear();
                        console.error(e);
                    }
                }

                getUserData();
            } else {
                toggleAuth({
                    ...auth,
                    status: 'done',
                });
            }
        },
        []);

    function login (token) {
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);
        localStorage.setItem('token', token);
        console.log('De gebruiker is ingelogd!');

        toggleAuth( {
            ...auth,
            isAuth: true,
            user: {
                username: decodedToken.username,
                password: decodedToken.password,
            },
            status: 'done',
        });
        navigate ('/profile');
    }

    function logout () {
        console.log('De gebruiker is uitgelogd!');
        toggleAuth( {
            isAuth: false,
            user: null,
            status: 'done',
        });
        localStorage.clear();
        navigate ('/');
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    };


    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' && children}
            {auth.status === 'pending' && <p>Loading...</p>}
            {auth.status === 'error' && <p>Er is iets misgegaan! Refresh de pagina alsjeblieft.</p>}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;