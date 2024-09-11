import {z} from "zod";

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(3, {message: "Name must be at least 3 characters long"})
        .trim(),
    email: z
        .string({required_error: "Email is required"})
        .email({message: "Please enter a valid value"})
        .trim(),
    password: z
        .string({required_error: "Password is required"})
        .min(6, {message: "Be at least 6 characters long"})
        .trim(),
    confirmPassword: z
        .string({required_error: "Passwords don't match"})
        .trim()
})
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"]
    });

export const SignInSchema = z.object({
    email: z.string().trim(),
    password: z.string().trim()
})

export type CardsType = { id: number, title: string, author: string, image: string };

export type FormState = {
    username?: string[], email?: string[], password?: string[], confirmPassword?: string[]
} | undefined;