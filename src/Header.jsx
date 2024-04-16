import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid justify-content-between">
                    <a className="navbar-brand" href="/">BookShop</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {/* TODO: active page need */}
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                            <a className="nav-link" href="/profile">
                                Profile
                            </a>
                            <a className="nav-link" href="/order">
                                Order
                            </a>
                            <a className="nav-link" href="/cart">
                                Cart
                            </a>
                        </div>
                    </div>
                    {/* TODO: if block */}
                    <a className="btn btn-primary" href="/auth">
                        Login
                    </a>
                </div>
            </nav>
        </header>
    );
}