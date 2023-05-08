import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const register = async (firstName, lastName, userName, email, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://6180-31-206-104-209.ngrok-free.app/api/Auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            userName,
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed.");
      }

      const data = await response.json();
      setSucceeded(data.succeeded); // 'succeeded' değerini ayarlayın
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Registration error:", error);
      setSucceeded(false); // Başarısızlık durumunda 'succeeded' değerini false yapın
      throw error;
    } finally {
      setLoading(false);
    }
  };
  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://6180-31-206-104-209.ngrok-free.app/api/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed.");
      }

      const data = await response.json();
      setUser(data);
      setIsLoggedIn(true);
      setSucceeded(data.succeeded);
      console.log(succeeded);
      console.log(data);
      console.log(data.data.userId);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoggedIn(false);
      setSucceeded(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    login,
    register,
    isLoggedIn,
    loading,
    succeeded,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
