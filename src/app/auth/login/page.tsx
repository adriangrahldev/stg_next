"use client"
import LoadingComponent from "@/components/Loading/loading";
import LoginForm from "@/components/auth/login-form";
import useAuthToken from "@/hooks/token";
import useUser from "@/hooks/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {  } from "next-auth";
import { signIn } from 'next-auth/react';
const LoginPage = () => {
    const [token, updateAuthToken] = useAuthToken();
    const { user, authStatus } = useUser();
    const [loginError, setLoginError] = useState<string | null>(null);
    const router = useRouter();

    const onSubmit = async (formData: any) => {
        const { email, password } = formData;
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        }); 
        console.log('result', result);
        

        if (result && result.error) {
            setLoginError(result.error);
        } else {
            setLoginError(null);
            router.push('/');
        }
    }

    useEffect(() => {
        console.log('authStatus', authStatus);

    }, [authStatus]);

    return (
        <div className="flex justify-center items-center bg-slate-200 h-screen">
            {
                authStatus === 'pending'
                && <LoadingComponent />
            }

            <LoginForm onSubmit={onSubmit} loginError={loginError} />
        </div>
    );
}
export default LoginPage;