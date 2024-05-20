import {z} from "zod";

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(3, {message: "Name must be at least 2 characters long"})
        .trim(),
    email: z
        .string({required_error: "Email is required"})
        .email({message: "Please enter a valid value"})
        .trim(),
    password: z
        .string({required_error: "Password is required"})
        .min(6, {message: "Be at least 6 characters long"})
        .trim()
});