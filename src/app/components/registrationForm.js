import Link from "next/link";

export function RegistrationForm() {
    return (
        <div className="form_wrapper">
            <div className="form_container">
                <div className="title_container">
                    <h2>Registration</h2>
                </div>
                <div className="row clearfix">
                    <form>
                        {/*<span className="text-danger">Пользователь с таким именем уже существует</span>*/}
                        <div className="input_field">
                            <span>
                                {/*<FontAwesomeIcon icon={icon({name: "user", style: "solid"})}/>*/}
                            </span>
                            <input type="text" name="username" placeholder="Username" required/>
                        </div>
                        {/*<span className="text-danger">Пароли не совпадают</span>*/}
                        <div className="input_field">
                            <span>
                                {/*<FontAwesomeIcon icon={icon({name: "lock", style: "solid"})}/>*/}
                            </span>
                            <input type="password" name="password" placeholder="Password" required/>
                        </div>
                        <div className="input_field">
                            <span>
                                {/*<FontAwesomeIcon icon={icon({name: "lock", style: "solid"})}/>*/}
                            </span>
                            <input type="password" name="confirmPassword" placeholder="Re-type Password"/>
                        </div>
                        <input className="button" type="submit" value="Sign In"/>
                    </form>
                </div>
            </div>
            <p className="reg-link">Already have an account? <Link href="/login">Sign In</Link></p>
        </div>
    );
}

