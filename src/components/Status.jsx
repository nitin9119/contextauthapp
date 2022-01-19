import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

export const Status = () => {
  const { IsAuth, token } = useContext(AppContext);

  if (IsAuth && token === "QpwL5tke4Pnpja7X4") {
    return (
      <div>
        status: Login Succesfull.
        {<div></div>}
      </div>
    );
  } else {
    return (
      <div>User is not logged in or Invalid token please try again ...</div>
    );
  }
};
