 // app/api/realtime/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const r = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-audio", // ✅ use model you have access to
        voice: "marin",     // pick a voice (marin, verse, alloy, etc.)
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      console.error("Realtime session error:", err);
      return NextResponse.json({ error: err }, { status: 500 });
    }

    const data = await r.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
