<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    userName: "",
=======
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegisterForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
    email: "",
    password: "",
  });

<<<<<<< HEAD
  const { register, loading, succeeded } = useAuth();
  const navigate = useNavigate();

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
      await register(
        inputs.firstName,
        inputs.lastName,
        inputs.userName,
        inputs.email,
        inputs.password
      );
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  useEffect(() => {
    if (!loading && succeeded) {
      navigate("/login-register"); // Başarılı olduğunda "/login-register" sayfasına yönlendirin
    }
  }, [loading, succeeded, navigate]);

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
          padding={2}
          borderRadius={4}
        >
          <TextField
<<<<<<< HEAD
            name="firstName"
            value={inputs.firstName}
=======
            name="name"
            value={inputs.name}
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
            margin="normal"
            type="text"
            id="outlined-basic"
            label="İsim"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
<<<<<<< HEAD
            name="lastName"
            value={inputs.lastName}
=======
            name="surname"
            value={inputs.surname}
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
            margin="normal"
            type="text"
            id="outlined-basic"
            label="Soyisim"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
<<<<<<< HEAD
            name="userName"
            value={inputs.userName}
=======
            name="username"
            value={inputs.username}
>>>>>>> 41c0205bb973e46085a38371dcb6bc2836dca24e
            margin="normal"
            type="text"
            id="outlined-basic"
            label="Kullanıcı Adı"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            name="email"
            value={inputs.email}
            margin="normal"
            type="email"
            id="outlined-basic"
            label="E-Posta"
            variant="outlined"
            onChange={handleChange}
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
            Kayıt Ol
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default RegisterForm;
