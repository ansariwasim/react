import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div class="fixed bottom-5 left-0 w-full text-white p-4 shadow-lg rounded-2xl ">
          <div className=" flex justify-center items-center gap-2">
            <button
              onClick={() => {
                setColor("red");
              }}
              className=" p-3 rounded-2xl bg-red-600 gap-5 w-26 font-semibold"
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className=" p-3 rounded-2xl bg-green-800 gap-5 w-26 font-semibold"
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className=" p-3 rounded-2xl bg-black gap-5 w-26 font-semibold"
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className=" p-3 rounded-2xl bg-blue-800 gap-5 w-26 font-semibold"
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className=" p-3 rounded-2xl bg-pink-800 gap-5 w-26 font-semibold"
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default App;
