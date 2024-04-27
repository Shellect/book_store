"use client";
import {useRouter} from "next/router";
import Link from "next/link";

export default function ActiveLink({href, activeClassName, className, children}) {
    const router = useRouter();

    if (router.pathname == href) {
        className = activeClassName;
    }

    return <Link href={href} className={className}>{children}</Link>
}