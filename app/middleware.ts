import { NextRequest } from "next/server";

export function middleware(){
    return async function (request: NextRequest, next: () => Promise<Response>) {
        // Add your custom middleware here
        return next();
    };
}

export const config = {
    matcher: []
}