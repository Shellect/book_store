"use server";
import {scryptSync, randomBytes, timingSafeEqual} from "crypto";
import {redirect} from "next/navigation";
// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma";

// export const {auth, handlers, signOut} = NextAuth({
//     providers: [
//         Credentials({
//             credentials: {
//                 email: {},
//                 password: {}
//             },
//             authorize: async (credentials) => {
//                 let user = null;
//
//                 // logic to salt and hash value
//                 const pwHash = saltAndHashPassword(credentials.password)
//
//                 // logic to verify if user exists
//                 user = await getUserFromDb(credentials.email, pwHash)
//
//                 if (!user) {
//                     // No user found, so this is their first attempt to login
//                     // meaning this is also the place you could do registration
//                     throw new Error("User not found.")
//                 }
//
//                 // return user object with the their profile data
//                 return user
//             }
//         })
//     ],
// });


export async function signUp(username, email, password) {
    const salt = randomBytes(16).toString('hex');
    const hash = scryptSync(password, salt, 64).toString('hex') + '.' + salt;

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hash
        }
    });

    if (!user) {
        return {message: "An error occurred while creating your account."}
    }

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