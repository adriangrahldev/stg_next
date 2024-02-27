"use client"
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

interface LoginFormProps {
    onSubmit: (formData: FormData) => void;
    loginError: string | null;
}

interface FormData {
    email: string;
    password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loginError }) => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    return (
        <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sky-900 text-sm font-bold mb-2" htmlFor="email">
                    Correo electrónico
                </label>
                <input
                    className="border border-slate-300 rounded w-full py-2 px-3 text-sky-900 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Ingrese su email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-2">
                <label className="block text-sky-900 text-sm font-bold mb-2" htmlFor="password">
                    Contraseña
                </label>
                <input
                    className="border border-slate-300 rounded w-full py-2 px-3 text-sky-900 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            {
                loginError && (
                    <div className="text-red-700 mb-6  rounded relative" role="alert">
                        <span className="block">{loginError}</span>
                    </div>
                )
            }
            <div className="flex gap-2 items-center justify-end">
                <button
                    className="bg-sky-700 hover:bg-sky-800 text-white flex items-center gap-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Ingresar
                    <FontAwesomeIcon icon={faSignIn} width={16} />
                </button>
            </div>
        </form>
    );
};

export default LoginForm;