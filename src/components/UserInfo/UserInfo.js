import React, { useCallback } from "react";
import { getUser, getUserRepos } from "../../api/users";
import useRequest from "../../hooks/useRequest";
import { LinearProgress } from "@mui/material";
import styled from "styled-components";

const UsersInfo = styled("div")`
  display: flex;
`;

const UsersInfoData = styled("div")`
  display: flex;
  flex-direction: column;
`;

const UsersRepositories = styled("div")`
  display: flex;
  flex-direction: column;
`;

const UserInfo = ({ username }) => {
  const requestUser = useCallback(() => getUser(username), [username]);
  const requestRepos = useCallback(() => getUserRepos(username), [username]);
  const { data, loading, error } = useRequest(requestUser);
  const {
    data: repositories,
    loading: load,
    error: err,
  } = useRequest(requestRepos);

  return (
    <UsersInfo>
      <UsersInfoData>
        {data && (
          <>
            <img src={data.avatar_url} alt=""></img>
            <h2>{data.name}</h2>
            <a href={data.html_url} target="_blank" rel="noreferrer">
              {data.login}
            </a>
            <p>{data.followers}</p>
            <p>{data.following}</p>
          </>
        )}
      </UsersInfoData>
      <UsersRepositories>
        <h2>Repositories ({data && data.public_repos})</h2>
        {load && <LinearProgress />}
        {err && "some error..."}
        {repositories &&
          repositories?.map((repo) => (
            <div key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
              <p>{repo.description}</p>
            </div>
          ))}
      </UsersRepositories>
    </UsersInfo>
  );
};

export default UserInfo;
