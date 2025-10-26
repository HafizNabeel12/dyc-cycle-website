import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Temporary placeholder - checkout functionality disabled
    return NextResponse.json({ error: "Checkout temporarily unavailable" }, { status: 503 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}