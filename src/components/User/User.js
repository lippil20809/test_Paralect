import React from "react";
import { Avatar } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import styled from "styled-components";

const UsersInfoData = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-top: 39px;
  > h2 {
    font-size: 26px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    line-height: 33.8px;
    letter-spacing: 1px;
    margin-top: 29px;
  }
  > a {
    margin-top: 12px;
    margin-bottom: 25px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
  }
  > div {
    display: flex;
    gap: 20px;
    > div {
      display: flex;
      > p {
        font-family: "Inter";
        margin-left: 9px;
        line-height: 24px;
        letter-spacing: 0.5px;
      }
    }
  }
`;

const User = ({ data }) => {
  return (
    <UsersInfoData>
      {data && (
        <>
          <Avatar
            sx={{ width: 280, height: 280 }}
            src={data.avatar_url}
            alt=""
          />
          <h2>{data.name}</h2>
          <a href={data.html_url} target="_blank" rel="noreferrer">
            {data.login}
          </a>
          <div>
            <div>
              <PeopleIcon />
              <p>{data.followers} followers</p>
            </div>
            <div>
              <PersonIcon />
              <p>{data.following} following</p>
            </div>
          </div>
        </>
      )}
    </UsersInfoData>
  );
};

export default User;