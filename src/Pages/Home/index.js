import React from "react";
import Header from "../../Components/Header/index";
import Card from "../../Components/Card/index";
import Section from "../../Components/Section/index";
import Waves from "../../Components/Waves/index";
import Bottom from "../../Components/Bottom/index";
import StaticContextProvider from "../../Context/StaticContext";
// import Update from "../../Components/Update";

function Home(props) {
  return (
    <div>
      <div>
        <Header />
        {/* <Update /> */}

        <div className="Hero">
          <div className="HeroGroup">
            <h1>Build your website today</h1>
            <p>value proposition with product engineering services.</p>
            <a href="https://www.buzzsprout.com/1027399">
              Listen to our Podcast
            </a>
            <div className="Logos">
              <a
                href="https://www.instagram.com/ejctechnology.co.za/"
                className="LinksLogo"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/174/174855.svg"
                  alt=""
                  width="60"
                />
              </a>
              <a href="https://twitter.com/EjcTechnology" className="LinksLogo">
                <img
                  src="https://image.flaticon.com/icons/svg/733/733579.svg"
                  alt=""
                  width="60"
                />
              </a>
              <a
                href="https://www.google.com/search?ei=3vROX4_LHK201fAPlu6GiA4&q=EJC+Technology&oq=EJC+Technology&gs_lcp=CgZwc3ktYWIQAzILCC4QxwEQrwEQkwIyAggAMgYIABAWEB4yAggmOgQIABBHOg0ILhDHARCvARBDEJMCOgQIABBDOggIABCxAxCDAToICC4QsQMQgwE6DgguELEDEIMBEMcBEKMCOgsILhCxAxDHARCjAjoFCC4QsQM6CAguEMcBEK8BOggIABAWEAoQHlC4wxJYnvESYOr1EmgCcAF4AIABwQKIAbMhkgEGMi0xNC4ymAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwiPsp6_qMnrAhUtWhUIHRa3AeEQ4dUDCAw&uact=5"
                className="LinksLogo"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/2111/2111646.svg"
                  alt=""
                  width="60"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ejctechnology/?viewAsMember=true"
                className="LinksLogo"
              >
                <img
                  src="https://image.flaticon.com/icons/svg/174/174857.svg"
                  alt=""
                  width="60"
                />
              </a>
            </div>

            <Waves />
          </div>
        </div>
        <div className="Cards-1">
          <h2>Engineering Technology Expertise</h2>
          <div className="Cards-1Group">
            <Card
              title="UI/UX Design With Figma"
              image="https://static.dribbble.com/users/257709/screenshots/7802485/media/9f63203758b5fbd3fa661c980a6f65a6.png"
            />
            <Card
              title="UI/UX Design With XD"
              image="https://static.dribbble.com/users/61921/screenshots/4439578/channels.png"
            />
            <Card
              title="React Framework"
              image="https://reactjs.org/logo-og.png"
            />
            <Card
              title="API Migration"
              image="https://static.dribbble.com/users/61921/screenshots/5212696/image.png"
            />
            <Card
              title="AWS Cloud Services"
              image="https://static.dribbble.com/users/375563/screenshots/9730344/media/11e32eccd881c5c6c7e88ef05ea321e7.png"
            />
            <Card
              title="CMS API Integration"
              image="https://static.dribbble.com/users/414694/screenshots/5247254/interface_shot_2x.png"
            />
            <Card
              title="Artificial Intelligence"
              image="https://static.dribbble.com/users/8106/screenshots/8512175/media/8d139aa2389ab175d02ffcda127441ee.png"
            />
            <Card
              title="IOS & Androide Apps"
              image="https://static.dribbble.com/users/2024047/screenshots/6262434/_____2x.png"
            />
            <Card
              title="Database infrastructure"
              image="https://static.dribbble.com/users/1018473/screenshots/5664135/security_2x.jpg"
            />
          </div>
        </div>

        <Section
          image="/images/wallpaper2.jpg"
          logo="/images/Logo.svg"
          title="Vision"
          text="EJC Technology is a remote software development company that provides businesses worldwide with custom technology solutions. As an application development company, EJC Technology combines technological expertise, specific domain experience, and passion for excellence to deliver enterprise-grade solutions."
        />
        <div className="Cards-1">
          <h2>ON-DEMAND PLATFORMS</h2>
          <div className="Cards-1Group">
            <Card
              title="Food delivery"
              image="https://static.dribbble.com/users/3245373/screenshots/13538345/media/850794eda2a9b8caeef064c5c94aa2bf.png"
            />
            <Card
              title="E-commerce platform"
              image="https://static.dribbble.com/users/2486061/screenshots/6111669/frame_3.2_2x.png"
            />
            <Card
              title="Business Website"
              image="https://static.dribbble.com/users/412187/screenshots/3263003/violin_dark.png"
            />
            <Card
              title="Online Education"
              image="https://static.dribbble.com/users/1334861/screenshots/7031382/media/bf65525e6f13cc525e056847a5411214.png"
            />
            <Card
              title="Live Dashboard"
              image="https://static.dribbble.com/users/863815/screenshots/9699028/media/461bbfca32fee7b48f52ab6fc3825e12.jpg"
            />
            <Card
              title=" Account Management Systems"
              image="https://static.dribbble.com/users/279993/screenshots/4577081/financeapp_dribbble.png"
            />
          </div>
        </div>
        <StaticContextProvider>
          <Bottom />
        </StaticContextProvider>
      </div>
    </div>
  );
}

export default Home;
