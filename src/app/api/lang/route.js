import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json(
    {
      message: "Cookie set successfully",
    },
    {
      headers: {
        "Set-Cookie": "lang=en; max-age=60; path=/",
      },
    }
  );
}
