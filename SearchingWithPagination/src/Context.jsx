import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: 'CSS',
    nbPages: 0,
    page: 0,
    hits: [],
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchApiData = async (url) => {

        dispatch({type:"SET_LOADING"});

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const removePost=(post_ID)=>{
        dispatch({type:"REMOVE_POST",payload:post_ID})
    }

    const searchPost=(searchQuery)=>{
        dispatch({type:"SEARCH_QUERY",payload:searchQuery})
    }

    const getPrevPage=()=>{
        dispatch({type:"PREV_PAGE"});
    }

    const getNextPage=()=>{
        dispatch({type:"NEXT_PAGE"});
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query,state.page])

    return (
        <Appcontext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>
            {children}
        </Appcontext.Provider>
    )
}

//Custom hook
const useGlobalContext = () => {
    return useContext(Appcontext);
}

export { AppProvider, Appcontext, useGlobalContext };