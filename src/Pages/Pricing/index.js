import React from "react";
import Header from "../../Components/Header/index";
import PromoCard from "../../Components/PromoCard/index";
import Bottom from "../../Components/Bottom/index";
import StaticContextProvider from "../../Context/StaticContext/index";
function Princing() {
  return (
    <div className="Hero2">
      <Header />

      <div className="HeadingOne">
        <h1>Pricing</h1>
        <div>
          <PromoCard />
        </div>
        <div className="PricingCard">
          <div className="PricingGroup">
            <div className="Row-border">
              <h3>Package</h3>
            </div>
            <div className="Row-border">
              <h3>Full Content</h3>
            </div>
            <div className="Row-border">
              <h3>Dashboard</h3>
            </div>
            <div className="Row-border">
              <h3>SEO</h3>
            </div>
            <div className="Column-border" style={{ background: "#23b5e7" }}>
              <h4> Business Website</h4>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">{/* <h2></h2> */}</div>
            <div className="Column-border"></div>
            <div className="Column-border" style={{ background: "#23b5e7" }}>
              <h4> E-Commerce Webiste</h4>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border" style={{ background: "#23b5e7" }}>
              <h4> News & Search Portals</h4>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border" style={{ background: "#23b5e7" }}>
              <h4> Accounting Managment</h4>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border" style={{ background: "#23b5e7" }}>
              <h4> Information Portals</h4>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border" style={{ background: "#23b5e7" }}>
              <h4>Educational Website</h4>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
            <div className="Column-border">
              <h2>✔</h2>
            </div>
          </div>
        </div>
      </div>

      <StaticContextProvider>
        <Bottom />
      </StaticContextProvider>
    </div>
  );
}

export default Princing;
