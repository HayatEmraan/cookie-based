import { headers } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const header = headers();
  return NextResponse.json({ header });
}
