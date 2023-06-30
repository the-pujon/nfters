import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FaEthereum } from "react-icons/fa";

const CollectionList = () => {
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {/* 1st table */}
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar>H</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={600}>Criptofunks</Typography>}
            secondary={
              <React.Fragment>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography color="black">
                    <FaEthereum /> 332879382
                  </Typography>
                  <Typography color="#1dcab3" fontWeight={600} fontSize={20}>
                    +26.52%
                  </Typography>
                </Stack>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* 2nd table */}
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar>H</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={600}>Criptofunks</Typography>}
            secondary={
              <React.Fragment>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography color="black">
                    <FaEthereum /> 332879382
                  </Typography>
                  <Typography color="#1dcab3" fontWeight={600} fontSize={20}>
                    +26.52%
                  </Typography>
                </Stack>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* 3rd table */}
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar>H</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={600}>Criptofunks</Typography>}
            secondary={
              <React.Fragment>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography color="black">
                    <FaEthereum /> 332879382
                  </Typography>
                  <Typography color="#1dcab3" fontWeight={600} fontSize={20}>
                    +26.52%
                  </Typography>
                </Stack>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* 4th table */}
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={600}>Criptofunks</Typography>}
            secondary={
              <React.Fragment>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography color="black">
                    <FaEthereum /> 332879382
                  </Typography>
                  <Typography color="red" fontWeight={600} fontSize={20}>
                    +26.52%
                  </Typography>
                </Stack>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default CollectionList;
