import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <h1 style={{fontSize : "5rem"}}>Count: {count}</h1>
        <div>
          <button
            onClick={() => dispatch(decrement())}
            style={{ marginRight: "1rem" }}
          >
            ➖ Decrement
          </button>
          <button onClick={() => dispatch(increment())}>➕ Increment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
