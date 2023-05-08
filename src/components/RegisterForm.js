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
    email: "",
    password: "",
  });

  const { register, loading, succeeded } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
            name="firstName"
            value={inputs.firstName}
            margin="normal"
            type="text"
            id="outlined-basic"
            label="İsim"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            name="lastName"
            value={inputs.lastName}
            margin="normal"
            type="text"
            id="outlined-basic"
            label="Soyisim"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            name="userName"
            value={inputs.userName}
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
