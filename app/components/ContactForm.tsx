// components/ContactForm.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    ok: boolean;
    message?: string;
  } | null>(null);

  function validateEmail(e: string) {
    // simple regex - okay for UI-level validation
    return /\S+@\S+\.\S+/.test(e);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);

    if (!validateEmail(email)) {
      setResult({ ok: false, message: "Please enter a valid email." });
      return;
    }
    if (message.trim().length < 5) {
      setResult({ ok: false, message: "Message is too short." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, message }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setResult({ ok: true, message: "Thanks! Your message has been sent." });
        setEmail("");
        setName("");
        setMessage("");
      } else {
        console.error("Send failed:", data);
        setResult({
          ok: false,
          message: data?.error || "Failed to send message.",
        });
      }
    } catch (err) {
      console.error(err);
      setResult({ ok: false, message: "Network error. Try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
      <Card>
        <CardHeader>
          <CardTitle> Send Proper Message</CardTitle>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleSubmit} className="max-w-lg flex flex-col border p-2 rounded-2xl w-[80%]">
      <label className="block mb-2">
        <span className="text-sm font-bold">Name (optional)</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Your name"
        />
      </label>

      <label className="block mb-2 font-bold">
        <span className="text-sm">Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="w-full p-2 border rounded"
          placeholder="you@example.com"
        />
      </label>

      <label className="block mb-2 font-bold">
        <span className="text-sm">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="w-full p-2 border rounded"
          placeholder="Write a short message..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60 cursor-pointer hover:bg-blue-700"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>

      {result && (
        <p className={`mt-3 ${result.ok ? "text-green-600" : "text-red-600"}`}>
          {result.message}
        </p>
      )}
    </form>
        </CardContent>
      </Card>
  );
}
