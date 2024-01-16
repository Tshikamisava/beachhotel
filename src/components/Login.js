import React, { useState } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    // You can use state or any state management library to handle user authentication
    // For simplicity, let's just close the modal for now
    setShowModal(false);
  };

  return (
    <Hero>
      <Banner title="Login" subtitle="">
            {/* Your login form goes here */}
           <Modal />
      </Banner>
    </Hero>
  );
};

export default Login;
