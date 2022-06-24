// import react, { useState } from "react";
// import {
//   FormGroup,
//   FormControl,
//   InputLabel,
//   Input,
//   Button,
//   styled,
//   Typography,
// } from "@mui/material";
// import { addUser } from "../Service/api";
// import { useNavigate } from "react-router-dom";

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
//         margin-top: 20px;
// `;

// const RemoveUser = () => {
//   const [user, setUser] = useState(initialValue);
//   const { studentName, classNo, score } = user;

//   const [resultData, setResultData] = useState("-")
//   const [gradeData, setGradeData] = useState("-")

//   const resultHandle=()=>{
//     if(score>=76){
//         console.log("passed")
//     }else if(score<=75 && score>=31){
//         console.log("passed")
//     }else{
//         console.log("Failed")
//     }
//   }
//   resultHandle()

//   let navigate = useNavigate();

//   const onValueChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const addUserDetails = async () => {
//     await addUser(user);
//     navigate("/all");
//   };

//   return (
//     <>
//     <Container>
//       <Typography variant="h4">Add User</Typography>
//       <FormControl>
//         <InputLabel htmlFor="my-input">Student Name</InputLabel>
//         <Input
//           onChange={(e) => onValueChange(e)}
//           name="studentName"
//           value={studentName}
//           id="my-input"
//         />
//       </FormControl>
//       <FormControl>
//         <InputLabel htmlFor="my-input">Class</InputLabel>
//         <Input
//           onChange={(e) => onValueChange(e)}
//           name="classNo"
//           value={classNo}
//           id="my-input"
//         />
//       </FormControl>

//       <FormControl>
//         <InputLabel htmlFor="my-input">Score</InputLabel>
//         <Input
//           onChange={(e) => onValueChange(e)}
//           name="score"
//           value={score}
//           id="my-input"
//         />
//       </FormControl>

//       {/* <FormControl>
//                 <InputLabel htmlFor="my-input">Result</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='result' value={result} id="my-input"/>
//             </FormControl> */}
//       {/* <FormControl>
//                 <InputLabel htmlFor="my-input">Grade</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name='grade' value={grade} id="my-input" />
//             </FormControl> */}
//       <FormControl>
//         <InputLabel htmlFor="my-input">Result</InputLabel>
//         <br />
//         <div style={{ border: "1px solid red" }}>
//           <p style={{ border: "1px solid green", width: "70px" }}oninput={setResultData} >{resultData}</p>
//         </div>
//       </FormControl>

//       <FormControl>
//         <InputLabel htmlFor="my-input">Grade</InputLabel>
//         <br />
//         <div style={{ border: "1px solid red" }}>
//           <p style={{ border: "1px solid green", width: "70px" }}>4511</p>
//         </div>
//       </FormControl>
//       <FormControl>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => addUserDetails()}
//         >
//           Add User
//         </Button>
//       </FormControl>
//     </Container>
//     </>
//   );
// };

// export default RemoveUser;

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
import { getUsers, deleteUser } from "../Service/api";

const initialValue = {
  studentName: "",
  classNo: "",
  // result: '',
  score: "",
  // grade:''
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

export default function RemoveUser({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

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

            {users.map((user) => (
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
                    {user.studentName}
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
                    {user.classNo}
                  </p>
                </div>
              </>
            ))}
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
