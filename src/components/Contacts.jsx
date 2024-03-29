import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
export default function Contacts({ contacts, changeChat }) {
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(() => {
    (async function (){
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserImage(data.avatarImage);
    })();
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h10>ONECHAT</h10>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3></h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2></h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    justify-content: center;
    img {
      height: 1.1rem;
    }
    h10 {
      color: white;
      text-transform: uppercase;
      }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #560BAD;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color:#380770;
      min-height: 1.2rem;
cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 4rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }
  .current-user {
    background-color: #480CA8;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    .avatar {
      img {
        height: 3rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 100px) and (max-width: 1080px) {
      gap: 0.7rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
