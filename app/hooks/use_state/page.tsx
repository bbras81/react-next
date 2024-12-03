"use client";

import { useState } from "react";

export default function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador usando o useState</h1>
      <p>Contage: {count}</p>
      <button onClick={increment}>Adicionar</button>
    </div>
  );
}
