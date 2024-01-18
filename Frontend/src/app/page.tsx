import { IoBarChartSharp, IoPricetag } from "react-icons/io5";
import { PiFiles } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa";
import Chart from "./components/Chart";
import { CiExport, CiSearch } from "react-icons/ci";
import RangeSlider, { CustomColor } from "./components/RangeSlider";
import Navigation from "./components/Navigation";
import BasicLineChart from "./components/Graph";
import RightTopNav from "./components/RightTopNav";

export interface TableData {
  id: number;
  sNo: string;
  name: string;
  color: CustomColor;
  sales: string;
}

export default function Home() {
  const salesData = [
    {
      id: 1,
      img: <IoBarChartSharp color="white" />,
      amount: "$ 1k",
      total: "Total Sales",
      percent: "+8% from yesterday",
      backgroundColor: "bg-red-100",
      iconBgColor: "bg-red-400",
    },
    {
      id: 2,
      img: <PiFiles color="white" />,
      amount: "300",
      total: "Total Order",
      percent: "+5% from yesterday",
      backgroundColor: "bg-amber-100",
      iconBgColor: "bg-amber-400",
    },
    {
      id: 3,
      img: <IoPricetag color="white" />,
      amount: "5",
      total: "Total Sales",
      percent: "+1.2% from yesterday",
      backgroundColor: "bg-green-200",
      iconBgColor: "bg-green-400",
    },
    {
      id: 4,
      img: <FaUserPlus color="white" />,
      amount: "8",
      total: "New Customers",
      percent: "+0.5% from yesterday",
      backgroundColor: "bg-indigo-200",
      iconBgColor: "bg-indigo-400",
    },
  ];

  const tableData: TableData[] = [
    {
      id: 1,
      sNo: "01",
      name: "Home decor range",
      color: "primary",
      sales: "17",
    },
    {
      id: 2,
      sNo: "02",
      name: "Disney Princess Pink Bag",
      color: "warning",
      sales: "87",
    },
    {
      id: 3,
      sNo: "03",
      name: "Bathroom Essentials",
      color: "error",
      sales: "47",
    },
    {
      id: 4,
      sNo: "04",
      name: "Apple Smartwatches",
      color: "success",
      sales: "27",
    },
  ];

  return (
    <div className="grid grid-cols-8">
      <div className="h-full col-span-1 border-b-2 border-solid border-gray">
        <Navigation />
      </div>
      <div className="bg-gray-100 p-4 col-span-7">
        <div className="flex justify-between items-center px-4">
          <div className="w-1/2 relative">
            <input
              placeholder="search"
              className="text-sm p-3 rounded-md outline-none w-full"
            />
            <CiSearch className="absolute right-4 top-1/4 text-slate-500" />
          </div>
          <div className="flex">
            <RightTopNav />
          </div>
        </div>
        <div className="grid grid-cols-3 p-4 gap-4">
          <div className="w-42 bg-white h-full p-4 col-span-2 rounded-lg">
            <div className="flex justify-between mb-5">
              <h3 className="font-bold">Today&apos;s Sales</h3>
              <button className="shadow-md px-6 py-2 flex justify-around items-center w-50">
                <CiExport />
                <span>Export</span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {salesData.map((data) => (
                <div
                  key={data.id}
                  className={`p-2 ${data.backgroundColor} rounded-xl`}
                >
                  <p
                    className={`${data.iconBgColor} inline-block p-2 rounded-full`}
                  >
                    {data.img}
                  </p>
                  <p className="font-bold">{data.amount}</p>
                  <p>{data.total}</p>
                  <p className="text-blue-500">{data.percent}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 bg-white p-2 rounded-lg">
            <div className="flex justify-between px-5">
              <h3 className="font-bold">Order Time</h3>
              <button className="shadow-md px-4 py-2">View Report</button>
            </div>
            <Chart />
          </div>
        </div>
        <div className="px-4 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 col-span-1 w-full">
            <h3 className="font-bold">Top Products</h3>
            <div className="mt-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data) => (
                    <tr key={data.id}>
                      <td className="text-center">{data.sNo}</td>
                      <td className="text-center">{data.name}</td>
                      <td className="text-center">
                        <RangeSlider color={data.color} />
                      </td>
                      <td className="text-center">{data.sales}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 col-span-1 w-full">
            <BasicLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
