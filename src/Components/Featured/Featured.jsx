import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import FeaturedCard from "./FeaturedCard/FeaturedCard";

const Featured = () => {
  return (
    <Box bgcolor="#f8f9f8" padding="5rem 2rem">
      <Typography fontWeight={800} fontSize={25} marginBottom={3}>
        Collection Featured NFTS
      </Typography>
      <Grid container spacing={5}>
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </Grid>
    </Box>
  );
};

export default Featured;
