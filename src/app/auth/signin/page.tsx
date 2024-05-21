'use client';
import {useState} from "react";
import Link from "next/link";
import {signIn} from "@/lib/auth.ts";
import {SignUpSchema} from "@/lib/zod";
import {FormState} from "@/lib/definitions";
import {InputField} from "@/components/AuthForm";

export default function () {
    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [errors, setErrors] = useState<FormState>(undefined);
    const action = event => {
        event.preventDefault();
        const parseResult = SignUpSchema.safeParse({email, password});
        if (parseResult.success) signIn();
        else setErrors(parseResult.error.flatten().fieldErrors);
    }
    return (
        <div className="border-top border-5 border-warning mt-3">
            <h2 className="text-center mt-3">Authorisation</h2>
            <div className="row">
                <form onSubmit={action}>
                    {/*<span className="text-danger">Проверьте введенные данные</span>*/}
                    <InputField type="email" placeholder="E-mail" name="email" value={email} iconClass="bi bi-at" handler={setEmail} error={errors?.email}/>
                    <InputField type="password" placeholder="Password" name="password" value={password} iconClass="bi bi-unlock-fill" handler={setPassword} error={errors?.password}/>
                    <div className="d-grid mt-3">
                        <input className="btn btn-warning" type="submit" value="Sign In"/>
                    </div>
                </form>
            </div>
            <p className="mt-3">No account? <Link className="link-warning" href="/auth/signup">Sign Up</Link></p>
        </div>
    );
}
