import React from "react";
import Header from "../../Components/Header/index";
import Bottom from "../../Components/Bottom/index";
import StaticContextProvider from "../../Context/StaticContext";

function Quote() {
  return (
    <div>
      <Header />
      <div className="CardQuote">
        <form name="contact" className="form" action="/contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input
            required
            maxlength="30"
            type="email"
            name="email"
            placeholder="Email address"
          />
          <input
            required
            maxlength="30"
            name="project"
            type="project"
            placeholder="What your poject need?"
          />
          <input
            required
            maxlength="20"
            name="budget"
            type="budget"
            placeholder="What is your budget?"
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <StaticContextProvider>
        <Bottom />
      </StaticContextProvider>
    </div>
  );
}

export default Quote;
