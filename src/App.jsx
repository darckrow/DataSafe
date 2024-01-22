import { useState } from "react"
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <input type="text" placeholder="informe o nome do arquivo" />
      <input type="file"/>
      <input type="date"/>
      <input type="time" name="" id="" />
      <input type="checkbox"/>
      <span>deseja fazer o backup diariamente ?</span>
      <button type="submit">iniciar backup</button>
    </div>
  );
}

export default App;
