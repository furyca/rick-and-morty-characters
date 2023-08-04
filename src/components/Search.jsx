import { Box, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";

const Search = () => {
  const context = useContext(Context)

  const handleSearch = (e) => {
    e.preventDefault()
  }
  
  return (
    <Box sx={{ textAlign: "center", my: "2rem", p: {xs: 0, md: "2rem"}}}>
      <Typography variant="h4" color={"beige"}>Rick and Morty Characters</Typography>
      <Box component="form" onSubmit={handleSearch}>
        <TextField
          sx={{
            mt: "2rem",
            width: {xs: '90%', sm: '80%', md: "70%"},
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 1,
          }}
          variant="filled"
          label="Search here"
          onChange={e => context.setName(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Search;
