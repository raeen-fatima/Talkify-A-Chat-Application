// ChatContainer.jsx
import React, { useState } from "react";
import ContactList from "./ContactList";
import ChatWindow from "./ChatWindow";

const ChatContainer = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ContactList setSelectedContact={setSelectedContact} />
      <ChatWindow selectedContact={selectedContact} />
    </div>
  );
};

export default ChatContainer;
