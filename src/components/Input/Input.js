import React from "react";
import { Paper, InputBase } from "@mui/material";
import styled from "styled-components";

const InputUser = styled("div")`
  width: 500px;
`;

const InputSvg = styled("svg")`
  position: relative;
  top: 1px;
  margin-left: 19px;
  margin-right: 6px;
`;

const UserInput = ({ handleChange, username }) => {
  return (
    <InputUser>
      <Paper
        sx={{
          maxWidth: "500px",
          height: "40px",
          marginTop: "16px",
          marginLeft: "22px",
          borderRadius: "6px",
        }}
      >
        <InputSvg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.23497 0C2.79706 0 0 2.79706 0 6.23497C0 9.67288 2.79706 12.4699 6.23497 12.4699C7.63766 12.4699 8.92987 11.9995 9.97123 11.216L12.4982 13.7422C12.6697 13.9138 12.8951 14 13.1202 14C13.3453 14 13.5707 13.9138 13.7422 13.7422C14.0862 13.3983 14.0862 12.8421 13.7422 12.4982L11.216 9.97123C11.9995 8.92987 12.4699 7.63766 12.4699 6.23497C12.4699 2.79706 9.67288 0 6.23497 0ZM1.75956 6.23497C1.75956 3.76687 3.76687 1.75956 6.23497 1.75956C8.70307 1.75956 10.7104 3.76687 10.7104 6.23497C10.7104 8.70307 8.70307 10.7104 6.23497 10.7104C3.76687 10.7104 1.75956 8.70307 1.75956 6.23497Z"
            fill="#808080"
          />
        </InputSvg>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            width: "200px",
            height: "40px",
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: "16.94px",
          }}
          placeholder="Enter GitHub username"
          inputProps={{ "aria-label": "Enter GitHub username" }}
          onKeyPress={handleChange}
          value={username}
        />
      </Paper>
    </InputUser>
  );
};

export default UserInput;
