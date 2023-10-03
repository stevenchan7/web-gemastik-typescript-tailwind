import { useState } from "react"
import User from "./User";
import LoginRegisterButton from "./LoginRegisterButton";

export default function RightNavMenu() {
  const [isLogged, setIsLogged] = useState(false);
  return(
    <>
      { isLogged ? <User /> : <LoginRegisterButton /> }
    </>
  )
}