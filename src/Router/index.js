import React from "react";
import Home from "../Pages/Home/index";
import Team from "../Pages/Team/index";
import Pricing from "../Pages/Pricing/index";
import Careers from "../Pages/Careers/index";
import PromoCard from "../Components/PromoCard/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "../Authentication/Signin/index";
import Signnup from "../Authentication/Signnup/index";
import FAQ from "../Pages/FAQ/index";
import Privacy from "../Pages/Privacy/index";
import Quote from "../Pages/Quote/index";
import Article from "../Components/Article";
import Podcast from "../Pages/Podcast/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team/" component={Team} />
        <Route exact path="/signin/" component={Signin} />
        <Route exact path="/signnup/" component={Signnup} />
        <Route exact path="/quote/" component={Quote} />
        <Route exact path="/careers/" component={Careers} />
        <Route exact path="/article/" component={Article} />
        <Route exact path="/pricing/" component={Pricing} />
        <Route exact path="/promocard/" component={PromoCard} />
        <Route exact path="/faq/" component={FAQ} />
        <Route exact path="/privacy/" component={Privacy} />
        <Route exact path="/podcast/" component={Podcast} />
      </Switch>
    </Router>
  );
}

export default App;
