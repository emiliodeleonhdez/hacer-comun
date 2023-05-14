import { NextResponse } from "next/server";

export async function middleware(request) {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDUwYTM0Yzk2ODExM2E5MmQ4MDhlN2IiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjg0MDg4MTc5LCJleHAiOjE2ODQwOTE3Nzl9.MTBZioSNEj7YDIty2DW_BIhiMRhq2H5hlYnUyAAFT7Q";

  const validateToken = await fetch(`${apiUrl}/users/auth/validate-token`, {
    headers: {
      Authorization: `Bearer ${token}`,
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
