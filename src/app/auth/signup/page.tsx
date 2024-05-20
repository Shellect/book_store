'use client';
import {useState} from "react";
import Link from "next/link";
import {signUp} from "@/lib/auth.ts";
import {SignUpSchema} from "@/lib/zod";
import {FormState} from "@/lib/definitions";
import {UsernameField, EmailField, PasswordField, ConfirmPasswordField} from "@/components/AuthForm";

export default function () {
    let [username, setUsername] = useState<string>('');
    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [confirmPassword, setConfirmPassword] = useState<string>('');
    let [errors, setErrors] = useState<FormState>(undefined);
    const action = event => {
        event.preventDefault();
        const parseResult = SignUpSchema.safeParse({username, email, password});
        if (parseResult.success) signUp();
        else setErrors(parseResult.error.flatten().fieldErrors);
    }
    return (
        <div className="border-top border-5 border-warning mt-3">
            <h2 className="text-center mt-3">Registration</h2>
            <div className="row">
                <form onSubmit={action}>
                    <UsernameField value={username} handler={setUsername} error={errors?.username}/>
                    <EmailField value={email} handler={setEmail} error={errors?.email}/>
                    <PasswordField value={password} handler={setPassword} error={errors?.password}/>
                    <ConfirmPasswordField value={confirmPassword} handler={setConfirmPassword}/>
                    <div className="d-grid mt-3">
                        <input className="btn btn-warning" type="submit" value="Sign Up"/>
                    </div>
                </form>
            </div>
            <p className="mt-3">Already have an account? <Link className="link-warning" href="/auth/signin">Sign In</Link></p>
        </div>
    );
}

