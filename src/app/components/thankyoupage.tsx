export default function ThankYouPage({username, book, date, address}) {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-6 offset-3 border rounded p-3">
                    <p>{username + ", thanks for the order!"}</p>
                    <p>{"Book \"" + book + "\" will be delivered on " + date + " to " + address}</p>
                    <p className="d-grid">
                        <a className="btn btn-success" href="/">Home</a>
                    </p>
                </div>
            </div>
        </div>
    )
}