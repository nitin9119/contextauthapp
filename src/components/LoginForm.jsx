//import { Form } from "./Form";
import { AppContext } from "../context/AppContextProvider";
import { useContext, useState } from "react";

export function LoginForm() {
  const { setIsAuth, setToken } = useContext(AppContext);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  console.log(user.email);
  return (
    <div className="App">
      <h1>Login page</h1>
      <form
        title="LOGIN"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <div>
          <button
            onClick={() => {
              fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                  "content-type": "application/json",
                },
              })
                .then((d) => d.json())
                .then((res) => {
                  setIsAuth(true);
                  setToken(res.token);
                });
            }}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
