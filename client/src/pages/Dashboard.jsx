import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/Chat/ChatWindow";
import InputBar from "../components/InputBar";
import { getContacts, getMessages, sendMessage } from "../api/axios";

export default function Dashboard({ currentUserId }) {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getContacts(currentUserId).then((res) => setContacts(res.data));
  }, [currentUserId]);

  const handleSelect = (c) => {
    setSelectedContact(c);
    getMessages(currentUserId, c.id).then((res) => setMessages(res.data));
  };

  const handleSend = (text) => {
    sendMessage({
      senderId: currentUserId,
      receiverId: selectedContact.id,
      content: text,
    }).then(() => {
      getMessages(currentUserId, selectedContact.id).then((res) =>
        setMessages(res.data)
      );
    });
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        contacts={contacts}
        selectContact={handleSelect}
        selectedId={selectedContact?.id}
      />
      {selectedContact ? (
        <div className="flex-1 flex flex-col">
          <ChatWindow
            contact={selectedContact}
            messages={messages}
            currentUser={currentUserId}
          />
          <InputBar onSend={handleSend} />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a contact to start chatting
        </div>
      )}
    </div>
  );
}
