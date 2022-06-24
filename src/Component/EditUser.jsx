// import { useState, useEffect } from "react";

// import {
//   FormGroup,
//   FormControl,
//   InputLabel,
//   Input,
//   Button,
//   styled,
//   Typography,
// } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom";
// import { getUsers, editUser } from "../Service/api";

// const initialValue = {
//   studentName: "",
//   classNo: "",
//   // result: '',
//   score: "",
//   // grade:''
// };

// const Container = styled(FormGroup)`
//     width: 50%;
//     margin: 5% 0 0 25%;
//     & > div {
//         margin-top: 20px
// `;

// const EditUser = () => {
//   const [user, setUser] = useState(initialValue);
//   const { studentName, classNo, score } = user;
//   const { id } = useParams();

//   let navigate = useNavigate();

//   useEffect(() => {
//     loadUserDetails();
//   }, []);

//   const loadUserDetails = async () => {
//     const response = await getUsers(id);
//     setUser(response.data);
//   };

//   const editUserDetails = async () => {
//     const response = await editUser(id, user);
//     navigate("/all");
//   };

//   const onValueChange = (e) => {
//     console.log(e.target.value);
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   return (
//     <Container injectFirst>
//       <Typography variant="h4">Edit Information</Typography>
//       <FormControl>
//         <InputLabel htmlFor="my-input">Student Name</InputLabel>
//         <Input
//           onChange={(e) => onValueChange(e)}
//           name="studentName"
//           value={studentName}
//           id="my-input"
//           aria-describedby="my-helper-text"
//         />
//       </FormControl>
//       <FormControl>
//         <InputLabel htmlFor="my-input">Class</InputLabel>
//         <Input
//           onChange={(e) => onValueChange(e)}
//           name="classNo"
//           value={classNo}
//           id="my-input"
//           aria-describedby="my-helper-text"
//         />
//       </FormControl>
//       <FormControl>
//         <InputLabel htmlFor="my-input">Score</InputLabel>
//         <Input
//           onChange={(e) => onValueChange(e)}
//           name="score"
//           value={score}
//           id="my-input"
//           aria-describedby="my-helper-text"
//         />
//       </FormControl>
//       {/* <FormControl>
//                 <InputLabel htmlFor="my-input">Result</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='email' value={result} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl> */}

//       {/* <FormControl>
//                 <InputLabel htmlFor="my-input">Grade</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='phone' value={grade} id="my-input" aria-describedby="my-helper-text" />
//             </FormControl> */}
//       <FormControl>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => editUserDetails()}
//         >
//           Edit User
//         </Button>
//       </FormControl>
//     </Container>
//   );
// };

// export default EditUser;

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
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  backgroundColor: "white",
  //   border: '2px solid #000',
  //   boxShadow: 24,
};

export default function EditUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState(initialValue);
  const { studentName, classNo, score, result, grade } = user;
  const { id } = useParams();

  const xyz = (x) => {
    if (+x >= 30) {
      console.log(x, "napass");
      return true;
    } else {
      console.log(x, "pass");
      return false;
    }
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    setUser()
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Button onClick={handleOpen}>
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

          {/* <FormControl>
                <InputLabel htmlFor="my-input">Result</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='result' value={result} id="my-input"/>
            </FormControl> */}
          {/* <FormControl>
                <InputLabel htmlFor="my-input">Grade</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='grade' value={grade} id="my-input" />
            </FormControl> */}
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
                <div className="ave">Average</div>
              ) : (
                <div className="poo">Poor</div>
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
