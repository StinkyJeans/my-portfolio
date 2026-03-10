"use client";

import { useState } from "react";

const RECIPIENT_EMAIL = "anocnelvimjohn@gmail.com";

export default function ConctactForm({ isOpen, onClose, darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState(false);

  if (!isOpen) {
    return null;
  }

  const canSend = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  const handleSend = () => {
    if (!canSend) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const subject = encodeURIComponent(
      name ? `Contact from ${name}` : "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      [message, "", `From: ${name || "(not provided)"} <${email || "(not provided)"}>`].join("\n")
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  const clearError = () => setShowError(false);

  const inputClass = darkMode
    ? "w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
    : "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400";

  return (
    <div
      className="fixed inset-0 z-[65] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl ${
          darkMode ? "border-white/10 bg-slate-900" : "border-slate-200 bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold">Contact Us</h3>
        <p className={`mt-2 text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          Send a message and I&apos;ll get back to you as soon as I can.
        </p>

        {showError && (
          <p className="mt-4 rounded-lg border border-red-400/50 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Please fill in all required fields.
          </p>
        )}

        <div className="mt-6 space-y-4">
          <div>
            <label className={`mb-1 block text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              Name <span className="text-red-400" aria-hidden="true">*</span>
              {showError && !name.trim() && (
                <span className="ml-2 text-xs text-red-400">Required</span>
              )}
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => { setName(e.target.value); clearError(); }}
              className={inputClass}
            />
          </div>
          <div>
            <label className={`mb-1 block text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              Email <span className="text-red-400" aria-hidden="true">*</span>
              {showError && !email.trim() && (
                <span className="ml-2 text-xs text-red-400">Required</span>
              )}
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError(); }}
              className={inputClass}
            />
          </div>
          <div>
            <label className={`mb-1 block text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              Message <span className="text-red-400" aria-hidden="true">*</span>
              {showError && !message.trim() && (
                <span className="ml-2 text-xs text-red-400">Required</span>
              )}
            </label>
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => { setMessage(e.target.value); clearError(); }}
              rows={4}
              className={`${inputClass} min-h-[6rem] resize-y`}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={handleSend}
            className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] cursor-pointer"
          >
            Send
          </button>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              darkMode ? "border-white/20 hover:bg-white/10" : "border-slate-300 hover:bg-slate-100"
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
