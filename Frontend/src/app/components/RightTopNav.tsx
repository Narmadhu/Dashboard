"use client";

import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import BasicModal from "./Modal";

export default function RightTopNav() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <FaUserLarge
        className="mr-2 cursor-pointer"
        onClick={() => setModalOpen(true)}
      />
      <IoNotificationsSharp />
      {modalOpen && <BasicModal open={modalOpen} setModal={setModalOpen} />}
    </>
  );
}
