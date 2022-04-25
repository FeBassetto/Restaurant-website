import React, { createContext, useEffect, useState } from "react";
import api from "../api/api";


export const SaltyContext = createContext()

export const SaltyProvider = ({children}) => {

    const [salty, setSalty] = useState([])

    useEffect(() => {
        api.get('/portions?type=salty')
        .then(res => setSalty(res.data))
    }, [])

    return(
        <SaltyContext.Provider value={salty}>
            {children}
        </SaltyContext.Provider>
    )
}

export default SaltyContext