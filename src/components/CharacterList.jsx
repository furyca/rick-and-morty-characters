import { Alert, Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";

const CharacterList = ({loading, error, data}) => {
  const context = useContext(Context)
  
  if (loading) return <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', pt: 20}} ><CircularProgress size='5rem' /></Box>
  if (error) { 
    return (
    <Stack sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', height: '100%', pt: 10}}>
      <Alert sx={{width: '60%'}} variant="filled" severity="error">Failed to fetch</Alert>
      <Button size="large" sx={{mt: 5}} variant="contained" onClick={() => context.setName(' ')}>Retry</Button>
    </Stack> 
    )}


  const { results, info } = data.characters;
  
  const handlePage = (event, value) => {
    context.setPage(value)
  }

  const chars = results.map(char => {
    return (
      <Card key={char.id} sx={{background: "transparent", width: '100%', height: '100%', mb: 2 }} >
        <CardMedia
        sx={{ maxHeight: '100%', maxWidth: '100%', height: 180}}
        image={`${char.image}`}
        title={char.name}
      />
        <CardContent>
          <Typography color="subtitle2" fontSize={'0.75rem'} fontWeight={600} sx={{color: '#4e4e4e'}}>{char.species.toUpperCase()}</Typography>
          <Typography variant="subtitle2" fontWeight={700}>{char.name}</Typography>
          <Typography fontSize={'0.9rem'}>{char.type}</Typography>
          <Typography fontSize={'0.9rem'}>{char.origin.name}</Typography>
        </CardContent>
      </Card>
    )})
    
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 5, pb: 5, alignItems: 'center', height: '100%', width: '100%'}}>
      {
        info.pages && <Pagination 
          color="primary" variant="outlined" shape="rounded" size={"large"} sx={{
            pt: 5,
            px: {xs: 2}
          }}
          count={info.pages} page={context.page} hideNextButton={!info.next} hidePrevButton={!info.prev}
          onChange={handlePage} 
        />
      }
      <Grid
        sx={{
          flexGrow: 3,
          display: "grid",
          gridTemplateColumns: {sx: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'} ,
          gap: 2,
          p: '0 1rem',
          height: '100%',
          width: '100%'
        }}
      >
        {chars}
      </Grid>
    </Box>
  );
};

export default CharacterList;
