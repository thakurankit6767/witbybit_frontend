import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import react, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { addUser } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, deleteUser } from "../Service/api";

const initialValue = {
  studentName: "",
  classNo: "",
  result: "",
  score: "",
  grade: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    backgroundcolor:green;
    & > div {
        margin-top: 20px;
`;

const style = {
  backgroundColor: "white",
};

export default function RemoveUser() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  let navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  const [user, setUser] = useState(initialValue);

  const { studentName, classNo, score, result, grade } = user;
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    setUser();
    navigate("/");
  };
  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <img src="../Assets/Images/delete.png" />
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Container
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "500px",
            margin: "auto",
            marginTop: "40px",
            padding: "10px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              margin: "10px",
              fontFamily: "Montserrat",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Remove Student
          </Typography>
          <br />
          <hr style={{ width: "95%", Color: "black" }} />
          <div
            style={{
              margin: "auto",
              width: "500px",
              height: "auto",
              // border: "1px solid red",
            }}
          >
            <div
              style={{
                width: "400px",
                margin: "10px",
                // border: "1px solid red",
              }}
            >
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Are you sure you want to remove the current student from the
                list?
              </p>
            </div>

            <>
              <div>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "16px",
                    margin: "10px",
                    color: "#7F878A",
                  }}
                >
                  STUDENT NAME
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "16px",
                    margin: "10px",
                    color: "#242424",
                  }}
                >
                  {studentName}
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "16px",
                    margin: "10px",
                    color: "#7F878A",
                  }}
                >
                  CLASS
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "16px",
                    margin: "10px",
                    color: "#242424",
                  }}
                >
                  {classNo}
                </p>
              </div>
            </>
          </div>

          <br />
          <hr style={{ width: "95%", Color: "black" }} />

          <div style={{ display: "flex", marginLeft: "auto", gap: "5px" }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Cancle
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteUserData(user._id)}
            >
              Remove
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
}
