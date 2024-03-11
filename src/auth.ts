import NextAuth from 'next-auth';
import { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextRequest } from 'next/server';


declare module "next-auth" {
    interface User {
        /** The user's postal address. */
        email?: string | null,
        password?: string | null,
        role?: string | null,
        permissions?: string[] | null,
        firstName?: string | null,
        lastName?: string | null,
        _id?: string | null,
    }
}


export const { auth, handlers } = NextAuth({
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            return true
        },
        async redirect({ baseUrl }) {
            return baseUrl
        },
        async session({ session, token, user }: any) {

            return {
                ...session,
                accessToken: token.accessToken,
                user: {
                    ...session.user,
                    // Agregar los datos adicionales aquí
                    firstName: token.firstName,
                    lastName: token.lastName,
                    role: token.role,
                    permissions: token.permissions,
                    _id: token._id,
                },
            }
        },
        async jwt({ token, user, account, profile, trigger }: any) {

            // Agregar los datos adicionales al token aquí

            if (user) {
                token._id = user._id;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.role = user.role;
                token.permissions = user.permissions;
                token.accessToken = user.accessToken;
            }
            return token
        },

    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const { email, password } = credentials;
                console.log(email, password);

                try {
                    const response = await fetch("http://localhost:8000/api/auth/login", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),

                    });
                    const data = await response.json();
                    const error = data.error;

                    if (!data.user || error) {
                        return null;
                    }
                    const user = data.user;
                    user.accessToken = data.token;
                    return data.user;
                } catch (error) {
                    return error;
                }
            },
        }),
    ]
})