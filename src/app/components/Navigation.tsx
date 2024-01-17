import { VscGraph } from "react-icons/vsc";
import { MdShoppingCart } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { RiWallet3Fill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";

export default function Navigation() {
  const nav1 = [
    {
      id: 1,
      icon: <VscGraph />,
      linkName: "Dashboard",
    },
    {
      id: 2,
      icon: <MdShoppingCart />,
      linkName: "Food Order",
    },
    {
      id: 3,
      icon: <FaRegFileAlt />,
      linkName: "Manage Menu",
    },
    {
      id: 4,
      icon: <BiMessageRoundedDots />,
      linkName: "Customer Review",
    },
  ];
  const nav2 = [
    {
      id: 1,
      icon: <IoIosSettings />,
      linkName: "Settings",
    },
    {
      id: 2,
      icon: <RiWallet3Fill />,
      linkName: "Payment",
    },
    {
      id: 3,
      icon: <FaUserLarge />,
      linkName: "Accounts",
    },
    {
      id: 4,
      icon: <BiMessageRoundedDots />,
      linkName: "Help",
    },
  ];
  return (
    <nav>
      <h3 className="font-bold text-indigo-700 text-center p-4 mb-1 border-b-2 border-solid border-gray uppercase">
        Good Food
      </h3>
      <h3 className="uppercase px-4 mt-4">menu</h3>
      <ul className="mt-4">
        {nav1.map((n) => (
          <li
            key={n.id}
            className="flex items-center p-4 my-4 hover:bg-slate-100 hover:text-indigo-700 hover:font-bold cursor-pointer"
          >
            {n.icon} <span className="ml-2">{n.linkName}</span>{" "}
          </li>
        ))}
      </ul>
      <h3 className="uppercase px-4">others</h3>
      <ul className="mt-4">
        {nav2.map((n) => (
          <li
            key={n.id}
            className="flex items-center p-4 my-4 hover:bg-slate-100 hover:text-indigo-700 hover:font-bold cursor-pointer"
          >
            {n.icon} <span className="ml-2">{n.linkName}</span>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}
