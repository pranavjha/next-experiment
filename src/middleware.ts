import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isAuthenticated(request: NextRequest) {
    return !request.nextUrl.pathname.startsWith('/ua');
}

export function middleware(request: NextRequest) {
 // Call our authentication function to check the request
 if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 }
    )
  }
  // You can also set request headers in NextResponse.next
  const response = NextResponse.next()
 
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}