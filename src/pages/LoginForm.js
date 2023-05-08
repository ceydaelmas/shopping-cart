import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { login, loading, succeeded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && succeeded) {
      navigate("/");
    }
  }, [loading, succeeded, navigate]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs.email, inputs.password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

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
            GİRİŞ YAP
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginForm;
