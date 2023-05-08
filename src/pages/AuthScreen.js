import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoginForm from "./LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Typography } from "@mui/material";

const AuthScreen = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormChange = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      maxWidth={800}
      alignItems={"center"}
      justifyContent={"center"}
      margin={"auto"}
      marginTop={0}
      borderRadius={4}
      boxShadow={"2px 2px 10px #ccc"}
      sx={{ ":hover": { boxShadow: "3px 3px 11px #ccc" } }}
    >
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={3}
        sx={{ width: "50%" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <div
            style={{ width: "30%", height: "2px", backgroundColor: "#ccc" }}
          ></div>
          <Typography
            variant="h6"
            style={{
              padding: "0 10px",
              fontWeight: "bold",
              color: "#999",
              textAlign: "center",
            }}
          >
            {isLoginForm ? "Giriş Yap" : "Üye Ol"}
          </Typography>
          <div
            style={{ width: "30%", height: "2px", backgroundColor: "#ccc" }}
          ></div>
        </div>
        {isLoginForm ? <LoginForm /> : <RegisterForm />}
        <Button
          sx={{ marginTop: 3, borderRadius: 1 }}
          color="primary"
          onClick={handleFormChange}
          fullWidth
        >
          {isLoginForm
            ? "Bİr hesabın yok mu? Üye Ol"
            : "Zaten bir hesabın var mı?"}
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width="50%"
        height="100%"
        borderRadius="0px 4px 4px 0px"
        overflow="hidden"
        marginTop={3}
      >
        <img
          src="https://r.resimlink.com/rVhKDH.png"
          alt="random"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default AuthScreen;
