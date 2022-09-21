import React from "react";
import Card from "../../Shared/Navigation/Card/Card";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  const startRegister = () => {
    navigate("/authenticate");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codehouse" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="/authenticate">
            Signin
          </Link>
        </div>
      </Card>
    </div>
  );
}
export default Home

