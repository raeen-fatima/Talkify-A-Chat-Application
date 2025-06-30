// src/components/Ping.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Ping() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/ping")
      .then(res => setMessage(res.data))
      .catch(err => setMessage("❌ Failed to connect to backend"));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-8 rounded-xl bg-gray-800 shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Ping Response</h1>
        <p className="text-lg text-green-400">{message}</p>
      </div>
    </div>
  );
}
