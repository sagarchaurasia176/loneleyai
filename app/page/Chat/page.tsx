 "use client";

import { useState, useRef } from "react";

export default function RealtimePage() {
  const [connected, setConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [status, setStatus] = useState("Disconnected");

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const dcRef = useRef<RTCDataChannel | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  const cleanup = () => {
    if (pcRef.current) {
      pcRef.current.close();
      pcRef.current = null;
    }
    if (dcRef.current) {
      dcRef.current.close();
      dcRef.current = null;
    }
    if (audioElement.current) {
      audioElement.current.srcObject = null;
    }
    setConnected(false);
    setStatus("Disconnected");
  };

  const startRealtime = async () => {
    setIsConnecting(true);
    setStatus("Getting ephemeral key...");

    try {
      // 1. Get ephemeral session token from backend
      const tokenResponse = await fetch("/api/realtime", { method: "POST" });
      if (!tokenResponse.ok) {
        throw new Error(`Failed to get token: ${tokenResponse.status}`);
      }
      const data = await tokenResponse.json();
      const EPHEMERAL_KEY = data.client_secret?.value;
      if (!EPHEMERAL_KEY) throw new Error("No ephemeral key in response");

      setStatus("Creating peer connection...");

      // 2. Create RTCPeerConnection
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });
      pcRef.current = pc;

      // 3. Remote audio setup
      audioElement.current = document.createElement("audio");
      audioElement.current.autoplay = true;
      pc.ontrack = (e) => {
        audioElement.current!.srcObject = e.streams[0];
      };

      // 4. Local microphone setup
      const ms = await navigator.mediaDevices.getUserMedia({ audio: true });
      ms.getTracks().forEach((track) => pc.addTrack(track, ms));

      // 5. Data channel
      const dc = pc.createDataChannel("oai-events");
      dcRef.current = dc;
      dc.onopen = () => {
        console.log("✅ Data channel open");
        setStatus("Connected");
        setConnected(true);

        // 👉 tell the session which voice + modalities to use
        dc.send(
          JSON.stringify({
            type: "session.update",
            session: {
              voice: "marin",
              modalities: ["audio", "text"],
            },
          })
        );

        // send a quick greeting
        dc.send(
          JSON.stringify({
            type: "conversation.item.create",
            item: {
              type: "message",
              role: "user",
              content: [
                {
                  type: "input_text",
                  text: "Hello AI, please say 'Testing audio playback'.",
                },
              ],
            },
          })
        );
        setTimeout(() => {
          dc.send(JSON.stringify({ type: "response.create" }));
        }, 200);
      };
      dc.onmessage = (e) => {
        console.log("📨 Event:", e.data);
      };

      // 6. SDP offer
      setStatus("Creating SDP offer...");
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      // 7. Send SDP to OpenAI
      const baseUrl = "https://api.openai.com/v1/realtime";
      const model = "gpt-audio"; // ✅ you have this

      const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${EPHEMERAL_KEY}`,
          "Content-Type": "application/sdp",
        },
      });

      if (!sdpResponse.ok) {
        throw new Error(`OpenAI SDP error: ${sdpResponse.status}`);
      }

      const answer: RTCSessionDescriptionInit = {
        type: "answer",
        sdp: await sdpResponse.text(),
      };
      await pc.setRemoteDescription(answer);
      setStatus("WebRTC connected ✅");
    } catch (err: any) {
      console.error("❌ Error:", err);
      setStatus(`Error: ${err.message}`);
      cleanup();
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto space-y-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">OpenAI Realtime Test</h1>
        <p className="text-sm text-gray-600 mb-4">Status: {status}</p>
      </div>

      <button
        onClick={connected ? cleanup : startRealtime}
        disabled={isConnecting}
        className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors ${
          connected
            ? "bg-red-600 hover:bg-red-700"
            : isConnecting
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isConnecting
          ? "Connecting..."
          : connected
          ? "Disconnect 🔴"
          : "Start Realtime Chat 🎤"}
      </button>

      <div className="text-xs text-gray-500 p-3 bg-gray-50 rounded">
        <p>• Allow microphone access</p>
        <p>• Check browser console for logs</p>
        <p>• AI should speak back after you connect</p>
      </div>
    </div>
  );
}
