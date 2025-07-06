// src/components/Chat/ContactList.jsx
import React, { useEffect, useState } from "react";
import api from "../../api/axios";

const ContactList = ({ setSelectedContact }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Example: fetch from your backend (adjust endpoint)
    api.get("/users")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-1/3 bg-secondary text-white p-4 overflow-y-auto">
      <h2 className="font-bold mb-4 text-lg">Contacts</h2>
      {contacts.map((c) => (
        <div
          key={c.id}
          onClick={() => setSelectedContact(c)}
          className="p-3 rounded cursor-pointer hover:bg-teritory transition"
        >
          {c.name}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
