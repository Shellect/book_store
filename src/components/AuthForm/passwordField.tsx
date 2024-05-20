import {Dispatch, SetStateAction, useId} from "react";

export default function (
    {
        value,
        handler,
        error
    }: {
        value: string,
        handler: Dispatch<SetStateAction<string>>,
        error: string[] | undefined
    }
) {
    const id = useId();
    return (
        <div className="mt-3">
            <span className="text-danger">{error && "Слабый пароль"}</span>
            <div className="input-group">
                <span className="input-group-text" id={id}><i className="bi bi-person"></i></span>
                <input type="password" className="form-control" placeholder="Password"
                       aria-label="Password" aria-describedby={id}
                       name="password" value={value}
                       onChange={e => handler(e.target.value)}/>
            </div>
        </div>
    );
}