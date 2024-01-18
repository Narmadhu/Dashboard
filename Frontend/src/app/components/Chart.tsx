"use client";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function Chart() {
  const data = [
    { value: 20, label: "Afternoon", color: "#C7CEFF" },
    { value: 30, label: "Evening", color: "#8593ED" },
    { value: 45, label: "Morning", color: "#5A6ACF" },
  ];
  const size = {
    width: 350,
    height: 200,
  };
  return (
    <PieChart
      series={[
        {
          data: [...data],
          innerRadius: 60,
          outerRadius: 87,
          //   paddingAngle: 0,
          //   cornerRadius: 0,
          //   startAngle: -205,
          //   endAngle: 181,
          cx: 100,
          //   cy: 150,
        },
      ]}
      // sx={{
      //   width: "100%",
      // }}
      sx={{
        [`& .MuiChartsLegend-root`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}
