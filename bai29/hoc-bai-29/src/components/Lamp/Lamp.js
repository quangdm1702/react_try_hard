import React, { useState } from "react";

const Lamp = () => {
  // let status = true;
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    // status = !status;

    setStatus(!status);
  };
  console.log(status);
  return (
    <>
      <button onClick={handleClick}>{status ? "Tắt đi" : "Bật lên"}</button>
      <div>{status ? "Đèn đang bật" : "Đèn đang tắt"}</div>
    </>
  );
};

export default Lamp;
