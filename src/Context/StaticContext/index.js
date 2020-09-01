import React, { createContext, useState } from "react";

export const StaticContext = createContext();

const StaticContextProvider = (props) => {
  const [contents] = useState({
    title: "Main",

    fisrtLink: "Home",

    secondLink: "Pricing",

    // lastLink: "Contact Us",
  });

  const [contents_01] = useState({
    title: "Resources",

    fisrtLink: "Policy",

    secondLink: "FAQ",

    // lastLink: "Online Tutors",
  });

  const [contents_02] = useState({
    title: "Commumity",

    fisrtLink: "Team",

    secondLink: "Career",

    // lastLink: "Founders",
  });

  return (
    <StaticContext.Provider value={{ contents, contents_01, contents_02 }}>
      {props.children}
    </StaticContext.Provider>
  );
};

export default StaticContextProvider;
