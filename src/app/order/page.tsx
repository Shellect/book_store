export default function Order() {
    return (
        <main className="container">
            <div className="row mt-3">
                <div className="col-sm-12 col-md-8 offset-md-2 border rounded p-5">
                    <form action="/buy" method="post">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="" className="form-label">Book:</label>
                            </div>
                            <div className="col-9">
                                <input className="form-control" type="text" disabled={true} id="book-name"
                                       name="book_name"/>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Quantity:</label>
                                </div>
                                <div className="col-9">
                                    <input type="number" className="form-control" name="quantity" id="book-quantity"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Username:</label>
                                </div>
                                <div className="col-9">
                                    <input type="text" className="form-control" id="username"
                                           name="username"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3"><label htmlFor="" className="form-label">
                                    Delivery address:
                                </label></div>
                                <div className="col-9">
                                    <textarea name="address" id="address" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3">
                                    <label htmlFor="" className="form-label">Delivery date:</label>
                                </div>
                                <div className="col-9">
                                    <input type="date" className="form-control" name="date" id="date"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-3"><label htmlFor="" className="form-label">Comment:</label></div>
                                <div className="col-9">
                                    <textarea name="comment" id="comment" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="d-grid mt-5">
                                <input type="submit" className="btn btn-success" value="Buy"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}