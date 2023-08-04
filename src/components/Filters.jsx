import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";
import DeleteIcon from '@mui/icons-material/Delete';
import FilterArea from "./FilterArea";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filters = ({smallScreen, drawerActive, closeDrawer}) => {
  const context = useContext(Context)
  const speciesList = ["Human", "Alien", "Humanoid", "Animal", "Robot", "Cronenberg", "Mytholog", "Disease", "Poopybutthole", "unknown"]
  const genderList = ["Female", "Male", "unknown", "Genderless"]
  const display = drawerActive ? 'initial' : 'none'
  
  const clearAllFilters = () => {
    context.setPage(1)
    context.setGender('')
    context.setSpecies('')
  }

  const clearGender = () => {
    context.setPage(1)
    context.setGender('')
  }

  const clearSpecies = () => {
    context.setPage(1)
    context.setSpecies('')
  }

  const handleGender = (e) => {
    context.setPage(1)
    context.setGender(e.target.value)
  }

  const handleSpecies = (e) => {
    context.setPage(1)
    context.setSpecies(e.target.value)
  }

  return (
    <Box
      sx={{
        display: {xs: display, md: 'initial' },
        p: "2rem 1rem",
        minWidth: '25%',
        userSelect: 'none'
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid gray",
          paddingBottom: "1rem",
        }}
      >
        <Typography variant="h6" sx={{fontWeight: 600}}>Filters</Typography>
        <Button color="error" size="small" sx={{textAlign: 'end' }} onClick={clearAllFilters} endIcon={<DeleteIcon />}>
          <Typography sx={{fontSize: {sm: '0', lg: '.75rem'} }}>Clear All</Typography>
        </Button>
        {smallScreen && <Button color="error" variant="contained" onClick={closeDrawer}><ExpandMoreIcon /></Button>}

      </Box>

      <FilterArea filter={handleGender} clear={clearGender} list={genderList} type='gender' comparison={context.gender} />
      <FilterArea filter={handleSpecies} clear={clearSpecies} list={speciesList} type='species' comparison={context.species}/>
    </Box>
  );
};

export default Filters;
