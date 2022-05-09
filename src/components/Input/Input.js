import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";

const UserInput = ({ handleChange, username }) => {

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  return (
    <>
      <Box>
        <SearchIcon />
        <TextField
          sx={{
            width: "500px",
            backgroundColor: "white",
            borderRadius: "6px",
            marginTop: "16px",
            marginLeft: "22px",
          }}
          size="small"
          value={username}
          type="text"
          placeholder="Enter GitHub username"
          onChange={debounce(handleChange, 1000)}
          onKeyPress={handleKeyPress}
        />
      </Box>
    </>
  );
};

export default UserInput;
