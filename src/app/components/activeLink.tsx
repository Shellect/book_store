"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function ActiveLink({href, activeClassName, className, children}) {
    const pathname = usePathname();

    if (pathname == href) {
        className = activeClassName;
    }

    return <Link href={href} className={className}>{children}</Link>
}