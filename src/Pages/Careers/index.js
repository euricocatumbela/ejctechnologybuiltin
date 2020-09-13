import React from "react";
import descriptions from "../../Context/Description";
import Header from "../../Components/Header/index";
import Bottom from "../../Components/Bottom/index";
import StaticContextProvider from "../../Context/StaticContext/index";
import DemoNextCard from "../../Components/DemoNextCard/index";

function Careers() {
  return (
    <div>
      <Header />
      <div className="HeadingCareer">
        <h1>Come work with us!</h1>
        <DemoNextCard
          title={descriptions[0].title}
          paragraph1={descriptions[0].paragraph1}
          paragraph2={descriptions[0].paragraph2}
          paragraph3={descriptions[0].paragraph3}
          paragraph4={descriptions[0].paragraph4}
        />

        <StaticContextProvider>
          <Bottom />
        </StaticContextProvider>
      </div>
    </div>
  );
}

export default Careers;
