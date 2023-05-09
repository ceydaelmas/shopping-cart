import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null); // Token state'i ekleyin

  useEffect(() => {
    console.log(succeeded);
  }, [succeeded]);

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token) setToken(token);
  }, []);

  const register = async (firstName, lastName, userName, email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/Auth/register`, {
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
      });

      if (!response.ok) {
        setSucceeded(false);
        throw new Error("Registration failed.");
      }
      const data = await response.json();
      setSucceeded(data.succeeded);
      console.log(data);
      setUserId(data.data.userId);
    } catch (error) {
      console.error("Registration error:", error);
      setSucceeded(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}api/Auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed.");
      }

      const data = await response.json();
      setUser(data);
      setToken(data.data.token);
      localStorage.setItem("jwt", data.data.token);
      console.log(data.data.token);
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

  const authorizedFetch = async (url, options = {}) => {
    if (!token) {
      throw new Error("Token is not set");
    }

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const value = {
    user,
    login,
    register,
    isLoggedIn,
    loading,
    succeeded,
    userId,
    authorizedFetch, // Bu satırı ekleyin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
