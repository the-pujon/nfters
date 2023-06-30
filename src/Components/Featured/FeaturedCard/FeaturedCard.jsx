import { Avatar, Grid, Stack, Typography } from "@mui/material";
import React from "react";

import bg1 from "../../../assets/1.jpeg";
import bg2 from "../../../assets/2.jpg";
import bg3 from "../../../assets/3.jpg";

const FeaturedCard = () => {
  return (
    <Grid item xs={12} md={4}>
      <Stack direction="column" spacing={0}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <img
              src={bg1}
              alt=""
              width={250}
              height={305}
              style={{ borderRadius: "15px" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" spacing={2}>
              <img src={bg1} alt="" style={{ borderRadius: "15px" }} />
              <img src={bg2} alt="" style={{ borderRadius: "15px" }} />
              <img src={bg3} alt="" style={{ borderRadius: "15px" }} />
            </Stack>
          </Grid>
        </Grid>
        <Typography fontSize={18} fontWeight={600}>
          Amazing Collections
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar>P</Avatar>
            <Typography>By Arkhan</Typography>
          </Stack>
          <Typography
            color="blue"
            border="1px solid blue"
            borderRadius="10px"
            padding="0 5px"
            fontSize={10}
          >
            Total 54 items{" "}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default FeaturedCard;
