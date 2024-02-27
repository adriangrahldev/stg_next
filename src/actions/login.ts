import axios from "axios";

export const login = async (formData: any) => {
    const response = await axios.post('http://localhost:8000/api/auth/login', formData);
    return response;

}