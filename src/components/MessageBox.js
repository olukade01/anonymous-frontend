import { useEffect } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: white;
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
const P = styled.p`
  color: #b0b7c0;
  line-height: 1.5rem;
`;
const Desc = styled(P)`
  text-align: center;
`;
const CenteredP = styled.p`
  color: #b0b7c0;
  text-align: center;
  margin-bottom: 3rem;
`;
const NewP = styled.p`
  color: #b0b7c0;
  text-align: center;
`;
const BorderedP = styled.p`
  color: #b0b7c0;
  margin-top: 3rem;
  border: 1px solid red;
  border-radius: 1rem;
  padding: 1rem;
`;
const Messageborder = styled.div`
  border-bottom: 2px solid #a976f4;
  padding-bottom: 1rem;
`;
const Message = styled.div`
  border: 1px solid #5fdee2;
  margin-top: 0.5rem;
  border-radius: 0.7rem;
  padding: 0.4rem;
`;

const MessageBox = ({ handleLogout, createMessages, user, messages }) => {
  useEffect(() => {
    createMessages();
  }, []);

  const url = "http://localhost:3000/message";
  if (!user.messages) {
    return null;
  }

  return (
    <div>
      <H1>
        Welcome <br /> {user.name}
      </H1>
      <a
        style={{
          display: "flex",
          fontSize: "13px",
          justifyContent: "center",
          color: "#5fdee2",
        }}
        href={`/message/${user.name}`}
      >{`${url}/${user.name}`}</a>
      <Desc>
        Share your profile link ❤️ to get responses from your friend. You can
        check out your responses below. 👌
      </Desc>
      <H1>My Answers</H1>
      <CenteredP>
        👇 Scroll 👇 down to check out the messages that you have received
      </CenteredP>
      {messages.length === 0 ? (
        <Messageborder>
          <BorderedP>
            Oops! 😅 No one has sent you a message!! Share your profile link and
            check back later again!
          </BorderedP>
        </Messageborder>
      ) : (
        <div>
          {messages.map((message) => (
            <Message key={message._id}>
              <P>
                <strong>Message:</strong> <br />
                {message.message}
                <br />- Anonymous {`[${message.createdAt}]`}
              </P>
            </Message>
          ))}
          <Messageborder>
            <Message>
              <NewP>
                You Have Reached The End! 🏁 <br />
                🙋 Ask your friends to send more messages
              </NewP>
            </Message>
          </Messageborder>
        </div>
      )}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default MessageBox;
