import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import { Button } from "react-bootstrap"

export default function Home () {
  const [isMember, setMember] = useState(false)


  return (
    <>
   {
    (isMember === true)
      ? <Login/>
      : <Signup/>
   }  
    
    <Button onClick={ () => setMember(!isMember) }> Switch Form</Button>
    </>
  )
}