"use client";
import React, {
  useState,
  // useRef
} from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

// ─── Replace these three values with your own from emailjs.com ───────────────
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

const socials = [
  {
    label: "LinkedIn",
    value: "waheed-ahmad-khan-3570491ba",
    href: "https://www.linkedin.com/in/waheed-ahmad-khan-3570491ba/",
    icon: <FaLinkedin className="text-[#0a66c2] text-xl" />,
  },
  {
    label: "GitHub",
    value: "WaheedAKhan947",
    href: "https://github.com/WaheedAKhan947",
    icon: <FaGithub className="text-black text-xl" />,
  },
  {
    label: "Twitter / X",
    value: "@WaHeeD_A_kHaN",
    href: "https://twitter.com/WaHeeD_A_kHaN",
    icon: <FaTwitter className="text-[#1da1f2] text-xl" />,
  },
  {
    label: "Email",
    value: "waheedakhan947@gmail.com",
    href: "mailto:waheedakhan947@gmail.com",
    icon: <FaEnvelope className="text-[#4E9FA1] text-xl" />,
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  // const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in your name, email and message.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setErrorMsg("");
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Contact",
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please email me directly at waheedakhan947@gmail.com",
      );
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-[#4E9FA1] focus:ring-1 focus:ring-[#4E9FA1] transition-all";

  return (
    <section className="min-h-screen bg-[#f8f3ee] py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-[#4E9FA1] uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Contact
          </h1>
          <div className="w-16 h-1 bg-[#4E9FA1] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-5 max-w-lg mx-auto text-sm md:text-base">
            Have a project in mind, an opportunity to discuss, or just want to
            say hello? My inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: socials */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-black mb-4">Find me on</h2>
              <div className="flex flex-col gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#4E9FA1]/10 border border-transparent hover:border-[#4E9FA1]/30 transition-all group"
                  >
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">
                        {s.label}
                      </p>
                      <p className="text-sm font-semibold text-black group-hover:text-[#4E9FA1] transition-colors">
                        {s.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#4E9FA1] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-1">Based in</h3>
              <p className="text-white/90 text-sm">Rawalpindi, Pakistan</p>
              <p className="text-white/70 text-xs mt-1">
                Open to remote and relocation opportunities
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
              <h2 className="text-lg font-bold text-black mb-6">
                Send a message
              </h2>

              {/* Success state */}
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <FaCheckCircle className="text-[#4E9FA1] text-5xl" />
                  <h3 className="text-xl font-bold text-black">
                    Message sent!
                  </h3>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-[#4E9FA1] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                        Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, collaboration..."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error message */}
                  {(errorMsg || status === "error") && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <FaExclamationCircle className="text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-red-600">{errorMsg}</p>
                    </div>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    size="lg"
                    className="w-full bg-[#4E9FA1] hover:bg-[#3d8a8c] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
