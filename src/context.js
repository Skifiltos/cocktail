import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [query, setQuery] = useState("negroni");

    // quando andremo a fare una ricerca quello che andremo a cambiare
    // sarà lo state di query, quindi setQuery, e questo andrà a cambiare
    // lo stato di query che andremo a utilizzare in useFetch.js
    const { isLoading, data, isError, count } = useFetch(`s=${query}`);

    // useFetch è una funzione che ritorna un array di oggetti, in questo caso
    // una query e isLoading.
    // provo le query messe a disposizione dell'API del sito CocktailDB
    // per verificare che funzioni passando a data la query e il valore di isLoading
    //const { data } = useFetch(`i=11003`, true);//così al console.log(response.data) 
    // che ho impostato nel try di useFetch.js ritorna un oggetto, ed è esatto
    //const { data } = useFetch(`s=negroni`, true);//così me ne ritorna 3, perché all'interno del
    // database ci sono tre negroni, ed è corretto. l'useFetch funziona.


    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    // funzione che ci permette di variare il nostro stateQuery

    const searchCocktail = (input) => {
        setQuery(input);
    }



    return (
        <AppContext.Provider
            value={{
                // passo tutte le funzioni che mi servono
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                query,
                isLoading,
                data,
                isError,
                count,
                searchCocktail
            }}>
            {children}
        </AppContext.Provider >
    );
}


const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };