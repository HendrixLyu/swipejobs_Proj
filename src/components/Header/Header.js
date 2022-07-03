import { useEffect, useState } from "react";
import styled from "styled-components";
import getWorkerName from "../../apis/getWorkerByID/getWorkerById";

const HeaderWrapper = styled.div`
  background: #000;
  color: #fff;
  padding: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;
const LogoStyle = styled.span`
  font-weight: 300;
  font-size: 1.6rem;
  ::after {
    content: "jobs";
    font-weight: 700;
  }
  ::before {
    content: ".";
    display: block;
    margin-top: -8px;
    height: 4px;
    background: red;
    width: 4px;
    transform: translateX(800%);
    opacity: 0.7;
  }
`;
const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: 250;
`;

const Header = () => {
  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getWorkerName().then(res => {
      setUserName(res.data.firstName + "." + res.data.lastName);
    });
    setLoading(false);
  }, []);
  return (
    <>
      {!loading && (
        <HeaderWrapper>
          <LogoStyle>swipe</LogoStyle>
          <UserName>{userName}</UserName>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
