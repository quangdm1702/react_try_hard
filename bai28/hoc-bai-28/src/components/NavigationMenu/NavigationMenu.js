import React from "react";

const NavigationMenu = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.classList.add("input--active");
  };

  const handleBlur = (e) => {
    e.target.classList.remove("input--active");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <input
            className="active"
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button onClick={handleClick}>Search</button>
        </form>
      </div>
    </>
  );
};

export default NavigationMenu;
