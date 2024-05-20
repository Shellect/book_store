import {Dispatch, SetStateAction, useId} from "react";

export default function (
    {
        value,
        handler
    }: {
        value: string,
        handler: Dispatch<SetStateAction<string>>
    }
) {
    const id = useId();
    return (
        <div className="input-group mt-3">
            <span className="input-group-text" id={id}><i className="bi bi-unlock-fill"></i></span>
            <input type="password" className="form-control" placeholder="Re-type Password"
                   aria-label="Re-type Password" aria-describedby={id}
                   value={value}
                   onChange={e => handler(e.target.value)}/>
        </div>
    );
}