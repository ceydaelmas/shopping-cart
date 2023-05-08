<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
=======
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
<<<<<<< HEAD
  const { login, loading, succeeded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && succeeded) {
      navigate("/");
    }
  }, [loading, succeeded, navigate]);

=======
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
<<<<<<< HEAD

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs.email, inputs.password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

=======
  const handleSubmit = (e) => {
    e.preventDefault();
  };
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
<<<<<<< HEAD
=======
          //websitesinin ortasına alıyo
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
          padding={2}
          borderRadius={4}
        >
          <TextField
            name="email"
            value={inputs.email}
            margin="normal"
            type="email"
            id="outlined-basic"
            label="E-Posta"
            variant="outlined"
<<<<<<< HEAD
            onChange={handleChange}
=======
            onChange={handleChange} //text değişince onchange çağırılıyor.
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
          />
          <TextField
            name="password"
            value={inputs.password}
            margin="normal"
            type="password"
            id="outlined-basic"
            label="Şifre"
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            type="submit"
            sx={{ marginTop: 3, borderRadius: 1 }}
            variant="contained"
          >
            GİRİŞ YAP
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginForm;
