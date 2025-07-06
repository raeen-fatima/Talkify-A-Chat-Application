import React from "react";

export default function Sidebar({ contacts, selectContact, selectedId }) {
  return (
    <div className="w-1/4 bg-primary text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-light">
        Contacts
      </div>
      <div className="flex-1 overflow-y-auto">
        {contacts.map((c) => (
          <div
            key={c.id}
            onClick={() => selectContact(c)}
            className={`flex items-center gap-3 p-3 cursor-pointer ${
              selectedId === c.id ? "bg-secondary" : "hover:bg-forthary"
            }`}
          >
            <img
              src={c.profileImage}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <div>{c.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
