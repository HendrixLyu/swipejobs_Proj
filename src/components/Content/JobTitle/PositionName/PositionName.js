import styled from "styled-components";

const NameDisplay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 8px 17px;
  letter-spacing: 1px;
  > h3 {
    font-weight: 750;
    letter-spacing: -0.2px;
    margin: 0px;
  }
  > h4 {
    font-weight: 550;
    letter-spacing: -0.5px;
    margin: 0px;
  }
`;
const SwitchBtn = styled.button`
  background: transparent;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 45%;
  background: #eeeeee;
  position: absolute;
  cursor: pointer;
  right: 15px;
  top: 10px;
  :hover {
    animation: switch_Logo ease-in 0.8s infinite;
  }
  @keyframes switch_Logo {
    from,
    to {
      filter: invert(1);
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: 768px) {
    /* pointer-events: none; */
    top: 15px;
    width: 25px;
    height: 25px;
    border-radius: 48%;
    :hover {
      animation: none;
    }
  }
`;

const PositionName = ({
  currJobID,
  positionName,
  companyName,
  positionID,
  setPositionID,
}) => {
  return (
    <NameDisplay>
      <h3>{positionName}</h3>
      <h4>{companyName}</h4>
      <SwitchBtn
        onClick={event => {
          event.preventDefault();
          setPositionID(currJobID);
          console.log("click!");
        }}
      >
        <i className="fa-solid fa-arrow-right" />
      </SwitchBtn>
    </NameDisplay>
  );
};

export default PositionName;
