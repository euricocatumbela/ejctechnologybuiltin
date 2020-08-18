import React from "react";
import Detail from "../../Components/Detail/index";
import contacts from "../../Context/Contacts/index";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";

function Team() {
  function createCard(card) {
    return (
      <Detail
        img={card.image}
        bio={card.bio}
        name={card.name}
        title={card.title}
      />
    );
  }
  return (
    <div className="Responsive">
      <Header />
      <div className="TeamHeading">
        <h1>The Team </h1>
        <div className="GroupTeam">{contacts.map(createCard)}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
