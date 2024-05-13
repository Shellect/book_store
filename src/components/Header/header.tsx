import ActiveLink from "../activeLink";
import Link from "next/link";

export function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-yellow">
                <div className="container-fluid">
                    {/*Logo*/}
                    <Link href="/" className="navbar-brand text-white">Book store</Link>

                    {/*Burger button*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="main-navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="main-navbar">
                        <div className="navbar-nav">
                            <ActiveLink href="/" className="nav-link" activeClassName="active nav-link">Главная</ActiveLink>
                            <ActiveLink href="/profile" className="nav-link" activeClassName="active nav-link">Profile</ActiveLink>
                            <ActiveLink href="/order" className="nav-link" activeClassName="active nav-link">Order</ActiveLink>
                            <ActiveLink href="/cart" className="nav-link" activeClassName="active nav-link">Cart</ActiveLink>
                        </div>
                    </div>
                    {/* TODO: if block */}
                    <Link className="btn btn-light" href="/auth/login">Login</Link>
                    <Link className="btn btn-light ms-3" href="/auth/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}