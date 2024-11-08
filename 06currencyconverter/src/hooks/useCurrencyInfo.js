import { useEffect, useState } from "react";

const apiKey = 'c9336a606e349e17c709c5e9'; 

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
       
        if (!currency) return;

        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
            .then((res) => {

                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                console.log(res)
                setData(res.conversion_rates); 
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
            });
    }, [currency]);

    return data; // Return conversion rates
}

export default useCurrencyInfo;
