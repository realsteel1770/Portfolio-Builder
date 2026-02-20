import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "@/styles/chatbot.css"; // The scoped CSS from step 1

export default function ChatbotInterface() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [themeIndex, setThemeIndex] = useState(0);

  const handleSend = async () => {
    if (!message.trim()) return;
    const userText = message;
    setMessage("");
    setMessages(prev => [...prev, { sender: "user", text: userText }]);

    try {
        const response = await fetch('https://portfolio-builder-cva8.onrender.com/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: userText })
        });
        const data = await response.json();
        setMessages(prev => [...prev, { sender: "neil", text: data.reply }]);
        } catch (error) {
        setMessages(prev => [...prev, { sender: "system", text: "Connection Error" }]);
        }
  };

  return (
    // We wrap everything in this class to apply the specific Neil theme
    <div className={`neil-chatbot-theme theme-${themeIndex}`}>
      <div className="p-4">
        <Link to="/" className="inline-flex items-center text-sm mb-4 opacity-70 hover:opacity-100">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
        
        <div className="chat-container">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Ask Neil Armstrong</h1>
            <button onClick={() => setThemeIndex((themeIndex + 1) % 4)} className="mt-2 text-xs opacity-50">
              Toggle Accessibility Theme
            </button>
          </header>

          <div className="chatbox">
            <div className="messages-list h-96 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`message p-3 rounded-lg max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-600 ml-auto' : 'bg-gray-700'}`}>
                  <strong>{msg.sender === 'user' ? "You: " : "Neil: "}</strong>{msg.text}
                </div>
              ))}
            </div>
            
            <div className="flex gap-2 p-4 border-t border-white/10">
              <input 
                className="flex-1 p-2 rounded bg-black/20"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about the moon..."
              />
              <button onClick={handleSend} className="bg-emerald-600 px-6 rounded">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}