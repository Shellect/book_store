export default function Auth() {

    return (
        <div className="wrapper">
            <form method="post" action="/auth">
                <div className="mb-3 input-group">
                    <i className="bi bi-person-fill input-group-text"/>
                    <input id="username" className="form-control" name="username" placeholder="My name is"/>
                    {/*errors.map((error, i) => <span key={i}
                        className="text-danger">{error.path == 'username' ? error.msg : ""}</span>)*/}
                </div>
                <div className="mb-3 input-group">
                    <i className="bi bi-lock-fill input-group-text"/>
                    <input id="password" className="form-control" type="password" name="password"/>
                    {/*errors.map((error, i) => <span key={i}
                        className="text-danger">{error.path == 'password' ? error.msg : ""}</span>)*/}
                </div>
                <div>
                    <input id="auth-submit" type="submit" value="Sign in"/>
                </div>
                <div className="radio-check">
                    <input id="no" className="radio-no" type="radio" name="remember" value="no" checked/>
                    <label htmlFor="no">
                        <i className="fa fa-times"></i>
                    </label>
                    <input id="yes" className="radio-yes" type="radio" name="remember" value="yes"/>
                    <label htmlFor="yes">
                        <i className="fa.fa-check"></i>
                    </label>
                    <span className="switch-selection"></span>
                </div>
                <span className="check-label">Remember me?</span>
                <span className="forgot-label">Lost your password?</span>
            </form>
        </div>
    )
}