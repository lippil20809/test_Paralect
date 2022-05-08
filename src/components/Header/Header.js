import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    async function fetchUser() {
      if (username) {
        try {
          const profile = await fetch(
            `https://api.github.com/users/${username}`
          );
          const profileJson = await profile.json();
          const repositories = await fetch(profileJson.repos_url);
          const reposJson = await repositories.json();
          if (profileJson) {
            setData(profileJson);
            setRepositories(reposJson);
          }
        } catch (e) {
          console.log("err");
        }
      }
    }
    fetchUser();
  }, [username]);

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
      <UserInfo data={data} repositories={repositories} />
    </>
  );
};

export default Header;
