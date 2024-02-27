"use client"
import { login } from "@/actions/login";
import LoadingComponent from "@/components/Loading/loading";
import LoginForm from "@/components/auth/login-form";
import useAuthToken from "@/hooks/token";
import useUser from "@/hooks/user";
import { IUser } from "@/interfaces/user.interface";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const [token, updateAuthToken] = useAuthToken();
    const {user, authStatus, pending} = useUser();
    const [loginError, setLoginError] = useState<string | null>(null);
    const router = useRouter();

    const onSubmit = async (formData: any) => {

        login(formData).then((response) => {
            if (response.status === 200) {
                updateAuthToken(response.data.token);
                setLoginError(null);
                router.push('/');
            }
        }).catch((error) => {
            setLoginError(error.response.data.message);
        });

    }

    useEffect(() => {
        if (authStatus === 'authenticated') {
            router.push('/');
        }
    }, [authStatus, router]);

    return (
        <div className="flex justify-center items-center bg-slate-200 h-screen">
            {
                pending && <LoadingComponent />
            }

            <LoginForm onSubmit={onSubmit} loginError={loginError} />
        </div>
    );
}
export default LoginPage;