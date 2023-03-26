import React, { useContext, useEffect, useReducer } from "react"


const initialState = {}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    return <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }