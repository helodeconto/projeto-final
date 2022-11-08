import { useState } from "react";
import Cadastro from "./components/cadastro";
import Login from "./components/login";
import Teste from "./components/teste";
import './App.css';
//import './index.css'

export default function () {
  const [route, setRoute] = useState("login")

  return <>
    {route == "login" ? <Login setRoute={setRoute} /> : ""}
    {route == "cadastro" ? <Cadastro setRoute={setRoute} /> : ""}
    {route == "teste" ? <Teste setRoute={setRoute}/> : ""}
  </>
}