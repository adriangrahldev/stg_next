import { useState, useEffect } from 'react';
import useAuthToken from './token';
import { IUser } from '@/interfaces/user.interface';

const useUser = (): { user: IUser | null, pending: boolean, error: string | null, authStatus: string } => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token] = useAuthToken();
    const [pending, setPending] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [authStatus, setAuthStatus] = useState('pending');

    useEffect(() => {
        const fetchUser = async () => {
            setPending(true);
            try {
                const response = await fetch('http://localhost:8000/api/auth/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Error al obtener el usuario');
                }

                setUser(data);
                setAuthStatus('authenticated');
            } catch (error) {
                setError(error.message);
                setAuthStatus('unauthorized');
            } finally {
                setPending(false);
            }
        };
        
        if (token) {
            fetchUser();
        } else {
            setAuthStatus('unauthorized');
        }
    }, [token]);

    return { user, pending, error, authStatus };
};

export default useUser;