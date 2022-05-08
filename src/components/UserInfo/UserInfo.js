import React from "react";
import styled from "styled-components";

const UsersInfo = styled("div")`
  display: flex;
`;

const UsersInfoData = styled('div')`
display: flex;
flex-direction: column;
`;

const UsersRepositories = styled('div')`
display: flex;
flex-direction: column;
`;

const UserInfo = ({ data, repositories }) => {
  return (
    <UsersInfo>
      <UsersInfoData>
        <img src={data.avatar_url}></img>
        <h2>{data.name}</h2>
        <a href={data.html_url} target="_blank">{data.login}</a>
        <p>{data.followers}</p>
        <p>{data.following}</p>
      </UsersInfoData>
      <UsersRepositories>
        {repositories.map((repo) => (
          <div key={repo.name}>
            <a href={repo.html_url} target="_blank">{repo.name}</a>
          </div>
        ))}
      </UsersRepositories>
    </UsersInfo>
  );
};

export default UserInfo;
