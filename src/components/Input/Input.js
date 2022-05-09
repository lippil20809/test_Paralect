import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const UserInput = ({ handleChange, username }) => {
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
          onKeyPress={handleChange}
        />
      </Box>
    </>
  );
};

export default UserInput;
