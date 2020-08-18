import React from "react";
import Forms from "../../Components/Forms/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";

function Signin() {
  var userIsRegistered = true;

  //   function unStrike() {
  //     userIsRegistered = false;
  //   }

  return (
    <div className="Hero1">
      <Header />

      <div className="container">
        <Forms isRegistered={userIsRegistered} />
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
