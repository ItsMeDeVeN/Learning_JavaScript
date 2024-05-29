import React, { useState } from "react";
import LoginForm from "./login";
import SignupForm from "./signup";
import "./index.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    // alert("Signup successful! Please login.");
    setShowLogin(true);
  };

  const handleLogin = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!isAuthenticated ? (
        showLogin ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <SignupForm onSignup={handleSignup} />
        )
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome!</h1>
        </div>
      )}
    </div>
  );
}

export default App;