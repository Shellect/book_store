import classes from "./inputField.module.scss";

export function InputField({error, children}) {
    return (<>
            <span className="text-danger">{error}</span>
            <div className={classes.input_field}>{children}</div>
        </>);
}