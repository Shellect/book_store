import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value;

    if (!session && request.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

