import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const FilterArea = ({ filter, clear, list, type, comparison }) => {
  return (
    <Box
      sx={{ 
        p: "2rem 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "1rem",
          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          {type.toUpperCase()}
        </Typography>
        <Button
          color="error"
          size="small"
          onClick={clear}
          endIcon={<DeleteIcon />}
        >
          <Typography sx={{fontSize: {sm: '0', lg: '.75rem'} }}>Clear</Typography>
        </Button>
      </Box>
      <RadioGroup name={`${type}-group"`}>
        {list.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio onChange={filter} checked={comparison === item} />
            }
            label={item}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default FilterArea;
