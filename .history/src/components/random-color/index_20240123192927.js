import { useState } from "react";

export const index = () => {
const [typeOfColor, setTypeOfColor] = useState('hex');
const [color, setColor] = useState('')

  return (
    <div className="container">
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Genarate Random Color</button>
    </div>
  );
};
