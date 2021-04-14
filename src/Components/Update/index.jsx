import React from "react";
import styled from "styled-components";

const NoteHere = styled.div`
  width: 100%;
  background-color: #04619f;
`;
const LinkGroup = styled.a`
  /* margin-top: 10px; */
  margin-left: 460px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;

  a {
    color: #f9484a;
  }
`;

const Update = () => {
  return (
    <NoteHere>
      <LinkGroup>
        For COVID-19 updates, visit official government website
        <a href="https://sacoronavirus.co.za/"> www.sacoronavirus.co.za</a>
      </LinkGroup>
    </NoteHere>
  );
};

export default Update;
