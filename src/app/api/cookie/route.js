import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang");
  return NextResponse.json({
    message: "Cookie set successfully",
    version: "1.0",
    lang,
  });
}
