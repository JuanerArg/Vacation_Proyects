import "./App.css";
import React, { useState } from "react";

function App() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    if (/^(?:[01]*)$/.test(e.target.value)) {
      setBin(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const decimal = parseInt(bin, 2);
    setDec(decimal.toString());
  };

  return (
    <main>
      <input
        type="text"
        value={bin}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
      />
      <button type="button" onClick={handleSubmit} hidden />
      <p value={dec}>{dec}</p>
    </main>
  );
}


export default App
