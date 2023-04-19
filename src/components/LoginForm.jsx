import { useState } from "react"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const firebaseConfig = {
  apiKey: "AIzaSyChI0yJXFfZ3XrLDTohR9H-fOuaTVKc-Hw",
  authDomain: "timber-login-iv.firebaseapp.com",
  projectId: "timber-login-iv",
  storageBucket: "timber-login-iv.appspot.com",
  messagingSenderId: "691141051977",
  appId: "1:691141051977:web:290440f8c016784b542198"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default function LoginForm() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [user, setUser] = useState()

  const handleLogin = async (e) => {
    e.preventDefault()
  const response = await signInWithEmailAndPassword(auth, email, password)
    .catch(err => alert(err.message))
    setUser(response.user)
 }
      if (user) {
        return <h2>Welcome User {user.uid}</h2>
      }
  return (
    <>
    <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type= "email" 
              placeholder= "Enter Email" 
              value={email} 
              onChange={ e => setEmail(e.target.value)}/>
              <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          placeholder="Enter Password" 
          value= {password}
          onChange= { e => setPassword(e.target.value) } />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button
            variant="success"
            size="lg"
            type="submit">Login</Button>
        </Form.Group>
    </Form>
    </>
  )
}