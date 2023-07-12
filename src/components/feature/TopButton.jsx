import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", ShowButtonClick);
    return () => {
      window.removeEventListener("scroll", ShowButtonClick);
    };
  }, []);
  return (
    <div>
      {showButton && (
        <Button onClick={scrollToTop} type="button">
          ▲
        </Button>
      )}
    </div>
  );
}

export default TopButton;

const Button = styled.div`
  position: fixed;
  cursor: pointer;
  right: 40px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  color: #c3a27e;
  font-size: 25px;
  border-radius: 50px;
  background-color: #c3a27e48;
  text-align: center;
  padding-top: 7px;
`;
