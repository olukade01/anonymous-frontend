import { useState, useEffect } from "react";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UserForm from "./components/UserForm";
import userServices from "./services/user";
import loginServices from "./services/login";
import MessageBox from "./components/MessageBox";
import MessageUser from "./components/MessageUser";
import messageServices from "./services/message";
import styled from "styled-components";
import Register from "./components/Register";

const Wrapper = styled.div`
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  min-height: 100vh;
  padding: 3rem 1rem;
`;
const Container = styled.div`
  background-color: #251433;
  margin: auto;
  max-width: 35rem;
  padding: 2rem;
  border-radius: 15px;
`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await userServices.getAll();
      return setUsers(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedInUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
      messageServices.setToken(user.token);
    }
  }, []);

  const navigate = useNavigate();

  const addUser = async (userObject) => {
    try {
      const user = await userServices.create(userObject);
      // window.localStorage.setItem("loggedInUser", JSON.stringify(user));
      // messageServices.setToken(user.token);
      // await messageServices.getAll();
      setUsers(users.concat(user));
      setUser(user);
      navigate("/message");
    } catch (error) {
      setMessage(error.response.data.error);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  const handleLogin = async (loginDetails) => {
    try {
      const user = await loginServices(loginDetails);
      window.localStorage.setItem("loggedInUser", JSON.stringify(user));
      messageServices.setToken(user.token);
      await messageServices.getAll();
      setUser(user);
      navigate("/message");
    } catch (error) {
      setMessage(error.response.data.error);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  const match = useMatch("/message/:name");

  const matchedUser = match
    ? users.find((user) => user.name === match.params.name)
    : null;

  const createMessage = async (message) => {
    const name = matchedUser.name;
    await messageServices.create(name, message);
    setMessage("Message sent successfully - now it's your turn to register ");
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const createMessages = async () => {
    const loggedUser = window.localStorage.getItem("loggedInUser");
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      console.log(user);
      setUser(user);
      userServices
        .getAll()
        .then((data) => {
          const userData = data.find((d) => d.name === user.name);
          console.log(userData);
          setMessages(userData.messages);
        })
        .catch((err) => console.log(err));
      messageServices.setToken(user.token);
    }
  };

  return (
    <Wrapper>
      <Container className="center">
        <Routes>
          <Route
            path="/sign-up"
            element={<UserForm addUser={addUser} message={message} />}
          />
          {users.map((user) => (
            <Route
              key={user.id}
              path={`/message/${user.name}`}
              element={
                <MessageUser
                  user={matchedUser}
                  createMessage={createMessage}
                  messages={message}
                />
              }
            />
          ))}

          <Route
            path="/message"
            element={
              <MessageBox
                user={user}
                messages={messages}
                handleLogout={handleLogout}
                createMessages={createMessages}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={<LoginForm createLogin={handleLogin} message={message} />}
          />
        </Routes>
      </Container>
    </Wrapper>
  );
};

export default App;
