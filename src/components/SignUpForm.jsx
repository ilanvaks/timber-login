import { useState } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

export default function SignUpForm() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("") //only need quotes when controlling a form
  const [user, setUser] = useState()

  const handleSignup = async (e) => { // e is event
    e.preventDefault()
    const result = await createUserWithEmailAndPassword(auth, email, password)
    .catch(alert) 
    setUser(result.user)
  } 

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    .catch(alert)
    setUser(result.user)
  }

  if(user) {
    return <h2>Welcome User {user.email}</h2>
  }

  return (
    <>
    <Form onSubmit={handleSignup}>
     

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
            <Form.Control 
              value = {email}
              type= "email" 
              placeholder= "Enter Email" 
              onChange={ e => setEmail(e.target.value) }/>
              <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          placeholder="Enter Password" 
          onChange= { e => setPassword(e.target.value) } />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button
            variant="success"
            size="lg"
            type="submit">Submit</Button>
        </Form.Group>
    </Form>
    <Button onClick={signInWithGoogle} variant = "dark" size="lg"> Sign in with Google</Button>
    </>
  )
}