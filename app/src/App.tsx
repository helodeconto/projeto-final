import { useState } from "react";
import Cadastro from "./components/cadastro";
import Login from "./components/Login";
import Teste from "./components/teste";
import Game from "./components/game";
import './App.css';
//import './index.css'

export default function () {
  const [route, setRoute] = useState("login")

  return <>
    {route == "login" ? <Login setRoute={setRoute} /> : ""}
    {route == "cadastro" ? <Cadastro setRoute={setRoute} /> : ""}
    {route == "teste" ? <Teste setRoute={setRoute}/> : ""}
    {route == "cookie" ? <Game setRoute={setRoute} cookie={0}/> : ""}
  </>
}