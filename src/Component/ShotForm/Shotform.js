import React, { useState } from 'react'
import "./shotstyle.css"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import facepic from "./socail/facebook.png"
import google from "./socail/google.png"
import twitter from "./socail/twitter.png"


function Shotform() {
  const [toggle, setToggle] = useState(true)

  const onlick = () => {
    setToggle(!toggle)
  }
  return (
    <div
      className="regNav"
      style={{

      }}
    >
      <div className="regNav1">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            // width: "100%",

          }}
        >
          <div className="first_box">
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "70px",
                  width: "70px",
                  // backgroundColor: "white",
                  background: " #f8f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "#4285F4",
                  }}
                >
                  S
              </div>
              </div>
              <div style={{ marginTop: "10PX" }}>shotkode</div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "40px",
                  width: "80%",
                }}
              >
                {" "}
              Access to quality teachers and access to quality schools
            </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  marginTop: "20px",
                  width: "80%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur sit ame adipiscing ame
                elit, Lorem ipsum dolor sit amet, consectetur sit ame adipiscing
                ame elit,Lorem ipsum dolor sit amet
            </div>
            </div>
          </div>

          <div className="second_box">
            <>
              {
                toggle ? (<div>
                  <div className="allReg">
                    <div className="reg">
                      Register
          </div>
                    <div className="regInput">
                      <TextField
                        style={{
                          width: "100%",


                        }}
                        size="small"
                        id="outlined-password-input"
                        label="Full Name"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <br />
                      <TextField
                        style={{
                          width: "100%",
                          marginTop: "10px"

                        }}
                        size="small"
                        id="outlined-password-input"
                        label="School Name"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <div className="sklcon">
                        <TextField
                          style={{
                            width: "47%",
                          }}
                          size="small"
                          id="outlined-password-input"
                          label="School Location"
                          type="text"
                          autoComplete="current-password"
                          variant="outlined"
                        />
                        <TextField
                          style={{
                            width: "47%",
                          }}
                          size="small"
                          id="outlined-password-input"
                          label="Phone No:"
                          type="text"
                          autoComplete="current-password"
                          variant="outlined"
                        />
                      </div>
                      <TextField
                        style={{
                          width: "100%",
                          marginTop: "10px"

                        }}
                        size="small"
                        id="outlined-password-input"
                        label="E-mail"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                      />
                      <TextField
                        style={{
                          width: "100%",
                          marginTop: "10px"

                        }}
                        size="small"
                        id="outlined-password-input"
                        label="Password"
                        type="Password"
                        autoComplete="current-password"
                        variant="outlined"
                      />

                      <Button type="primary" block style={{
                        marginTop: "10px"
                      }}>
                        Continue
    </Button>
                      <div style={{ display: "flex", justifyContent: "center", fontSize: "10px" }}>Use Socail Medai</div>
                      <div className="lcon">
                        <div style={{
                          width: "25%",
                          display: "flex",
                          justifyContent: "space-around"
                        }}>
                          <img src={facepic} style={{ height: "20px", }} />
                          <img src={google} style={{ height: "20px", }} />
                          <img src={twitter} style={{ height: "20px", }} />

                        </div>

                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                          width: "300px"

                        }}
                      >
                        <div>Already have an Account,</div>
                        <div
                          style={{
                            marginLeft: "5px",
                            color: "red",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={onlick}


                        >
                          Log In
                </div>
                      </div>
                    </div>

                  </div>
                </div>) : (
                  <div>
                    <div className="allReg1">

                      <div className="regInput">

                        <br />

                        <div className="sklcon">

                        </div>
                        <div className="reg1">
                          Log In
          </div>
                        <TextField
                          style={{
                            width: "100%",
                            marginTop: "10px"

                          }}
                          size="small"
                          id="outlined-password-input"
                          label="E-mail"
                          type="text"
                          autoComplete="current-password"
                          variant="outlined"
                        />
                        <TextField
                          style={{
                            width: "100%",
                            marginTop: "10px"

                          }}
                          size="small"
                          id="outlined-password-input"
                          label="Password"
                          type="Password"
                          autoComplete="current-password"
                          variant="outlined"
                        />

                        <Button type="primary" block style={{
                          marginTop: "10px"
                        }}>
                          Continue
    </Button>
                        <div style={{ display: "flex", justifyContent: "center", fontSize: "10px" }}>Use Socail Medai</div>
                        <div className="lcon">
                          <div style={{
                            width: "25%",
                            display: "flex",
                            justifyContent: "space-around"
                          }}>
                            <img src={facepic} style={{ height: "20px", }} />
                            <img src={google} style={{ height: "20px", }} />
                            <img src={twitter} style={{ height: "20px", }} />

                          </div>

                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "10px",
                            width: "300px"

                          }}
                        >
                          <div>Don't Have An Account,</div>
                          <div
                            style={{
                              marginLeft: "5px",
                              color: "red",
                              cursor: "pointer",
                              fontWeight: "bold",
                            }}
                            onClick={onlick}

                          >
                            Sign Up
                </div>
                        </div>
                      </div>

                    </div>


                  </div>
                )
              }

            </>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shotform
