import { headers } from "next/headers";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const header = headers();
  const authorization = header.get("authorization");
  const token = authorization.replace("Bearer ", "");
  const auth = `Bearer ${token}`;
  return NextResponse.json(
    { message: auth },
    { headers: { authorization: auth } }
  );
}
