import React from "react";
import { FaBlind } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const MainContent = () => {
  let name = "Đoàn Minh Quang";
  const css = {
    // color: "red",
    // backgroundColor: "blue",
  };
  return (
    <>
      <div className="box">
        <div className="test" style={css}>
          Xin chào {name}!
        </div>
        <div className="test" style={css}>
          Xin chào {name}!
        </div>
        <FaBlind />
        <FaComment />
      </div>
    </>
  );
};

export default MainContent;
