import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useField from "../hooks/FieldHooks";

const H1 = styled.h1`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
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
const P = styled.p`
  color: #b0b7c0;
  line-height: 1.5rem;
`;
const Textarea = styled.textarea`
  background-color: transparent;
  font-size: 1.2rem;
  color: white;
  max-width: 100%;
  min-width: 100%;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  margin-bottom: 0.5rem;
  padding-bottom: 5rem;
`;

const MessagUser = ({ user, createMessage, messages }) => {
  const message = useField("text", `Leave A message for ${user.name} here...`);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage({ message: message.value });
    setTimeout(() => {
      navigate("/register");
    }, 3000);
  };

  return (
    <div>
      <H1>Say Something...</H1>
      <P style={{ color: "green", fontWeight: 900, textAlign: "center" }}>
        {messages}
      </P>
      <P style={{ fontSize: 15 }}>
        Say Something About Me <span style={{ color: "red" }}>*</span>
      </P>
      <form onSubmit={handleSubmit}>
        <Textarea required {...message}></Textarea>
        <Button type="submit">Send Message</Button>
      </form>
      <P style={{ fontSize: 12 }}>
        By using this service, you agree to our Privacy Policy, Terms of Service
        and any related policies.
      </P>
      <P>
        {`Say what you think about ${user.name} or Leave a feedback for ${user.name} anonymously using the form above.. 🥰`}{" "}
        <br />
        Thank You!! 😍😊
      </P>
    </div>
  );
};

export default MessagUser;
