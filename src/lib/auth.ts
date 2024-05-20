import {scryptSync, randomBytes, timingSafeEqual} from "crypto";
import {redirect} from "next/navigation";
import NextAuth, {User} from "next-auth"
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const {auth, handlers, signOut} = NextAuth({
    providers: [
        Credentials({
            credentials: {
                usernmae: {},
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                let user = null;

                // logic to salt and hash password
                const pwHash = saltAndHashPassword(credentials.password)

                // logic to verify if user exists
                user = await getUserFromDb(credentials.email, pwHash)

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }

                // return user object with the their profile data
                return user
            }
        })
    ],
});


export async function signUp() {
    const salt = randomBytes(16).toString('hex');
    const hash = scryptSync(password, salt, 64).toString('hex') + '.' + salt;

    await prisma.user.create({
        data: {
            email,
            password: hash
        }
    })

    redirect('/');
}


export async function signIn(data: FormData) {
    const email = data.get("email");
    const password = data.get("password");
    // TODO: add validation here

    const user = await prisma.user.findUnique({email});
    const [storedHash, salt] = user.password.split('.');
    const userHash = scryptSync(password, salt, 64);
    if (timingSafeEqual(Buffer.from(storedHash, 'hex'), userHash)) {
        // login
    }
}