"use client";

export default function ConctactForm({ isOpen, onClose, darkMode }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[65] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl ${
          darkMode ? "border-white/10 bg-slate-900" : "border-slate-200 bg-white"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-2xl font-bold">Contact Me</h3>
        <p className={`mt-2 text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
          Want to work together or ask about my projects? Send me an email and I will reply as soon as I can.
        </p>
        <p className={`mt-4 text-sm font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>
          anocnelvimjohn@gmail.com
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="mailto:anocnelvimjohn@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
          >
            Send Email
          </a>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
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
