import React, { useContext, useEffect, useReducer } from "react"
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./components/utilities/actions";
import reducer from "./components/utilities/reducer";


const API_ENDPOINT = "http://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading: true,
    hits: [],
    query: 'react',
    page: 0,
    nbPages: 0
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchStories = async (url) => {
        dispatch( {type: SET_LOADING} )

        try {
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data)
            dispatch({
              type: SET_STORIES,
              payload: { hits: data.hits, nbPages: data.nbPages },
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
    }, [state.query])

    const removeStory = id => {
        // console.log(id)
        dispatch({ type: REMOVE_STORY, payload: id })
    }

    const handleSearch = (query) => {
        dispatch({ type: HANDLE_SEARCH, payload: query})
    }

    return <AppContext.Provider value={{...state, removeStory, handleSearch}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }