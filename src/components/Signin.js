import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignIn({ setOpenModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const login = () => {
    // Your authentication logic without Firebase functions
    // For example, you can use an authentication service or API

    // Simulating a successful login
    console.log("User Successfully logged in");
    window.location.reload();
  };

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <div className="login">
      <div className="log">
        <h2
          style={{
            color: "#000",
            fontWeight: "lighter",
            textAlign: "right",
            padding: 15,
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          X
        </h2>

        <div className="loginContainer">
          {/* <div className="loginPic">
            <img src="./man.png" alt="" className="picture" />
          </div> */}
          <div className="loginForm">
            <div className="form">
              <h2 style={{ fontSize: 35, marginBottom: 10 }}>Welcome back</h2>
              <label htmlFor="" className="field">
                Email
                <input
                  type="text"
                  className="loginInput"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>
              <label htmlFor="" className="field">
                Password
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="loginInput"
                    onChange={(event) => setPassword(event.target.value)}
                    name="password"
                    required
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    style={{
                      marginLeft: "-30px",
                      color: "#000",
                      backgroundColor: "transparent",
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </button>
                </div>
              </label>

              <p className="forgotSection">Forgot password</p>
              <button onClick={login}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
