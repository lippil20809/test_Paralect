import React, { useState } from "react";
import Input from "../Input/Input";
import UserInfo from "../UserInfo/UserInfo";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

const UsersContainer = styled("div")`
  background: #0064eb;
  > div {
    max-width: 1366px;
    margin: 0 auto;
    height: 72px;
    display: flex;
    padding-left: 41px;
    padding-right: 20px;
    @media (min-width: 320px) and (max-width: 575px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const UsersInfo = styled("div")`
  width: 100%;
  margin: 0 auto;
  max-width: 1366px;
  display: flex;
  @media (min-width: 320px) and (max-width: 575px) {
    min-width: 320px;
    max-width: 575px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    min-width: 576px;
    max-width: 767px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    min-width: 768px;
    max-width: 992px;
  } ;
`;

const InitialState = styled("div")`
  width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 220px;
  > h2 {
    font-size: 22px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 30.8px;
    letter-spacing: 1px;
    color: #808080;
    text-align: center;
    margin-top: 47px;
  }
  @media (min-width: 320px) and (max-width: 575px) {
    min-width: 320px;
    max-width: 575px;
    margin-top: 70px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    min-width: 576px;
    max-width: 767px;
    margin-top: 70px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    min-width: 768px;
    max-width: 992px;
  } ;
`;

const Header = () => {
  const [username, setUsername] = useState();

  const onChangeHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setUsername(e.target.value);
    }
  };

  return (
    <>
      <UsersContainer>
        <div>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <GitHubIcon
              sx={{
                fontSize: 44,
                color: "white",
                marginTop: "14px",
              }}
            />
          </a>
          <Input handleChange={onChangeHandler} value={username} />
        </div>
      </UsersContainer>
      <UsersInfo>
        {username ? (
          <UserInfo username={username} />
        ) : (
          <>
            <InitialState>
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.4937 0.916748C13.7366 0.916748 0.916748 13.7366 0.916748 29.4937C0.916748 45.2508 13.7366 58.0707 29.4937 58.0707C35.9227 58.0707 41.8453 55.9147 46.6182 52.3235L58.2002 63.9021C58.9863 64.6881 60.0194 65.0834 61.0511 65.0834C62.0828 65.0834 63.1159 64.6881 63.902 63.902C65.4784 62.3256 65.4783 59.7766 63.902 58.2002L52.3235 46.6182C55.9147 41.8453 58.0707 35.9227 58.0707 29.4937C58.0707 13.7366 45.2508 0.916748 29.4937 0.916748ZM8.98141 29.4937C8.98141 18.1816 18.1816 8.98141 29.4937 8.98141C40.8058 8.98141 50.006 18.1816 50.006 29.4937C50.006 40.8058 40.8058 50.006 29.4937 50.006C18.1816 50.006 8.98141 40.8058 8.98141 29.4937Z"
                  fill="#808080"
                />
              </svg>
              <h2>
                Start with searching
                <br /> a GitHub user
              </h2>
            </InitialState>
          </>
        )}
      </UsersInfo>
    </>
  );
};

export default Header;
