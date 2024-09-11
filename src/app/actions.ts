"use server";
import {randomBytes, scryptSync, timingSafeEqual} from "crypto";
import prisma from "@/lib/prisma";
import {SignInSchema} from "@/lib/definitions";
import {encryptData} from "@/utils";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

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
    if (user) {
        // login
        return "";
    }
    return "An error occurred while creating your account."
}

export async function handleLogin(sessionData) {
    const encryptedSessionData = encryptData(sessionData);
    const sessionId = crypto.randomBytes(16).toString('base64');
    cookies().set('JSSESSIONID', sessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400, // 24h,
        path: '/'
    });

    // Redirect or handle the response after setting the cookie
}

export async function login(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    // 1. Validate data
    const parseResult = SignInSchema.safeParse({email, password});
    if (!parseResult.success) return "Проверьте введенные данные";

    // 2. Get User
    const user = await prisma.user.findUnique({where: {email}});
    if (!user) return "Проверьте введенные данные";
    const [storedHash, salt] = user.password.split('.');
    const userHash = scryptSync(password, salt, 64);
    if (!timingSafeEqual(Buffer.from(storedHash, 'hex'), userHash)) return "Проверьте введенные данные";

    // 3. Create session (db / cookie)
    handleLogin();


    // 4. Redirect
    redirect('/');

}

export async function selectBook(id) {

}

async function getUser(email: string) {
    return await prisma.user.find({where: {email}});
}
