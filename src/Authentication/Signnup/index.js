import React from "react";
import Forms from "../../Components/Forms/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
function Signnup() {
  var isNotRegistered = false;

  return (
    <div className="Hero1">
      <Header />
      <div className="container">
        <Forms usernotRegistered={isNotRegistered} />
      </div>
      <Footer />
    </div>
  );
}

export default Signnup;
