import { useState } from "react";

export default function InputBar({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="flex p-3 border-t bg-white">
      <input
        className="flex-1 p-2 border rounded-l"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-primary text-white px-4 rounded-r"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
