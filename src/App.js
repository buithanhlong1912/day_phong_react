import "./App.css";
import { useState, useEffect } from "react";

const Hello = ({ props }) => {
  return <h1>{props}</h1>;
};

function App() {
  // Functional component
  const [state, setState] = useState("Hello");
  const [count, setCount] = useState(-1);
  // useState, useEffect, useReducer
  // useContext, useReducer, useRef, useCallback,...

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    count <= 0 ? setCount(count) : setCount(count - 1);
  };

  useEffect(() => {
    console.log("render");
    // if (count <= 0) setCount(count);
    // setCount(0);
  });
  // Dependencies array
  // TH1: không có thằng [] => Chạy thằng effect mỗi khi mà component re-render
  // TH2: [] => Chỉ chạy 1 lần đầu khi thằng component render
  // TH3: [] có giá trị bên trong => Chạy thằng effect mỗi khi mà giá trị bên trong array thay đổi

  return (
    // JSX: JavaScript XML
    <div className="App">
      <header className="App-header">
        <Hello props={count} />
        <a
        // className="App-link"
        // href="https://reactjs.org"
        // target="_blank"
        // rel="noopener noreferrer"
        >
          Tran Manh Phong
        </a>
        <button onClick={handleAdd}>Them</button>
        <button onClick={handleSubtract}>Bot</button>
      </header>
    </div>
  );
}

// class App extends React.Component {
//   compon
// } // Class component

export default App;
