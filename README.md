# 🧠⚛️ Redux Counter App

A simple React + Redux Toolkit counter application built as a quick reference for revising Redux concepts.

## 📌 Features

- Global state management with Redux Toolkit
- `createSlice()` to define reducers and actions
- Shared counter value across multiple components (Header and Footer)
- Action dispatch using `useDispatch()`
- State access using `useSelector()`
- Clean component structure with clear separation of concerns

---

## 🔄 Redux Flow Summary
Here's a quick recap of how Redux works in this app:

createSlice defines:
-Initial state
-Reducers (increment, decrement)
-Auto-generated actions
-The Redux store is configured with the slice reducer.
-Provider wraps the React app to pass the store globally.

Components use:
-useDispatch() to send actions
-useSelector() to read current state

---

### 🧪 Example Slice Code

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

---

### 📚 Useful Redux Concepts to Remember
-Store: The centralized state container
-Slice: Modular piece of state logic (state + reducers + actions)
-Reducer: Pure function to update state based on actions
-Dispatch: Method to send an action to the store
-Selector: Used to extract data from the store

---

### 📦 Built With
-React
-Redux Toolkit
-Create React App 
