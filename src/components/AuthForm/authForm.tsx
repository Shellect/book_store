import classes from "./authForm.module.scss";
import Link from "next/link";

export function AuthForm({children, title}) {
    return (<div className={classes.form_wrapper}>
        <div className="form_container">
            <h2 className="text-center mt-3">{title}</h2>
            <div className="row">
                {children}
            </div>
        </div>
        <p className="reg-link">Already have an account? <Link href="/auth/login">Sign In</Link></p>
    </div>);
}