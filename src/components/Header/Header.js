import React, { useState } from "react";
import Input from "../Input/Input";
import UserInfo from "../UserInfo/UserInfo";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

const UsersContainer = styled("div")`
  background: #0064eb;
`;

const UserContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
  width: 1366px;
  height: 72px;
  display: flex;
`;

const Header = () => {
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <UsersContainer>
        <UserContainer>
          <GitHubIcon
            sx={{
              fontSize: 44,
              color: "white",
              marginTop: "14px",
            }}
          />
          <Input handleChange={onChangeHandler} value={username} />
        </UserContainer>
      </UsersContainer>
      <UserInfo username={username} />
    </>
  );
};

export default Header;
