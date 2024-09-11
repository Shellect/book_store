'use client';
import {useState} from "react";
import Link from "next/link";
import {signUp} from "@/app/actions";
import {SignUpSchema} from "@/lib/definitions";
import {FormState} from "@/lib/definitions";
import {InputField} from "@/components/ui";
import {useRouter} from "next/navigation";

export default function () {
    let [username, setUsername] = useState<string>('');
    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [confirmPassword, setConfirmPassword] = useState<string>('');
    let [errors, setErrors] = useState<FormState>(undefined);
    let [message, setMessage] = useState('');
    const router = useRouter();
    const action = async event => {
        event.preventDefault();
        const parseResult = SignUpSchema.safeParse({username, email, password, confirmPassword});
        if (parseResult.success) {
            setMessage(await signUp(username, email, password));
            router.push('/');
        } else {
            setErrors(parseResult.error.flatten().fieldErrors);
        }
    }
    return (
        <div className="border-top border-5 border-warning mt-3">
            <h2 className="text-center mt-3">Registration</h2>
            <div className="row">
                <form onSubmit={action}>
                    <span className="text-danger">{message}</span>
                    <InputField type="text" placeholder="Username" name="username" value={username}
                                iconClass="bi bi-person" handler={setUsername} error={errors?.username}/>
                    <InputField type="email" placeholder="E-mail" name="email" value={email} iconClass="bi bi-at"
                                handler={setEmail} error={errors?.email}/>
                    <InputField type="password" placeholder="Password" name="password" value={password}
                                iconClass="bi bi-unlock-fill" handler={setPassword} error={errors?.password}/>
                    <InputField type="password" placeholder="Confirm password" name="confirmPassword"
                                value={confirmPassword} iconClass="bi bi-unlock-fill" handler={setConfirmPassword}
                                error={errors?.confirmPassword}/>
                    <div className="d-grid mt-3">
                        <input className="btn btn-warning" type="submit" value="Sign Up"/>
                    </div>
                </form>
            </div>
            <p className="mt-3">Already have an account? <Link className="link-warning" href="/auth/signin">Sign
                In</Link></p>
        </div>
    );
}

