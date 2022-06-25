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
import { useNavigate } from "react-router-dom";
import style from "../Component/Css/addUser.css";

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

export default function AddUser() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);

  let navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  const [user, setUser] = useState(initialValue);
  const [addd, setAddd] = useState("c xfxv ");
  const { studentName, classNo, score, result, grade } = user;

  const xyz = (x) => {
    if (+x >= 30) {
      console.log(x, "napass");
      return true;
    } else {
      console.log(x, "pass");
      return false;
    }
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    handleClose();

    navigate("/");
  };

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Container
          className="containerstyle"
          style={{
            margin: "auto",
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "20px",
            width: "480px",
            height: "500px",
            // left: "480px",
            left: "480px",
            marginTop: "40px",
          }}
        >
          <Typography variant="h4">Add Student</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Student Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="studentName"
              value={studentName}
              id="my-input"
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Class</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="classNo"
              value={classNo}
              id="my-input"
              required
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Score</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="score"
              value={score}
              id="my-input"
              required
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Result</InputLabel>
            <br />
            <div style={{ border: "0px solid red" }}>
              <p style={{ border: "0px solid green", width: "70px" }}>
                {xyz(+user.score) ? (
                  <div className="pass">Passed</div>
                ) : (
                  <div className="fail">Failed</div>
                )}
              </p>
            </div>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Grade</InputLabel>
            <br />
            <div style={{ border: "0px solid red" }}>
              <p style={{ border: "0px solid green", width: "70px" }}>
                {xyz(+user.score) ? (
                  <div className="ave"><p style={{color:"#2CA4D8"}}>Average</p></div>
                ) : (
                  <div className="poo"><p style={{color:"#F24643"}}>Poor</p></div>
                )}
              </p>
            </div>
          </FormControl>

          <div style={{ display: "flex", marginLeft: "auto", gap: "5px" }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Cancle
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addUserDetails()}
            >
              Confirm
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
}
