'use client';
import {useState} from "react";
import Link from "next/link";
import {login} from "@/app/actions";

export default function () {
    let [error, setError] = useState<string>('');
    const action = async formData => {
        setError(await login(formData));
    }
    return (
        <div className="border-top border-5 border-warning mt-3">
            <h2 className="text-center mt-3">Authorisation</h2>
            <div className="row">
                <form action={action}>
                    <span className="text-danger">{error}</span>
                    <div className="input-group mt-3">
                        <span className="input-group-text"><i className="bi bi-at"/></span>
                        <input type="email" placeholder="E-mail" name="email" className="form-control"/>
                    </div>
                    <div className="input-group mt-3">
                        <span className="input-group-text"><i className="bi bi-unlock-fill"/></span>
                        <input type="password" placeholder="Password" name="password" className="form-control"/>
                    </div>
                    <div className="d-grid mt-3">
                        <input className="btn btn-warning" type="submit" value="Sign In"/>
                    </div>
                </form>
            </div>
            <p className="mt-3">No account? <Link className="link-warning" href="/auth/signup">Sign Up</Link></p>
        </div>
    );
}
