import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import { useState } from "react";
import { Status } from "./components/Status";
import { LoginForm } from "./components/LoginForm";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Trying to submit!");
  };

  return (
    <div className="App">
      <LoginForm />
      <Status />
    </div>
  );
}

export default App;
