// import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useField from "../hooks/FieldHooks";

const H1 = styled.h1`
  color: white;
  text-align: center;
  font-size: 3rem;
`;

const P = styled.p`
  color: #b0b7c0;
  text-align: center;
  /* margin-bottom: 3rem; */
`;

const Message = styled.p`
  color: red;
  text-align: center;
`;

const Label = styled.p`
  color: #b0b7c0;
  margin-bottom: 0.5rem;
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
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  font-size: 1.3rem;
  color: white;
  outline: none;
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
`;

const UserForm = ({ addUser, message }) => {
  const email = useField("text", "Enter your email");
  const name = useField("text", "Enter name");
  const password = useField("password", "Enter password");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ email: email.value, name: name.value, password: password.value });
    // email.reset()
    // name.reset()
    // password.reset()
  };

  return (
    <div>
      <H1>Register</H1>
      <Message>{message}</Message>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Your Email</Label>
          <Input {...email} />
        </div>
        <div>
          <Label>Name</Label>
          <Input {...name} />
        </div>
        <div>
          <Label>Password</Label>
          <Input {...password} />
        </div>
        <Button type="submit">Register Account</Button>
      </form>
      <P>
        Already Have an Account? <Link to="/">Login</Link> Here
      </P>
      <P>
        By using this service, you agree to our Privacy Policy, Terms of Service
        and any related policies.
      </P>
    </div>
  );
};

export default UserForm;
