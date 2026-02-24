import { useState, useRef, useEffect } from "react";

const SUGGESTED = [
  { label: "Experience", icon: "💼", question: "What work experience do you have?" },
  { label: "Projects", icon: "🛠️", question: "What projects have you built?" },
  { label: "Skills", icon: "⚡", question: "What are your technical skills?" },
  { label: "Education", icon: "🎓", question: "Where are you studying?" },
  { label: "Contact", icon: "✉️", question: "How can I get in touch with you?" },
];

export function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  async function handleSend(text) {
    const userText = (text || input).trim();
    if (!userText || isLoading) return;
    setInput("");
    setIsLoading(true);
    setMessages(prev => [...prev, { sender: "user", text: userText }]);

    try {
      const response = await fetch("/.netlify/functions/Chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userText }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { sender: "leo", text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { sender: "leo", text: "Sorry, something went wrong. Try emailing me at leowsteel@gmail.com." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="Chat"
      className="scroll-mt-32"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 60px",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes chatFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes chatFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes chatTyping {
          0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
          30% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.15); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
        .chat-chip:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.3) !important;
          color: white !important;
          transform: translateY(-2px);
        }
        .chat-send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          background: rgba(255,255,255,0.95) !important;
        }
        .chat-input-wrap:focus-within {
          border-color: rgba(255,255,255,0.4) !important;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.05) !important;
        }
      `}</style>

      {/* Avatar */}
      <div style={{
        animation: "chatFloat 4s ease-in-out infinite",
        marginBottom: 24,
      }}>
        <div style={{
          width: 100, height: 100,
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid rgba(255,255,255,0.15)",
          boxShadow: "0 0 40px rgba(255,255,255,0.1)",
          animation: "chatPulse 3s ease-in-out infinite",
        }}>
          <img
            src="/profile pic.JPG"
            alt="Leo Steel"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Greeting */}
      <div style={{
        textAlign: "center",
        marginBottom: 40,
        animation: "chatFadeUp 0.6s ease",
      }}>
        <p style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.05em",
          marginBottom: 8,
          fontFamily: "'IBM Plex Mono', monospace",
        }}>
          Hey, I'm Leo 👋
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 6vw, 56px)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}>
          Ask me anything
        </h2>
      </div>

      {/* Messages (only shown after first message) */}
      {messages.length > 0 && (
        <div style={{
          width: "100%",
          maxWidth: 640,
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          maxHeight: 320,
          overflowY: "auto",
          scrollbarWidth: "none",
          padding: "0 4px",
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              animation: "chatFadeUp 0.3s ease",
            }}>
              <div style={{
                maxWidth: "80%",
                padding: "12px 16px",
                borderRadius: 18,
                borderBottomLeftRadius: msg.sender === "user" ? 18 : 4,
                borderBottomRightRadius: msg.sender === "user" ? 4 : 18,
                fontSize: 14,
                lineHeight: 1.6,
                background: msg.sender === "user"
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.9)",
                fontFamily: "'IBM Plex Mono', monospace",
              }}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{
                padding: "12px 18px",
                borderRadius: 18,
                borderBottomLeftRadius: 4,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                gap: 5,
                alignItems: "center",
              }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width: 6, height: 6,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.5)",
                    animation: `chatTyping 1.2s infinite ${i * 0.2}s`,
                  }} />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input Bar */}
      <div
        className="chat-input-wrap"
        style={{
          width: "100%",
          maxWidth: 640,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 100,
          padding: "10px 10px 10px 24px",
          marginBottom: 20,
          transition: "all 0.2s",
          animation: "chatFadeUp 0.7s ease",
        }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
          placeholder="Ask me anything..."
          style={{
            flex: 1,
            background: "none",
            border: "none",
            outline: "none",
            color: "white",
            fontSize: 15,
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.02em",
          }}
        />
        <button
          className="chat-send-btn"
          onClick={() => handleSend()}
          disabled={isLoading || !input.trim()}
          style={{
            width: 42, height: 42,
            borderRadius: "50%",
            border: "none",
            background: "white",
            color: "#0a0e1a",
            cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
            fontSize: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: input.trim() && !isLoading ? 1 : 0.3,
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          →
        </button>
      </div>

      {/* Category Chips */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        maxWidth: 640,
        animation: "chatFadeUp 0.8s ease",
      }}>
        {SUGGESTED.map(({ label, icon, question }) => (
          <button
            key={label}
            className="chat-chip"
            onClick={() => handleSend(question)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              padding: "14px 20px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              fontFamily: "'IBM Plex Mono', monospace",
              cursor: "pointer",
              transition: "all 0.2s",
              minWidth: 80,
            }}
          >
            <span style={{ fontSize: 20 }}>{icon}</span>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}