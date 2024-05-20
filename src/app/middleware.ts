import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {getSession} from "next-auth/react";

export async function middleware(request: NextRequest) {
    const session = await getSession();

    if (!session && request.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}
