import React, { createContext, useEffect, useState } from "react";
import api from "../api/api";


export const SweetContext = createContext()


export const SweetProvider = ({ children }) => {

    const [sweet, setSweet] = useState([])

    useEffect(() => {
        api.get('/portions?type=sweet')
            .then(res => setSweet(res.data))
    }, [])

    return (
        <SweetContext.Provider value={sweet}>
            {children}
        </SweetContext.Provider>
    )
}

export default SweetContext