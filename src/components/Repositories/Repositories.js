import React from "react";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";

const UsersRepositories = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: 96px;
`;

const UserRepositorie = styled("div")`
  border-radius: 6px;
  width: 877px;
  margin-bottom: 24px;
  background: #ffffff;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 32px;
  > p {
    margin-top: 16px;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 19.36px;
    letter-spacing: 1px;
  }
  > a {
    font-size: 24px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    line-height: 29.05px;
    letter-spacing: 1px;
  }
`;

const DataRepositories = styled("h2")`
  font-size: 32px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  line-height: 41.6px;
  letter-spacing: 1px;
  margin-top: 28px;
  margin-bottom: 29px;
`;

const Repositories = ({ load, err, data, repositories }) => {
  return (
    <UsersRepositories>
      {load && <LinearProgress />}
      {/* {err && "some error..."} */}
      {data && (
        <DataRepositories>Repositories ({data.public_repos})</DataRepositories>
      )}
      {repositories &&
        repositories?.map((repo) => (
          <UserRepositorie key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </UserRepositorie>
        ))}
    </UsersRepositories>
  );
};

export default Repositories;
