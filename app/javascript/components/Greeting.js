import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getMessageFromAPI } from "../redux/Greeting/greeting";

const Greeting = () => {
  const selected = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getMessageFromAPI());
  };

  return (
    <div>
      Greeting: {selected}
      <button onClick={handleClick}>Generate messages</button>
    </div>
  );
};

export default Greeting;
