import axios from "axios";

export const getUser = async (username) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
  return data;
};

export const getUserRepos = async (username) => {
  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return data;
};
