import React from "react";
//import bg  from "../../assets"
import bg1 from "../../assets/1.jpeg";
import bg2 from "../../assets/2.jpg";
import bg3 from "../../assets/3.jpg";
import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import { FaEthereum } from "react-icons/fa";
import CollectionList from "./CollectionList/CollectionList";
const Collection = () => {
  return (
    <Grid container spacing={5} padding="5rem 2rem">
      {/* 1st grid */}
      <Grid item xs={12} md={4}>
        <img src={bg1} alt="" width={400} style={{ borderRadius: "1rem" }} />
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar>H</Avatar>
            <div>
              <Typography>Arkhan17</Typography>
              <Typography color="gray" fontSize={15}>
                10 in the stock
              </Typography>
            </div>
          </Stack>
          <Stack direction="column">
            <Typography fontSize={12}>Current Bid</Typography>
            <Typography>
              <FaEthereum />
              0.25 ETH
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      {/* 2nd grid */}
      <Grid item xs={12} md={4}>
        <Stack direction="column" spacing={2}>
          {/* 1st image */}
          <Stack direction="row" spacing={0.5}>
            <img
              src={bg1}
              alt=""
              width={150}
              style={{ borderRadius: "1rem" }}
            />
            <Stack direction="column" justifyContent="center" spacing={1}>
              <Typography fontWeight={600} fontSize={20}>
                The futr abstr
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="center"
              >
                <Avatar>H</Avatar>
                <Typography
                  sx={{
                    width: "6.3rem",
                    border: "1px solid #27b86a",
                    borderRadius: "6px",
                    padding: "2px 0",
                    color: "#27b86a",
                  }}
                >
                  <FaEthereum /> 0.25 ETH
                </Typography>
                <Typography color="gray">1 of 8</Typography>
              </Stack>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: "50px",
                  background: "#3d00b7",
                  //  display: "inline",
                  width: "7rem",
                }}
              >
                Place Bid
              </Button>
            </Stack>
          </Stack>

          {/* 2nd image */}
          <Stack direction="row" spacing={0.5}>
            <img
              src={bg2}
              alt=""
              width={150}
              style={{ borderRadius: "1rem" }}
            />
            <Stack direction="column" justifyContent="center" spacing={1}>
              <Typography fontWeight={600} fontSize={20}>
                The futr abstr
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="center"
              >
                <Avatar>H</Avatar>
                <Typography
                  sx={{
                    width: "6.3rem",
                    border: "1px solid #27b86a",
                    borderRadius: "6px",
                    padding: "2px 0",
                    color: "#27b86a",
                  }}
                >
                  <FaEthereum /> 0.25 ETH
                </Typography>
                <Typography color="gray">1 of 8</Typography>
              </Stack>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "50px",
                  border: "1px solid #3d00b7",
                  color: "#3d00b7",
                  //  display: "inline",
                  width: "7rem",
                }}
              >
                Place Bid
              </Button>
            </Stack>
          </Stack>

          {/* 3rd image */}
          <Stack direction="row" spacing={0.5}>
            <img
              src={bg3}
              alt=""
              width={150}
              style={{ borderRadius: "1rem" }}
            />
            <Stack direction="column" justifyContent="center" spacing={1}>
              <Typography fontWeight={600} fontSize={20}>
                The futr abstr
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="center"
              >
                <Avatar>H</Avatar>
                <Typography
                  sx={{
                    width: "6.3rem",
                    border: "1px solid #27b86a",
                    borderRadius: "6px",
                    padding: "2px 0",
                    color: "#27b86a",
                  }}
                >
                  <FaEthereum /> 0.25 ETH
                </Typography>
                <Typography color="gray">1 of 8</Typography>
              </Stack>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: "50px",
                  border: "1px solid #3d00b7",
                  color: "#3d00b7",
                  //  display: "inline",
                  width: "7rem",
                }}
              >
                Place Bid
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      {/* 3rd grid for data */}
      <Grid item xs={12} md={4}>
        <Typography fontSize={25} fontWeight={800}>
          Top Collection Over
        </Typography>
        <Typography fontSize={20} fontWeight={600} color="#5621c1">
          Last 7 days
        </Typography>
        <CollectionList />
      </Grid>
    </Grid>
  );
};

export default Collection;
