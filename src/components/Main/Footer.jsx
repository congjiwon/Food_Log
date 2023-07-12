import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterLayout>
      <FootertParagraph>
        © 2023 &nbsp;
        <FooterLink to="/">Daily FoodLog &nbsp;</FooterLink>
        powered by &nbsp;
        <FooterLink
          target="_blank"
          to="https://github.com/DHyeonJ/React_NewsFeed"
        >
          깃허브 주소 넣기
        </FooterLink>
      </FootertParagraph>
    </FooterLayout>
  );
}

export default Footer;

const FooterLayout = styled.footer`
  display: flex;
  justify-content: center;
  height: 150px;
  margin-top: 160px;
  color: #3f2305;
`;
const FootertParagraph = styled.p`
  margin-top: 140px;
`;

const FooterLink = styled(Link)`
  color: #3f2305;
  font-weight: 600;
`;
