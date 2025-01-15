import type { NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

export default async function middleware(request: NextRequest) {
    // If Need redirect or anything else
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
