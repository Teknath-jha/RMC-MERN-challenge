import React from "react";
import MainScreen from "../../components/MainScreen";

const AfterLogin = () => {
  return (
    <MainScreen title="You are logged In">
      This login is maintained by JsonWebToken and your password too passed by
      bcryptjs
    </MainScreen>
  );
};

export default AfterLogin;
