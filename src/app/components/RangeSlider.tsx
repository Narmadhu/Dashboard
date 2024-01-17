"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { FaRegHandPointer } from "react-icons/fa";

export type CustomColor =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

const CustomSlider = styled(Slider)(({ color }) => ({
  color: color || "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
}));

function CustomComponent(props: any) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <FaRegHandPointer />
    </SliderThumb>
  );
}

CustomComponent.propTypes = {
  children: PropTypes.node,
};

export default function RangeSlider({ color }: { color: CustomColor }) {
  return (
    <Box sx={{ width: "100%" }}>
      <CustomSlider
        slots={{
          thumb: CustomComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={40}
        color={color}
        
      />
    </Box>
  );
}
