import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const P = styled.p`
  color: green;
  text-align: center;
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
const Card = styled.div`
  background: burlywood;
  border-radius: 5px;
  padding: 1rem 2rem;
`;
const H1 = styled.h1`
  text-align: center;
  color: tomato;
  border-bottom: 2px solid purple;
  padding-bottom: 0.8rem;
`;
const Ul = styled.ul`
  font-weight: 700;
  @media screen and (max-width: 425px) {
    margin-left: -1.5rem;
  }
`;

const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Card>
        <H1>How to Play?</H1>
        <Ul>
          <li>Register your Account NOW!!</li>
          <li>share your Dare Link with others</li>
          <li>
            Receive anonymous compliments and secret messages from your friends
          </li>
        </Ul>
      </Card>
      <P>
        Now it's your turn to create an account and dare your friends to tell
        you what they think about you!
      </P>
      <Button onClick={() => navigate("/sign-up")}>Register Account</Button>
    </div>
  );
};

export default Register;
