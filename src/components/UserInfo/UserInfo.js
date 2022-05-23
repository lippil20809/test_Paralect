import React, { useCallback, useEffect, useState } from "react";
import Repositories from "../Repositories/Repositories";
import User from "../User/User";
import { getUser, getUserRepos } from "../../api/users";
import useRequest from "../../hooks/useRequest";
import { Pagination, CircularProgress, Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0064EB",
    },
  },
});

const UsersInfo = styled("div")`
  display: flex;
  width: 1366px;
  margin: 0 auto;
  margin-left: 51px;
  @media (min-width: 320px) and (max-width: 575px) {
    min-width: 320px;
    max-width: 575px;
    width: 0;
    flex-direction: column;
    margin-left: 0;
    margin: 0 auto;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    min-width: 576px;
    max-width: 767px;
    width: 0;
    flex-direction: column;
    margin-left: 0;
    margin: 0 auto;
  } ;
`;

const UsersRepositories = styled("div")`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
  }
`;

const RepositoriesNotFound = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 197px;
  > h2 {
    font-size: 22px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 30.8px;
    color: #808080;
    text-align: center;
    margin-top: 24px;
  }
  @media (min-width: 320px) and (max-width: 575px) {
    margin-top: 70px;
    margin-bottom: 40px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-top: 70px;
    margin-bottom: 40px;
  }
`;

const RepositoriesPagination = styled("div")`
  position: absolute;
  top: 735px;
  left: 877px;
  > h2 {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 21px;
    color: #808080;
    margin-top: 5px;
    margin-right: 10px;
  }
  @media (min-width: 320px) and (max-width: 575px) {
    position: initial;
    direction: flex;
    flex-direction: column;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    position: initial;
    direction: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    left: 295px;
  } ;
`;

const UserNotFound = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 212px;
  > h2 {
    font-size: 22px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 30.8px;
    color: #808080;
    text-align: center;
    margin-top: 24px;
  }
`;

const UserInfo = ({ username }) => {
  const requestUser = useCallback(() => getUser(username), [username]);
  let { data } = useRequest(requestUser);
  const [repositories, setRepositories] = useState([]);
  const [allRepositories, setAllRepositories] = useState([]);
  const [currentNumberStart, setCurrentNumberStart] = useState(null);
  const [currentNumberEnd, setCurrentNumberEnd] = useState(null);
  const [load, setLoading] = useState(false);
  const [err, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserRepos(username, 1)
      .then((data) => {
        setAllRepositories([...data]);
        setRepositories(data.slice(0, 4));
        setInitialNumPage(data);
      })
      .catch((error) => {
        setRepositories([]);
        setAllRepositories([]);
        setCurrentNumberStart(null);
        setCurrentNumberEnd(null);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
        setError(false);
      });
  }, [username]);

  const handleChange = async (event, value) => {
    let repo = null;
    try {
      repo = await getUserRepos(username, value).then((r) => r);
    } catch (error) {
      setError(error);
    }
    setRepositories(repo);
    if (value === 1) {
      setInitialNumPage(allRepositories);
    } else {
      setCurrentNumberStart(value * 4 - 3);
      setCurrentNumberEnd(repo.length < 4 ? data.public_repos : value * 4);
    }
  };

  const setInitialNumPage = (data) => {
    if (data.length === 0) {
      setCurrentNumberStart(0);
      setCurrentNumberEnd(0);
    }
    if (data.length >= 1) {
      setCurrentNumberStart(1);
    }
    if (data.length <= 4) {
      setCurrentNumberEnd(data.length);
    }
    if (data.length > 4) {
      setCurrentNumberEnd(4);
    }
  };

  return (
    <>
      <UsersInfo>
        {err && <Alert severity="error">{"error"}</Alert>}
        {load ? (
          <CircularProgress sx={{ margin: "auto", marginTop: "250px" }} />
        ) : data && data.login ? (
          <>
            <User data={data} />
            {data && data.public_repos ? (
              <UsersRepositories>
                <Repositories data={data} repositories={repositories} />
                <RepositoriesPagination>
                  <h2>
                    {currentNumberStart} - {currentNumberEnd} of{" "}
                    {data && data.public_repos} items
                  </h2>
                  <ThemeProvider theme={theme}>
                    <Pagination
                      count={Math.ceil(data.public_repos / 4)}
                      onChange={handleChange}
                      shape="rounded"
                      color="primary"
                    />
                  </ThemeProvider>
                </RepositoriesPagination>
              </UsersRepositories>
            ) : (
              <RepositoriesNotFound>
                <svg
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5 24C23.4919 24 17 30.4919 17 38.5V71.5C17 79.5081 23.4919 86 31.5 86H78.5C86.5081 86 93 79.5081 93 71.5V38.5C93 30.4919 86.5081 24 78.5 24H31.5ZM26 38.5C26 35.4624 28.4624 33 31.5 33H78.5C81.5376 33 84 35.4624 84 38.5V71.5C84 74.5376 81.5376 77 78.5 77H31.5C28.4624 77 26 74.5376 26 71.5V38.5ZM65.1984 48.6422C66.37 47.4706 66.37 45.5711 65.1984 44.3995C64.0268 43.228 62.1274 43.228 60.9558 44.3995L55.2989 50.0564L49.6421 44.3995C48.4705 43.228 46.571 43.228 45.3994 44.3995C44.2279 45.5711 44.2279 47.4706 45.3994 48.6422L51.0563 54.299L45.3994 59.9559C44.2279 61.1274 44.2279 63.0269 45.3994 64.1985C46.571 65.3701 48.4705 65.3701 49.6421 64.1985L55.2989 58.5417L60.9558 64.1985C62.1273 65.3701 64.0268 65.3701 65.1984 64.1985C66.37 63.0269 66.37 61.1274 65.1984 59.9559L59.5416 54.299L65.1984 48.6422Z"
                    fill="#808080"
                  />
                </svg>
                <h2>Repository list is empty</h2>
              </RepositoriesNotFound>
            )}
          </>
        ) : (
          <UserNotFound>
            <svg
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46 35.5C46 30.2533 50.2533 26 55.5 26C60.7467 26 65 30.2533 65 35.5C65 40.7467 60.7467 45 55.5 45C50.2533 45 46 40.7467 46 35.5ZM55.5 17C45.2827 17 37 25.2827 37 35.5C37 45.7173 45.2827 54 55.5 54C65.7173 54 74 45.7173 74 35.5C74 25.2827 65.7173 17 55.5 17ZM32 87.5C32 74.5213 42.5213 64 55.5 64C68.4787 64 79 74.5213 79 87.5C79 89.9853 81.0147 92 83.5 92C85.9853 92 88 89.9853 88 87.5C88 69.5507 73.4493 55 55.5 55C37.5507 55 23 69.5507 23 87.5C23 89.9853 25.0147 92 27.5 92C29.9853 92 32 89.9853 32 87.5Z"
                fill="#808080"
              />
            </svg>
            <h2>User not found</h2>
          </UserNotFound>
        )}
      </UsersInfo>
    </>
  );
};

export default UserInfo;
