import {signIn} from "@/auth.ts";
import Link from "next/link";

export default function () {
    return (
        <div className="form_wrapper">
            <div className="form_container">
                <div className="title_container">
                    <h2>Registration</h2>
                </div>
                <div className="row clearfix">
                    <form action={async () => {
                        "use server";
                        await signIn();
                    }}>
                        {/*<span className="text-danger">Пользователь с таким именем уже существует</span>*/}
                        <div className="input_field">
                            <span>
                                <i className="bi bi-person"></i>
                            </span>
                            <input type="text" name="username" placeholder="Username" required/>
                        </div>
                        {/*<span className="text-danger">Пароли не совпадают</span>*/}
                        <div className="input_field">
                            <span>
                                <i className="bi bi-unlock-fill"></i>
                            </span>
                            <input type="password" name="password" placeholder="Password" required/>
                        </div>
                        <div className="input_field">
                            <span>
                                <i className="bi bi-unlock-fill"></i>
                            </span>
                            <input type="password" name="confirmPassword" placeholder="Re-type Password"/>
                        </div>
                        <input className="button" type="submit" value="Sign In"/>
                    </form>
                </div>
            </div>
            <p className="reg-link">Already have an account? <Link href="/auth/login">Sign In</Link></p>
        </div>
    );
}

