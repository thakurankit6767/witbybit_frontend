import React from "react";
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
} from "@mui/material";

const SchoolSpace = () => {
  return (
    <>
      <Box
        sx={{
          width: "20%",
          margin: "15px",
          // border: "2px solid green",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "auto",
            // border: "1px solid red",
            width: "80%",
          }}
        >
          <div
            //    sx={style}
            style={{
              width: "60px",
              height: "40px",
              // border: "2px solid red",

              width: "60px",
              height: "48px",
              left: "30px",
              top: "40px",
              borderRadius: "8px",
              backgroundColor: "#FFBF3F",
            }}
          >
            <img
              src="../Assets/Images/badge.png"
              alt=""
              srcset=""
              style={{
                width: "21.33px",
                height: "28px%",
                marginTop: "10.67px",
                left: "5.33%",
              }}
            />
          </div>
          <div>
            <div
              style={{
                position: "absolute",

                marginLeft: "10px",
                lineHeight: "50px",
                fontFamily: "Passion One",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "32px",

                /* identical to box height, or 125% */

                color: "#2CA4D8",
              }}
            >
              SchoolSpace
            </div>
          </div>
        </div>
        <br />
        <hr style={{ width: "80%" }} />
        <div
          style={{
            // border: "2px solid yellow",
            height: "auto",
            width: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              // border: "2px solid green",
            }}
          >
            <img
              src="../Assets/Images/Dashboard.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              DashBoard
            </p>
          </div>

          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              // border: "2px solid green",
            }}
          >
            <img
              src="../Assets/Images/Courses.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              Courses
            </p>
          </div>

          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              border: "2px solid #2CA4D8",
            }}
          >
            <img
              src="../Assets/Images/Students.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              Students
            </p>
          </div>

          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              // border: "2px solid green",
            }}
          >
            <img
              src="../Assets/Images/Exams.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              Exams
            </p>
          </div>
          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              // border: "2px solid green",
            }}
          >
            <img
              src="../Assets/Images/Result.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              Results
            </p>
          </div>

          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              // border: "2px solid green",
            }}
          >
            <img
              src="../Assets/Images/Noticeboard.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              Notice Board
            </p>
          </div>

          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              // border: "2px solid green",
            }}
          >
            <img
              src="../Assets/Images/LiveClassess.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              Live Classes
            </p>
          </div>

          <div
            style={{
              borderRadius: "10px",
              margin: "auto",
              display: "flex",
              gap: "18px",
              width: "240px",
              height: "40px",
              marginTop: "10px",
              // border: "2px solid green",
            }}
          >
            <img
              src="../Assets/Images/Notification.png"
              alt=""
              srcset=""
              style={{
                width: "18px",
                height: "18px",
                margin: "14px 0 0 3px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat",
                weight: 600,
                lineHeight: "14px",
              }}
            >
              Notifications
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SchoolSpace;
