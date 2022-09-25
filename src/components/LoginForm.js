import { Link } from "react-router-dom";
import useField from "../hooks/FieldHooks";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
`;

const P = styled.p`
  color: #b0b7c0;
  text-align: center;
  margin-bottom: 3rem;
`;

const Message = styled.p`
  color: red;
  text-align: center;
`;

const Label = styled.p`
  color: #b0b7c0;
`;

const Input = styled.input`
  background-color: transparent;
  font-size: 1.2rem;
  color: white;
  width: 100%;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  font-size: 1.3rem;
  color: white;
  outline: none;
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
`;

const LoginForm = ({ createLogin, message }) => {
  const email = useField("text", "Enter your email");
  const password = useField("password", "Enter password");

  const handleSubmit = (e) => {
    e.preventDefault();
    createLogin({ email: email.value, password: password.value });
    // email.reset()
    // password.reset()
  };

  return (
    <div>
      <H1>Login</H1>
      <P>
        Recieve anonymous compliments from your friends and send anonymous
        messages to your friends for free.
      </P>
      <Message>{message}</Message>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Your Email</Label>
          <Input {...email} />
        </div>
        <div>
          <Label>Your Password</Label>
          <Input {...password} />
        </div>
        <Button type="submit">Login</Button>
      </form>
      <P>
        Don't Have an Account? <Link to="/sign-up">Register</Link> here
      </P>
    </div>
  );
};

export default LoginForm;
