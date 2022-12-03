import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";

type props = {
  setRoute: Dispatch<SetStateAction<string>>;
  cookie: number;
}

export default function ({setRoute}: props, {cookie}: props) {

  const addCookie: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    let i: number = 0
    cookie = cookie
    if (cookie == 0) {
      cookie = i + 1
      console.log(cookie)
      return
    }
    cookie = cookie + 1
    console.log(cookie)
    return
  }
  
    return <>
    <h1>Cookies</h1>
    <div>
      <label>Cookies: </label>{cookie}
    </div>
    <div className = "btn-teste">
      <button onClick={addCookie}>+ cookie</button>
      <button onClick={() => setRoute("teste")}>Voltar</button>
    </div>
  </>
}