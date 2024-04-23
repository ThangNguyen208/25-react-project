import { useState } from "react";

export const Accordian = () => {
  const [selected, setSelected] = useState(null);

  return <div className="wrapper">
    <div className="accordian">
      {data && data.length > 0 ? data.map((dataItem) => {<div className="title">
        <h3>{dataItem.question}</h3>
      </div>}):}
    </div>
  </div>;
};
