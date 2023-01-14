import { useRef, useContext, useState } from "react";
import { auth } from "../../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import "./Login.scss";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const Login = () => {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

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
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="Login__wrapper">
      <form className="Login">
        <h3>Login into your account</h3>
        <div className="Login__input">
          <Input
            placeholder="Email"
            size="md"
            type="email"
            className="Login__input"
            ref={emailRef}
          />

          <InputGroup size="md" className="Login__input">
            <Input
              ref={passwordRef}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className="Login__buttons">
          <Button
            colorScheme={"blue"}
            size="sm"
            type="button"
            className="Login__button"
            onClick={signIn}
          >
            Sign In
          </Button>
          <Button
            colorScheme={"green"}
            size="sm"
            type="button"
            className="Login__button"
            onClick={createAccount}
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};
