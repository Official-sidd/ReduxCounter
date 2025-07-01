import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer style={styles.footer}>
      <p>Change the value of count from the footer component</p>
      <div>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginRight: "1rem" }}
        >
          ➖ Decrement
        </button>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    background: "#f9f9f9",
    borderTop: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "10vh",
  },
};

export default Footer;
