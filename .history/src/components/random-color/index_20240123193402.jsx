import { useState } from "react";

export const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      background: color }}>
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Genarate Random Color</button>
    </div>
  );
};
