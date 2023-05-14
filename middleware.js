import { NextResponse } from "next/server";

export async function middleware(request) {
  const apiUrl = `https://api-rest-hacer-comun-production.up.railway.app`;
  const token =
    "syJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDUwYTM0Yzk2ODExM2E5MmQ4MDhlN2IiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjg0MDM1MTYwLCJleHAiOjE2ODQwMzg3NjB9.8seYwq4di6zdJlqEIz-POliK5hW3HlYOxjz1heKwwGA";

  const validateToken = await fetch(`${apiUrl}/users/auth/validate-token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
      console.log("response status code: ",response.status)
    if (response.status !== 200) {
        console.log(request.url)
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  });
}

export const config = {
  matcher: "/cart/:path*",
};
