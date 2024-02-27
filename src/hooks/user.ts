import { useState, useEffect } from 'react';
import useAuthToken from './token';
import { IUser } from '@/interfaces/user.interface';



const useUser = (): any[] => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token] = useAuthToken();
    const [pending, setPending] = useState(true);

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

                setUser(data);
            } catch (error) {
                console.error('Error al obtener el usuario:', error);
            } finally {
                setPending(false);
            }
        };
        
        if (token) {
            fetchUser();
        }
    }, [token]);

    return [user, pending];
};

export default useUser;