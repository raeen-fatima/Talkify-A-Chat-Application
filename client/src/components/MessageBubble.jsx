export default function MessageBubble({ message, isMine }) {
  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
        isMine
          ? "bg-primary text-white self-end"
          : "bg-white text-black self-start"
      }`}
    >
      {message.content}
    </div>
  );
}
