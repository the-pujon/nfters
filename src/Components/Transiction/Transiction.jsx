import { Stack, Typography } from "@mui/material";
import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { BiBarChartSquare } from "react-icons/bi";

const Transiction = () => {
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      spacing={5}
      padding={8}
      bgcolor="#f8f9fb"
      alignItems="center"
      justifyContent="center"
      margin="4rem 0"
    >
      <Typography fontSize={25} fontWeight={800}>
        The amazing nft art of the world here
      </Typography>
      <div>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography fontWeight={600} fontSize={25}>
            <FaRegCreditCard />
          </Typography>
          <Typography fontWeight={600} fontSize={20}>
            Fast Transaction
          </Typography>
        </Stack>
        <Typography marginLeft={4.5} fontSize={15} color="gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          quasi?
        </Typography>
      </div>
      <div>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography fontWeight={600} fontSize={25}>
            <BiBarChartSquare />
          </Typography>
          <Typography fontWeight={600} fontSize={20}>
            Growth Transaction
          </Typography>
        </Stack>
        <Typography marginLeft={4.5} fontSize={15} color="gray">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          quasi?
        </Typography>
      </div>
    </Stack>
  );
};

export default Transiction;
