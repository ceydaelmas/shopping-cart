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
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            name="name"
            value={inputs.name}
            margin="normal"
            type="text"
            id="outlined-basic"
            label="İsim"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            name="surname"
            value={inputs.surname}
            margin="normal"
            type="text"
            id="outlined-basic"
            label="Soyisim"
            variant="outlined"
            onChange={handleChange}
          />

          <TextField
            name="username"
            value={inputs.username}
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
