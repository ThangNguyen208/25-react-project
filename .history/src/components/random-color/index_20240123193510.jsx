import { useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={}>Create RGB Color</button>
      <button>Genarate Random Color</button>
    </div>
  );
};
