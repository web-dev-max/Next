import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/auth?mode=login', req.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ['/cabinet/:path*'],
}