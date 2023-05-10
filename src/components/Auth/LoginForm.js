import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAuth } from "../../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const { login, loading, succeeded, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    } else if (!loading && !succeeded) {
      setOpen(true);
    }
  }, [user, navigate, loading, succeeded]);

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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Giriş başarısız, lütfen kullanıcı adınızı ve şifrenizi kontrol ediniz.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginForm;
