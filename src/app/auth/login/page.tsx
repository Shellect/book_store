import {signIn} from "@/auth.ts";
import Link from "next/link";

export default function () {
    return (
        <div className="form_wrapper">
            <div className="form_container">
                <div className="title_container">
                    <h2>Authorisation</h2>
                </div>
                <div className="row clearfix">
                    <form action={async () => {
                        "use server";
                        await signIn();
                    }}>
                        {/*<span className="text-danger">Проверьте введенные данные</span>)*/}
                        <div className="input_field">
                            <span><i className="bi bi-user"></i></span>
                            <input type="text" name="username" placeholder="Username" required/>
                        </div>
                        <div className="input_field">
                            <span><i className="bi bi-unlock-fill"></i></span>
                            <input type="password" name="password" placeholder="Password" required/>
                        </div>
                        <input className="button" type="submit" value="Sign In"/>
                    </form>
                </div>
            </div>
            <p className="reg-link">No account? <Link href="/auth/register">Sign Up</Link></p>
        </div>
    );
}
