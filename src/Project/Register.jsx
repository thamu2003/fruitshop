import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import "./Reg.css";

function Register() {
  const [nameError, setnameError] = useState("");
  const [addressError, setaddressError] = useState("");
  const [mobileError, setmobileError] = useState("");
  const [emailError, setemailError] = useState("");

  const navigate = useNavigate();
  const [userdetails, setuserdetails] = useState({
    name: "",
    address: "",
    mobileno: "",
    email: "",
  });

  const registervalidation = async (e) => {
    e.preventDefault();

    if (!userdetails.name == "") {
      if (userdetails.name.length >= 4) {
        setnameError("");

        // Address validation
        if (!userdetails.address == "") {
          if (userdetails.address.length >= 5) {
            setaddressError("");

            // Mobile validation
            if (!userdetails.mobileno == "") {
              if (userdetails.mobileno.length == 10) {
                setmobileError("");

                // Email validation
                const emailPattern =
                  /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;
                if (!userdetails.email == "") {
                  const isEmailValid = userdetails.email.match(emailPattern);
                  if (isEmailValid) {
                    setemailError("");
                    await axios
                      .post("http://localhost:2003/Register/add",userdetails)
                      .then((res)=>{
                        console.log(res);
                        navigate('/Box')
                      })
                      .catch((err)=>{
                        return err;
                      })
                  } else {
                    setemailError("Email validation error");
                    console.log("email validation error");
                  }
                } else {
                  setemailError("Email is empty error");
                  console.log("email empty");
                }
              } else {
                setmobileError("Mobile length must 10 numbers");
                console.log("mobile length error");
              }
            } else {
              setmobileError("mobile number is empty");
              console.log("mobile empty");
            }
          } else {
            setaddressError("Address length error");
            console.log("address length error");
          }
        } else {
          setaddressError("Address empty error");
          console.log("address error");
        }
      } else {
        setnameError("Name length error");
        console.log("name length error");
      }
    } else {
      setnameError("name empty error");
      console.log("name empty");
    }
    // if(!userdetails.name=='')
    //  {
    //   await axios
    //   .post("http://localhost:2003/Register/add",userdetails)
    //   .then((res)=>{
    //     console.log(res);
    //     navigate('/Box')
    //   })
    //   .catch((err)=>{
    //     return err;
    //   })
    //  }
    //  else{
    //   console.log("Enter user name")
    //  }

    // }
  };

  const Adduserdata = (e) => {
    setuserdetails({ ...userdetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form onSubmit={registervalidation}>
        <div className="C">
          <div>
            <label htmlFor="">Name</label>
            <br />
            <input
              name="name"
              type="text"
              placeholder="Enter the Name"
              value={userdetails.name}
              onChange={Adduserdata}
            />
            <p className=" text-danger" >{nameError}</p>
          </div>
          <div>
            <label htmlFor="">Address</label>
            <br />
            <input
              name="address"
              type="text"
              placeholder="Enter the Address"
              value={userdetails.address}
              onChange={Adduserdata}
            />
            <p className=" text-danger" >{addressError}</p>
          </div>
          <div>
            <label htmlFor="">Mobile No</label>
            <br />
            <input
              name="mobileno"
              type="text"
              placeholder="Enter the Mobile no"
              value={userdetails.mobileno}
              onChange={Adduserdata}
            />
            <p className=" text-danger" >{mobileError}</p>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <br />

            <input
              name="email"
              type="text"
              placeholder="Enter the Email id"
              value={userdetails.email}
              onChange={Adduserdata}
            />
            <p id="em"></p>
            <p className=" text-danger" >{emailError}</p>
          </div>

          <div>
            <br />
            <button>submit</button>
          </div>
        </div>
      </Form>
    </>
  );
}
export default Register;
