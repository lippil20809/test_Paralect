import React, { useCallback } from "react";
import { getUser, getUserRepos } from "../../api/users";
import useRequest from "../../hooks/useRequest";
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
  const { data: repositories , loading: load, error: err } = useRequest(requestRepos);

  return (
    <UsersInfo>
      <UsersInfoData>
      {loading && 'loading...'}
      {error && 'some error...'}
        {data && (
          <>
            <img src={data.avatar_url} alt=''></img>
            <h2>{data.name}</h2>
            <a href={data.html_url} target="_blank"  without rel="noreferrer">
              {data.login}
            </a>
            <p>{data.followers}</p>
            <p>{data.following}</p>
          </>
        )}
      </UsersInfoData>
      <UsersRepositories>
        <h2>Repositories ({data && data.public_repos})</h2>
        {load && 'loading...'}
        {err && 'some error...'}
        {repositories &&
          repositories.map((repo) => (
            <>
              <div key={repo.name}>
                <a href={repo.html_url} target="_blank"  without rel="noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </div>
            </>
          ))}
      </UsersRepositories>
    </UsersInfo>
  );
};

export default UserInfo;
