import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import react, { useState } from "react";
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
import { getUsers, editUser } from "../Service/api";

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

export default function EditUser() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  let navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  const [user, setUser] = useState(initialValue);
  const { studentName, classNo, score, result, grade } = user;
  const { id } = useParams();

  const xyz = (x) => {
    if (+x >= 30) {
      // console.log(x, "napass");
      return true;
    } else {
      //  console.log(x, "pass");
      return false;
    }
  };

  React.useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    setUser();
    navigate("/");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button onClick={handleOpen}>
        Edit
        <img src="../Assets/Images/Edit.png" />
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Container
          sx={style}
          style={{
            margin: "auto",
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "20px",
            width: "480px",
            height: "500px",
            // left: "480px",
            left: "480px",
            marginTop: "50px",
          }}
        >
          <Typography variant="h4">Edit Student</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Student Name</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="studentName"
              value={studentName}
              id="my-input"
              aria-describedby="my-helper-text"
              
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Class</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="classNo"
              value={classNo}
              id="my-input"
              aria-describedby="my-helper-text"
             
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Score</InputLabel>
            <Input
              onChange={(e) => onValueChange(e)}
              name="score"
              value={score}
              id="my-input"
              aria-describedby="my-helper-text"
             
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
            <p style={{ border: "0px solid green", width: "70px" }}>
              {xyz(+user.score) ? (
                <div className="ave"><p style={{color:"#2CA4D8"}}>Average</p></div>
              ) : (
                <div className="poo"><p style={{color:"#F24643"}}>Poor</p></div>
              )}
            </p>
          </FormControl>
          <div style={{ display: "flex", marginLeft: "auto", gap: "5px" }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Cancle
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => editUserDetails()}
            >
              Confirm
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
}
