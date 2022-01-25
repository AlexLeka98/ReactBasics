import { useState } from "react";


const useHttp = (requestInfo, dataFunc) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const httpRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestInfo.url, {
                method: requestInfo.method ? requestInfo.method : 'GET',
                body: requestInfo.body ? JSON.stringify(requestInfo.body) : null,
                headers: requestInfo.headers ? requestInfo.headers : undefined
            });
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            if (dataFunc !== null) {
                dataFunc(data);
            }
        }
        catch (error) {
            setIsLoading(true);
            setError(error.message);
        }
        setIsLoading(false);
    }
    return { error, isLoading, httpRequest };
}

export default useHttp;