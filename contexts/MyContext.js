import React, { useState, useEffect } from 'react'
export const MyContext = React.createContext()

const apiKey = process.env.UPSTACK_CONNECT_API_KEY = 'ourbackendapikeyhere';

const MyContextProvider = (props) => {

    const [dummyData, setDummyData] = useState(null);
    const query = 'https://api.to.wtf/ping'
    const fetchData = async () => {
        console.log(`running query: ${query} `);
        const call = await fetch(query)
            // .then((result) => console.log(result))
            // .catch(console.error)
            
        const data = await call.json();
        console.log('data:', data)
        setState(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <MyContextProvider value={count}>
            {props.children}
        </MyContextProvider>
    )
}