"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("");
  const handleCookie = () => {
    fetch("/api/lang")
      .then((res) => res.json())
      .then((res) => {
        setLang(res.message);
      });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={handleCookie}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Cookie set
      </button>
      <p>{lang && lang}</p>
    </main>
  );
}
