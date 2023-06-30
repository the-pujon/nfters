import React from "react";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import { FaEthereum } from "react-icons/fa";
const SliderCard = ({ bg }) => {
  return (
    <Container
      sx={{
        background: `url(${bg})`,
        //width: "30rem",
        width: "26rem",
        height: "30rem",
        borderRadius: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        padding: "2rem",
      }}
    >
      <div>
        <Typography fontSize={25} fontWeight={600}>
          Abstr Gradient NFT
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar>H</Avatar>
          <Typography>Arkhan17</Typography>
        </Stack>
      </div>
      <Stack
        direction="row"
        justifyContent="space-between"
        borderRadius={3}
        sx={{
          backdropFilter: "blur(4px)",
          background: "rgba(255,255,255,0.2)",
          padding: "2rem",
        }}
      >
        <Stack direction="column">
          <Typography fontSize={12}>Current Bid</Typography>
          <Typography>
            <FaEthereum />
            0.25 ETH
          </Typography>
        </Stack>
        <Stack direction="column">
          <Typography fontSize={12}>Ends in</Typography>

          <Stack direction="row" spacing={2}>
            <Typography>12h</Typography>
            <Typography>43m</Typography>
            <Typography>42s</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SliderCard;
