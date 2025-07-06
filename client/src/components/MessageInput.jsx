// src/components/Chat/MessageInput.jsx
import React, { useState } from "react";
import api from "../api/axios.js";

const MessageInput = ({ receiverId, onMessageSent }) => {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    try {
      const res = await api.post("/messages/send", {
        senderId: 1, // TODO: replace with current userId
        receiverId,
        content: text,
      });
      onMessageSent(res.data);
      setText("");
    } catch (err) {
      console.error(err);
      alert("Message send failed");
    }
  };

  return (
    <div className="p-4 bg-white flex gap-2 border-t">
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
