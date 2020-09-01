import React from "react";
import Header from "../../Components/Header/index";
import Card from "../../Components/Card/index";
import Section from "../../Components/Section/index";
import Waves from "../../Components/Waves/index";
import Footer from "../../Components/Footer/index";
import Bottom from "../../Components/Bottom/index";
import StaticContextProvider from "../../Context/StaticContext";
// import { Link } from "react-router-dom";

function Home(props) {
  var d = new Date();
  var day = d.getDate();
  return (
    <div>
      <Header />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Creating unparalleled</h1>
          <p>value proposition with product engineering services.</p>
          <a href="https://www.buzzsprout.com/1027399">Listen to my Podcst</a>
          <div className="Logos">
            <img src="/images/logo-figma.png" alt="" width="60" />
            <img
              src="https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg"
              alt=""
              width="60"
            />
            <img src="/images/logo-framer.png" alt="" width="60" />
            <img src="/images/logo-swift.png" alt="" width="60" />
            <img src="/images/logo-react.png" alt="" width="60" />
            <img src="/images/logo-sketch.png" alt="" width="60" />
          </div>

          <Waves />
        </div>
      </div>
      <div className="Cards-1">
        <h2>Engineering Technology Expertise</h2>
        <div className="Cards-1Group">
          <Card
            title="UI/UX Design With Figma"
            text={day + " April "}
            image="https://static.dribbble.com/users/257709/screenshots/7802485/media/9f63203758b5fbd3fa661c980a6f65a6.png"
          />
          <Card
            title="UI/UX Design With XD"
            text={day + " April "}
            image="https://static.dribbble.com/users/61921/screenshots/4439578/channels.png"
          />
          <Card
            title="React Framework"
            text={day + " April "}
            image="https://reactjs.org/logo-og.png"
          />
          <Card
            title="API Migration"
            text={day + " April "}
            image="https://static.dribbble.com/users/61921/screenshots/5212696/image.png"
          />
          <Card
            title="AWS Cloud Services"
            text={day + " April "}
            image="https://static.dribbble.com/users/375563/screenshots/9730344/media/11e32eccd881c5c6c7e88ef05ea321e7.png"
          />
          <Card
            title="CMS integration API"
            text={day + " April "}
            image="https://static.dribbble.com/users/414694/screenshots/5247254/interface_shot_2x.png"
          />
          <Card
            title="Artificial Intelligence"
            text={day + " April "}
            image="https://static.dribbble.com/users/8106/screenshots/8512175/media/8d139aa2389ab175d02ffcda127441ee.png"
          />
          <Card
            title="IOS & Androide Apps"
            text={day + " April "}
            image="https://static.dribbble.com/users/2024047/screenshots/6262434/_____2x.png"
          />
          <Card
            title="Database infrastructura"
            text={day + " April "}
            image="https://static.dribbble.com/users/1018473/screenshots/5664135/security_2x.jpg"
          />
        </div>
      </div>

      <Section
        image="/images/wallpaper2.jpg"
        logo="/images/Logo.svg"
        title="Vision"
        text="Ejc Technology is a Remotely software development company that provides businesses worldwide with custom technology solutions. As an application development company with over 10 skilled software developers, EJC Technology combines technological expertise, specific domain experience, and passion for excellence to deliver enterprise-grade solutions."
      />
      <div className="Cards-1">
        <h2>ON-DEMAND Platforms</h2>
        <div className="Cards-1Group">
          <Card
            title="Food deliver"
            text={day + " April "}
            image="https://static.dribbble.com/users/3245373/screenshots/13538345/media/850794eda2a9b8caeef064c5c94aa2bf.png"
          />
          <Card
            title="E-commerce platform"
            text={day + " April "}
            image="https://static.dribbble.com/users/2486061/screenshots/6111669/frame_3.2_2x.png"
          />
          <Card
            title="Business Website"
            text={day + " April "}
            image="https://static.dribbble.com/users/412187/screenshots/3263003/violin_dark.png"
          />
          <Card
            title="Online Education"
            text={day + " April "}
            image="https://static.dribbble.com/users/1334861/screenshots/7031382/media/bf65525e6f13cc525e056847a5411214.png"
          />
          <Card
            title="Live Dashboard"
            text={day + " April "}
            image="https://static.dribbble.com/users/863815/screenshots/9699028/media/461bbfca32fee7b48f52ab6fc3825e12.jpg"
          />
          <Card
            title=" Account Management Systems"
            text={day + " April "}
            image="https://static.dribbble.com/users/279993/screenshots/4577081/financeapp_dribbble.png"
          />
        </div>
      </div>
      <StaticContextProvider>
        <Bottom />
      </StaticContextProvider>
    </div>
  );
}

export default Home;
