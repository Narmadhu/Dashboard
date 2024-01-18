"use client";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function Chart() {
  const data = [
    { value: 20, /*  label: "Afternoon", */ color: "#C7CEFF" },
    { value: 30, /* label: "Evening", */ color: "#8593ED" },
    { value: 45, /* label: "Morning",  */ color: "#5A6ACF" },
  ];
  const size = {
    // width: 350,
    height: 200,
  };

  const getArcLabel = (params: any) => params.value;

  return (
    <PieChart
      series={[
        {
          data: [...data],
          innerRadius: 10,
          outerRadius: 87,
          cx: 100,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .MuiChartsLegend-root`]: {
          fill: "white",
          fontWeight: "bold",
        },
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
        },
        width: "100%",
      }}
      {...size}
    />
  );
}
