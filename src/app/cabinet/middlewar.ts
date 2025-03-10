import { NextResponse } from 'next/server';

export function middleware(req: Request) {
    const isAuthenticated = req.headers.get('authorization') !== null;

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}