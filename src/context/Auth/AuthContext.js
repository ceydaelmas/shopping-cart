import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../config";
import jwt_decode from "jwt-decode";

//Kullanıcı için Api işlemleri burda yapılır. Context Api burda yapılır.
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
  const [token, setToken] = useState(null);
  const [decode, setDecode] = useState(null); // Token state'i ekleyin

  useEffect(() => {}, [succeeded]);

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    console.log("useEffect", token);
    if (token) {
      setToken(token);
      var decoded = jwt_decode(token);
      setUser(decoded);
      setDecode(decoded);
    }
  }, []);

  //bu verileri mongo dbye post ediyoruz.
  const register = async (firstName, lastName, userName, email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}register`, {
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
      setUserId(data.data.userId);
    } catch (error) {
      console.error("Registration error:", error);
      setSucceeded(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    setUser(null);
  };

  //bu verileri mongo dbye post ediyoruz.
  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}login`, {
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
      var decoded = jwt_decode(data.data.token); // Token'ı decode ediyoruz
      setUser(decoded); // ve decode edilmiş veriyi state'e kaydediyoruz
      setToken(data.data.token);
      localStorage.setItem("jwt", data.data.token);
      setIsLoggedIn(true); // Kullanıcının oturum açtığını belirtiyoruz
      setSucceeded(true); // Oturum açma işleminin başarılı olduğunu belirtiyoruz
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
    let localToken = localStorage.getItem("jwt");
    if (!localToken) {
      throw new Error("Token is not set");
    }

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${localToken}`,
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
    decode,
    userId,
    logout,
    authorizedFetch, // Bu satırı ekleyin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
