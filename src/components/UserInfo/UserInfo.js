import React, { useCallback, useEffect, useMemo, useState } from "react";
import Repositories from "../Repositories/Repositories";
import User from "../User/User";
import ReactPaginate from 'react-paginate';
import { getUser, getUserRepos } from "../../api/users";
import useRequest from "../../hooks/useRequest";

import styled from "styled-components";

const UsersInfo = styled("div")`
  display: flex;
`;

const UserInfo = ({ username }) => {
  const requestUser = useCallback(() => getUser(username), [username]);
  //const requestRepos = useCallback(() => getUserRepos(username), [username]);
  const { data, loading, error } = useRequest(requestUser);
  // const {
  //   data: repositories,
  //   loading: load,
  //   error: err,
  // } = useRequest(requestRepos);
  const [repositories, setRepositories] = useState(null);
  const [load, setLoading] = useState(false);
  const [err, setError] = useState(false);

  // const items = useMemo(() => [...Array(data && data.public_repos).keys()],[data && data.public_repos]) ;
  // console.log(items);

  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setLoading(true);
    getUserRepos(username)
      .then((data) => {
        setRepositories(data);
      })
      .catch((error) => {
        setError(error);
      });

      // const endOffset = itemOffset + itemsPerPage;
      // setRepositories(items.slice(itemOffset, endOffset));
      // setPageCount(Math.ceil(items.length / itemsPerPage));  
  }, [username]);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   setItemOffset(newOffset);
  // };

  return (
    <>
      <UsersInfo>
        <User data={data} />
        <Repositories
          data={data}
          err={err}
          load={load}
          repositories={repositories}
        />
        {/* <ReactPaginate     
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        /> */}
      </UsersInfo>
    </>
  );
};

export default UserInfo;
