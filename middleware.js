import { NextResponse } from "next/server"

export async function middleware(request) {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const tokenCookie = request.cookies.get("token").value
  const validateToken = await fetch(`${apiUrl}/users/auth/validate-token`, {
    headers: {
      Authorization: `Bearer ${tokenCookie}`,
    },
  });
  if (validateToken.status !== 200) {
    console.log("Token not valid");
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }
  console.log("Token valid")
  return NextResponse.next();
}

export const config = {
  matcher: "/cart/:path*",
};
