import React from "react";


const Heading = ({icon, title}) => {
  return (
    <div className="d-flex align-item-center gap-2">
      {icon}

      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
