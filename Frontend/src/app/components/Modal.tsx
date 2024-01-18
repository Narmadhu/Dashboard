"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  setModal,
}: {
  open: boolean;
  setModal: (val: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<
    { ID: number; FirstName: string; LastName: string; Email: string }[]
  >([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:8081/users");
    const data = await res.json();
    setLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <Modal
      open={open}
      onClose={() => setModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Users List
          </Typography>
          <ol className="list-decimal">
            {users.map((user) => (
              <li key={user.ID} className="mb-4">
                <div className="flex">
                  <span>Name: </span>
                  <span className="font-bold">{user.FirstName}</span>
                </div>
                <div className="flex">
                  <span>Email:</span>
                  <span className="font-bold">{user.Email}</span>
                </div>
              </li>
            ))}
          </ol>
        </Box>
      )}
    </Modal>
  );
}

{
  /* <Typography id="modal-modal-title" variant="h6" component="h2">
                    {user.FirstName} {user.LastName}
                  </Typography>
                  <Typography id="modal-modal-description">{user.Email}</Typography> */
}
