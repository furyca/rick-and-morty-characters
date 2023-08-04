import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import Filters from "./Filters";

const DrawerComponent = () => {
  const [isOpen, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          display: { xs: "initial", md: "none" },
          position: "absolute",
          bottom: 60,
          left: '50%',
          ml: -6,
          bgcolor:'#e57373'
        }}
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Filters
      </Button>
      <Drawer anchor="bottom" open={isOpen} onClose={() => setOpen(false)}>
        <Filters
          smallScreen={true}
          drawerActive={isOpen}
          closeDrawer={closeDrawer}
        />
      </Drawer>
    </>
  );
};

export default DrawerComponent;
