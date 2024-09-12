"use server";
import prisma from "@/lib/prisma";
import {SignInSchema} from "@/lib/definitions";
import {hashPassword, verifyPassword, createToken} from "@/utils";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

function createSession(userId: number) {
    cookies().set('JSSESSION', createToken(userId), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400, // 24h,
        path: '/'
    });
}

export async function signUp(username, email, password) {
    if (await getUser(email)) return "User already exists!";
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashPassword(password)
        }
    });
    if (newUser) {
        createSession(newUser.id)
        return "";
    }
    return "An error occurred while creating your account."
}

export async function login(formData: FormData) {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    // 1. Validate data
    const parseResult = SignInSchema.safeParse({email, password});
    if (!parseResult.success) return "Проверьте введенные данные";

    // 2. Get User
    const user = await getUser(email);
    if (!(user && verifyPassword(password, user.password))) return "Проверьте введенные данные";

    // 3. Create session (db / cookie)
    createSession(user.id);

    // 4. Redirect
    redirect('/');
}

export async function selectBook(id) {

}

async function getUser(email: string) {
    return await prisma.user.findUnique({where: {email}});
}
