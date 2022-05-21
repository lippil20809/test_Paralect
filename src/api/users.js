import axios from "axios";

export const getUser = async (username) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
  return data;
};

export const getUserRepos = async (username, page) => {
  const fixPer = 4;
  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${fixPer}`
  );
  return data;
};
