import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardHiCF } from "../CardHiCF/CardHiCF";
import { Button } from "../Button/Button";
import { isValidEmail } from "../../helper/utils.helper";
import Cover from "../../assets/Cover.jpg";

const coverImage = { src: Cover, alt: "Rick & Morty Cover" };

export const Login = ({ onLogin, onRegister, ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const caller = e.target.id;
    const validEmail = isValidEmail(email);
    const validPassword = password.length >= 6;

    setError("");

    if (caller === "login" && validEmail && validPassword) {
      onLogin({ email, password });
    }
    if (caller === "register" && validEmail && validPassword) {
      onRegister({ email, password });
    }

    if (!validEmail || !validPassword) {
      setError(
        `${!validEmail ? "Invalid eMail." : ""} ${
          !validPassword
            ? "Invalid password - Minimum 6 characters are required."
            : ""
        }`
      );
    }
  };
  const handleInputChange = (e) => {
    const caller = e.target.id;
    const update = e.target.value;

    if (caller === "email") {
      setEmail(update);
    } else {
      setPassword(update);
    }
  };

  const content = (
    <form action="" className="login__form">
      <input
        type="email"
        value={email}
        name="email"
        id="email"
        placeholder="eMail"
        onChange={handleInputChange}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        name="password"
        id="password"
        onChange={handleInputChange}
      />

      <Button id="login" label="LOGIN" type="submit" onClick={handleSubmit} />
      <Button
        id="register"
        label="REGISTER"
        variant="secondary"
        onClick={handleSubmit}
      />
    </form>
  );

  return (
    <div className="login" {...props}>
      <CardHiCF
        img={coverImage}
        content={content}
        footer={
          error !== "" ? (
            <div className="text-center text-primary">{error}</div>
          ) : null
        }
      />
    </div>
  );
};

Login.propTypes = {
  /**
   * Eventhandler for login a user
   */
  onLogin: PropTypes.func.isRequired,
  /**
   * Eventhandler for the register a new user
   */
  onRegister: PropTypes.func.isRequired,
};

Login.defaultProps = {
  onLogin: undefined,
  onRegister: undefined,
};
