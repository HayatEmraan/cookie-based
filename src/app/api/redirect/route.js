import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.redirect(new URL("/api/v1", req.url));
}
