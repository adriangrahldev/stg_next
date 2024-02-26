
import axios from 'axios';

const login = async (credentials: {email: string, password: string}) => {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
        return response.data.token;
    } catch (error) {
        // Handle error
        console.error('Error during login:', error);
        throw error;
    }
};

export default login;