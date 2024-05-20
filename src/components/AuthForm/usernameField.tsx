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
            <span className="text-danger">{error && "Пользователь с таким именем уже существует"}</span>
            <div className="input-group">
                <span className="input-group-text" id={id}><i className="bi bi-person"></i></span>
                <input type="text" className="form-control" placeholder="Username"
                       aria-label="Username" aria-describedby={id}
                       name="username" value={value}
                       onChange={e => handler(e.target.value)}/>
            </div>
        </div>
    );
}