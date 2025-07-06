import MessageBubble from "../MessageBubble";

export default function ChatWindow({ contact, messages, currentUser }) {
  return (
    <div className="flex-1 flex flex-col bg-light">
      <div className="p-4 bg-secondary text-white font-bold">
        {contact?.name || "Select a contact"}
      </div>

      <div className="flex-1 p-4 space-y-2 overflow-y-auto flex flex-col">
        {messages.map((m) => (
          <MessageBubble
            key={m.id}
            message={m}
            isMine={m.senderId === currentUser}
          />
        ))}
      </div>
    </div>
  );
}
