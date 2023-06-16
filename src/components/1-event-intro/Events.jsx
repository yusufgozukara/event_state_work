import React from "react";

const Events = () => {
  let info = "EVENTS";

  const handleClick = () => {
    alert("buton clicked");
  };

  const handleClear = (text) => {
    alert(text);
  };

  const handleChange = (e) => {
    info = "HOOKS";
    console.log(info);
    console.log(e.target);
  };

  return (
    <div className="container text-center mt-4">
      <div className="display-4 text-danger m-4">EVENTS</div>
      <button onClick={handleClick} className="btn btn-warning">
        Click
      </button>
      <button
        onClick={() => handleClear("Clear button pressed")}
        className="btn btn-dark"
      >
        Clear
      </button>
      <button onClick={(e) => handleChange(e)} className="btn btn-danger">
        Change
      </button>
    </div>
  );
};

export default Events;
