"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowUp, FaPaperPlane, FaRobot, FaTimes, FaEnvelope } from "react-icons/fa";

type ChatMessage = {
  id: number;
  sender: "user" | "bot";
  text: string;
};

const initialBotMessage: ChatMessage = {
  id: 1,
  sender: "bot",
  text: "Hi, I am Tech Assistant. Ask about services, pricing, timeline, or contact details.",
};

export default function ScrollToHomeButton() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getBotReply = (input: string) => {
    const value = input.toLowerCase();

    if (value.includes("price") || value.includes("cost") || value.includes("budget")) {
      return "Pricing depends on scope and timeline. Share your requirements and we will provide a tailored estimate.";
    }

    if (value.includes("service") || value.includes("what do you do")) {
      return "We support web development, cloud setup, automation, monitoring, and ongoing technical support.";
    }

    if (value.includes("time") || value.includes("timeline") || value.includes("delivery")) {
      return "Most projects start with a discovery phase, then sprint-based delivery with clear milestones.";
    }

    if (value.includes("contact") || value.includes("call") || value.includes("meeting")) {
      return "You can use the contact section on this page and our team will respond quickly with next steps.";
    }

    return "Thanks for your message. Tell me your project goal and I can guide you to the right next step.";
  };

  const submitChat = (e: FormEvent) => {
    e.preventDefault();
    const text = chatInput.trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    const botMessage: ChatMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotReply(text),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setChatInput("");
  };

  const handleEmailClick = () => {
    // First try to scroll on current page
    const contactFormSection = document.getElementById("contact-form");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If not found, navigate to contact page
      router.push("/contact#contact-form");
    }
  };

  return (
    <div
      className={`fixed bottom-12 right-8 z-70 flex flex-col gap-3 transition-all duration-300 sm:bottom-16 sm:right-10 ${
        isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-end gap-3">
        {isChatOpen && (
          <div className="absolute bottom-0 right-16 z-10 w-[min(24rem,calc(100vw-6.5rem))] rounded-2xl border border-[#12395c]/20 bg-white shadow-[0_20px_48px_rgba(18,57,92,0.24)]">
          <div className="flex items-center justify-between rounded-t-2xl bg-[#12395c] px-5 py-3.5 text-white">
            <div className="flex items-center gap-2.5 text-base font-semibold">
              <FaRobot />
              Tech Assistant
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsChatOpen(false)}
              className="rounded-md p-1 transition hover:bg-white/15"
            >
              <FaTimes />
            </button>
          </div>

          <div className="max-h-80 space-y-3.5 overflow-y-auto px-4 py-4 text-base">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] rounded-xl px-3.5 py-2.5 leading-relaxed ${
                  message.sender === "user"
                    ? "ml-auto bg-[#12395c] text-white"
                    : "bg-[#f1f5fb] text-[#1f3550]"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form onSubmit={submitChat} className="flex items-center gap-2.5 border-t border-[#dce5f4] px-4 py-4">
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              className="h-11 flex-1 rounded-lg border border-[#c9d8ee] px-3.5 text-base text-[#1f3550] outline-hidden transition focus:border-[#12395c]"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#12395c] text-white transition hover:bg-[#0f2f4d]"
            >
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>
        )}

        <button
          type="button"
          aria-label="Scroll to contact section"
          onClick={handleEmailClick}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#12395c]/35 bg-white text-[#12395c] shadow-[0_10px_24px_rgba(18,57,92,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#12395c]/60 hover:bg-[#e9f1fb]"
        >
          <FaEnvelope className="text-xl" />
        </button>

        <button
          type="button"
          aria-label="Open chat assistant"
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#12395c]/35 bg-white text-[#12395c] shadow-[0_10px_24px_rgba(18,57,92,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#12395c]/60 hover:bg-[#e9f1fb]"
        >
          {isChatOpen ? <FaTimes className="text-lg" /> : <FaRobot className="text-xl" />}
        </button>

        <button
          type="button"
          aria-label="Scroll to home section"
          onClick={handleClick}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#12395c]/35 bg-[#12395c] text-[#ffffff] shadow-[0_10px_24px_rgba(18,57,92,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#12395c]/55 hover:bg-linear-to-b hover:from-[#73bcfb] hover:to-[#12395c]"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>
    </div>
  );
}
