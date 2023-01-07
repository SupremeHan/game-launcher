import { useRef, useContext } from "react";
import { auth } from "../../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value,
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(emailRef.current!.value, passwordRef.current!.value);
    } catch (error) {
      console.error(error);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <button type="button" onClick={signIn}>
          Sign In
        </button>
        <button type="button" onClick={createAccount}>
          Create Account
        </button>
      </form>
    </div>
  );
};
