import {Dispatch, SetStateAction, useId} from "react";

export default function (
    {
        type,
        placeholder,
        name,
        value,
        iconClass,
        handler,
        error
    }: {
        type: string,
        placeholder: string,
        name: string,
        value: string,
        iconClass: string,
        handler: Dispatch<SetStateAction<string>>,
        error: string[] | undefined
    }
) {
    const id = useId();
    return (
        <div className="mt-3">
            <span className="text-danger">{error}</span>
            <div className="input-group">
                <span className="input-group-text" id={id}><i className={iconClass}></i></span>
                <input type={type} className="form-control" placeholder={placeholder}
                       aria-label={placeholder} aria-describedby={id}
                       name={name} value={value}
                       onChange={e => handler(e.target.value)}/>
            </div>
        </div>
    );
}