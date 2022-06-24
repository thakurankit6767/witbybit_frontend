import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  styled,
  Box,
  Icon,
} from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import style from "../Component/Css/allUser.css";

import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import SchoolSpace from "./SchoolSpace";
import RemoveUser from "./RemoveUser";

// const Container=styled()`
// width:40%;
// margin:50px solid red
// `

const StyledTable = styled(Table)`
  width: 100%;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 14px;
    font-family: Montserrat;
    background: #e5e5e5;
    color: #242424;
    fontweight: 500;
    lineheight: "18px";
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 14px;
    font-family: Montserrat;
    background: white;
    color: #242424;
    fontweight: 400;
    lineheight: "18px";
  }
`;

const Boxone = styled("div")({
  backgroundColor: "white",
  height: "auto",
  width: "100%",
});

const ButtonAddUser = styled("button")({
  height: "auto",
  width: "4%",
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };
  const xyz = (x) => {
    if (+x >= 30) {
      console.log(x, "napass");
      return true;
    } else {
      console.log(x, "pass");
      return false;
    }
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex" }}>
          <SchoolSpace />

          <Box style={{ width: "80%", margin: "15px" }}>
            <Boxone
              variant="contained"
              style={{
                display: "flex",
                justifyContent: "space-between",
                // border: "1px solid red",
              }}
            >
              <div>
                <div
                  style={{
                    position: "absolute",
                    left: "312px",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#242424",
                  }}
                >
                  Students
                </div>
              </div>

              <Button
                style={{
                  color: "white",
                  width: "110px",
                  height: "42px",
                  backgroundColor: "#2CA4D8",
                  boxShadow: "0px 2px 20px rgba(56, 181, 235, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                  marginBottom: "5px",
                }}
              >
                <AddUser />
              </Button>
            </Boxone>
            <StyledTable>
              <TableHead
                style={{
                  width: "10%",
                  // border: "2px solid yellow",
                  color: "black",
                  backGroundColor: "white",
                }}
              >
                <THead>
                  <TableCell style={{ width: "10%" }}>No</TableCell>
                  <TableCell style={{ width: "30%" }}>Student Name</TableCell>
                  <TableCell style={{ width: "30%" }}>Class</TableCell>
                  <TableCell style={{ width: "30%" }}>Result</TableCell>
                  <TableCell style={{ width: "30%" }}>Score</TableCell>
                  <TableCell style={{ width: "30%" }}>Grade</TableCell>
                  <TableCell style={{ width: "30%" }}></TableCell>
                </THead>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TRow key={user.id}>
                    <TableCell style={{ width: "10%" }}>{user._id}</TableCell>
                    {/* change it to user.id to use JSON Server */}
                    <TableCell>{user.studentName}</TableCell>
                    <TableCell>{user.classNo}</TableCell>
                    {}
                    <TableCell>
                      {xyz(+user.score) ? (
                        <div className="passed">Passed</div>
                      ) : (
                        <div className="failed">Failed</div>
                      )}
                    </TableCell>
                    <TableCell>{user.score}</TableCell>
                    <TableCell>
                      {xyz(+user.score) ? (
                        <div className="average">Average</div>
                      ) : (
                        <div className="poor">Poor</div>
                      )}
                    </TableCell>
                    <TableCell>
                      {user.grade}
                      <div style={{ display: "flex", gap: "px" }}>
                        <Button>
                          <Link
                            to={{
                              pathname: "/edit/:id",
                              state: { EditUser: true },
                            }}
                          ></Link>
                          <EditUser to={`/edit/${user._id}`} />
                        </Button>
                        <Button>
                          <RemoveUser />
                        </Button>
                      </div>
                    </TableCell>
                    {/* <Button
                        color="primary"
                        variant="contained"
                        style={{ marginRight: 10 }}
                        component={Link}
                        to={`/edit/${user._id}`}
                      >
                      </Button> */}
                    {/* change it to user.id to use JSON Server */}
                    {/* <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => deleteUserData(user._id)}
                      >
                        Delete
                      </Button> */}
                    {/* change it to user.id to use JSON Server */}
                    {/* change it to user.id to use JSON Server */}
                    {/* <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => deleteUserData(user._id)}
                      >
                        Delete
                      </Button> */}
                    {/* change it to user.id to use JSON Server */}
                  </TRow>
                ))}
              </TableBody>
            </StyledTable>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AllUsers;
