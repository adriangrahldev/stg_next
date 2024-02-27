import { useState, useEffect } from 'react';

const useAuthToken = (): [string | null, (token: string | null) => void] => {
    const [authToken, setAuthToken] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setAuthToken(token);
    }, []);

    const updateAuthToken = (token: string | null) => {
        setAuthToken(token);
        localStorage.setItem('authToken', token as string); // Use type assertion to ensure token is of type string
    };

    return [authToken, updateAuthToken];
};

export default useAuthToken;