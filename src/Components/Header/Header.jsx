import {
  Box,
  Container,
  Button,
  Typography,
  Stack,
  Divider,
  ListItem,
  MenuItem,
} from "@mui/material";
//import { Stack } from "@mui/material/Stack";

import React from "react";
import HeaderSlider from "./HeaderSlider/HeaderSlider";

const Header = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      //justifyContent="center"
      alignItems="center"
      height="88vh"
      padding=" 1rem"

      //sx={{
      //  display: "flex",
      //  padding: "0 1rem",
      //  alignItems: "center",
      //  height: "88vh",
      //}}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="h4" fontWeight={800} textTransform="uppercase">
          Discover, and collect digital art nfts
        </Typography>
        <Typography fontSize={15} sx={{ color: "gray" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt
          quos modi deleniti error consectetur iste veniam iure ipsam soluta.
        </Typography>
        <div>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "50px",
              background: "#3d00b7",
            }}
          >
            Explore
          </Button>
        </div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Stack direction="column">
            <Typography variant="h4" fontWeight={800}>
              98k+
            </Typography>
            <Typography fontSize={15} sx={{ color: "gray" }}>
              Artwork
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography variant="h4" fontWeight={800}>
              12k+
            </Typography>
            <Typography fontSize={15} sx={{ color: "gray" }}>
              Auction
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography variant="h4" fontWeight={800}>
              15k+
            </Typography>
            <Typography fontSize={15} sx={{ color: "gray" }}>
              Artist
            </Typography>
          </Stack>
        </Stack>
      </div>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderSlider />
      </section>
    </Stack>
  );
};

export default Header;
