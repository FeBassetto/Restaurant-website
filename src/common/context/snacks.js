import React, { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const SnackContext = createContext();

export const SnackProvider = ({ children }) => {

    const [snacks, setSnacks] = useState([])

    useEffect(() => {
        api.get('/snacks')
            .then(res => setSnacks(res.data))
    }, [])

    return (
        <SnackContext.Provider value={{ snacks }} >
            {children}
        </SnackContext.Provider>
    )
}