import "bootstrap-icons/font/bootstrap-icons.scss";

export default function ({children}) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 offset-md-4">
                    {children}
                </div>
            </div>
        </div>
    );
}