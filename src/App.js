import { Box, CssBaseline } from "@mui/material";
import CharacterList from "./components/CharacterList";
import Search from "./components/Search";
import Filters from "./components/Filters";
import { GET_CHARS } from "./queries";
import { useQuery } from "@apollo/client";
import { Context } from "./Context";
import { useContext } from "react";
import DrawerComponent from "./components/DrawerComponent";


/*
  TODO:
    -Filter Drawer
    -No result
*/

const mainContainer = {
  background: {xs: "#031a1f", sm:"fixed linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(header.jpg) center no-repeat"},
  backgroundSize: {sm: '100% 100%'} ,
  overflow: "auto",
  minHeight: "100vh",
  height: "100%",
};

function App() {
  const context = useContext(Context)

  const { loading, error, data } = useQuery(GET_CHARS, {
    variables: {
      page: context.page,
      gender: context.gender,
      species: context.species,
      name: context.name,
    },
  }
);

  return (
    <>
      <CssBaseline />
      <Box sx={mainContainer}>
        <Box
          sx={{
            minHeight: "100%",
            overflow: "hidden",
            width: '85%',
            m: '2rem auto',
          }}
        >
          <DrawerComponent />
          <Search />
          <Box sx={{
            background: "rgba(220, 220, 220, .8)",
            display: "flex",
            borderRadius: 1,
            height: '100%'
          }}>
            
            <Filters />
            <CharacterList loading={loading} error={error} data={data} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
