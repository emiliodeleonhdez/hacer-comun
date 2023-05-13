import { NextResponse } from "next/server";
import instance from "./hacer-comunAPI/http-instance";

export function middleware(request) {
  const apiUrl = `https://api-rest-hacer-comun-production.up.railway.app`;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDUwYTM0Yzk2ODExM2E5MmQ4MDhlN2IiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjgzOTU3NDczLCJleHAiOjE2ODM5NjEwNzN9.nc8eXZzSGKRHWnfOiKNN4oB6if7dm4RpE8VzknMSLSU";
  const validateToken = fetch(`${apiUrl}/users/validate-token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return NextResponse.next();
}

export const config = {
  matcher: "/cart/:path*",
};
