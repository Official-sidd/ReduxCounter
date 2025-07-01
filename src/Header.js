import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";

const Header = () => {
  //   const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <header style={styles.header}>
      <p>Change the value of count from the header component</p>
      <div>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginRight: "1rem" }}
        >
          ➖ Decrement
        </button>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    textAlign: "center",
    background: "#f0f0f0",
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "10vh",
  },
};

export default Header;
