import { useState } from "react"
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import ScreenHome from "./components/ScreenHome/ScreenHome";


function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
    <ScreenHome/>
    </div>
  );
}

export default App;
