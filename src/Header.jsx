import React from "react";
import { NavLink } from "react-router-dom";

let links = [
    { "text": "Home", to: "/" },
    { "text": "Profile", to: "/profile" },
    { "text": "Order", to: "/order" },
    { "text": "Cart", to: "/cart" }
]

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
                        <div className="navbar-nav">
                            {links.map(({ text, to }) => <NavLink
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                                to={to}>
                                {text}
                            </NavLink>
                            )}
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