'use client';
import {signUp} from "@/lib/auth.ts";
import {useState} from "react";
import {SignUpSchema} from "@/lib/zod";
import {FormState} from "@/lib/definitions";
import {InputField} from "@/components/InputField";
import {AuthForm} from "@/components/AuthForm";

export default function () {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [confirmEmail, setConfirmEmail] = useState('');
    let [state, setState] = useState<FormState>(undefined);
    const action = event => {
        event.preventDefault();
        const parseResult = SignUpSchema.safeParse({username, email, password});
        console.log(parseResult);
        if (!parseResult.success) {
            setState({
                errors: parseResult.error.flatten().fieldErrors
            });
        } else {
            signUp();
        }
    }
    return (<AuthForm title="Registration">
        <form onSubmit={action}>
            <InputField error={state?.errors?.username && "Пользователь с таким именем уже существует"}>
                <span><i className="bi bi-person"></i></span>
                <input type="text" name="username" placeholder="Username" required/>
            </InputField>
            <InputField error={state?.errors?.email && "Пользователь уже существует"}>
                <span><i className="bi bi-person"></i></span>
                <input type="email" name="email" placeholder="E-mail" required/>
            </InputField>
            <span className="text-danger"></span>
            <InputField error={state?.errors?.password && "Пароли не совпадают"}>
                <span><i className="bi bi-unlock-fill"></i></span>
                <input type="password" name="password" placeholder="Password" required/>
            </InputField>
            <InputField>
                <span><i className="bi bi-unlock-fill"></i></span>
                <input type="password" name="confirmPassword" placeholder="Re-type Password"/>
            </InputField>
            <input className="btn" type="submit" value="Sign Up"/>
        </form>
    </AuthForm>);
}

