import { useState } from "react";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);

  return <div className="wrapper">
    <div className="accordian">
      {data && data.length}
    </div>
  </div>;
};
