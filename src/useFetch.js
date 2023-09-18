import { useState, useEffect } from "react";
import axios from "axios";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";


const useFetch = (query, type = false) => {

    // questi sono gli state di cui devo 
    // tenere traccia nei miei custom hooks

    // scelgo dove prendere i dati
    const url = type ? singleUrl : searchUrl;

    // imposto lo stato
    const [isLoading, setIsLoading] = useState(true);

    // array di oggetti vuoto
    const [data, setData] = useState([]);

    // contatore per l'array di oggetti di cui sopra
    // permettendo di mostrare in maniera dinamica il 
    // displayning tra i risultati
    const [count, setCount] = useState(0);

    // imposto lo stato per l'errore
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async (query) => {
            setIsError(false);
            setIsLoading(false);

            try {
                const response = await axios.get(`${url}${query}`);
                setData(response.data);
                setCount(response.data.drinks);
                console.log('====================================');
                console.log(response.data);
                console.log('====================================');
            } catch (err) {
                setIsError(true);
                setCount(0);
            }
            setIsLoading(false);
        })(query);
    }, [url, query])

    return { isLoading, data, isError, count };
}

export default useFetch;