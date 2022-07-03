import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import acceptJob from "../../../apis/AcceptJobByID/AcceptJobById";
import axios from "axios";

const BlackStyle = css`
  background: #000;
  color: #fff;
`;
const BtnStyle = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 20px;
  outline: none;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  padding: 15px 10px;
  width: 50%;
  box-sizing: border-box;
  & ~ & {
    margin-left: 0;
  }
  &:hover {
    filter: invert(70%);
  }
  ${({ isBlack }) => isBlack && BlackStyle}
  @media screen and (max-width: 768px) {
    margin: 2px 15px 15px 15px;
    width: 50%;
    border-radius: 5px;
    & ~ & {
      margin-left: 0rem;
    }
  }
`;

const Button = ({ data, isBlack = false, children }) => {
  const [action, setAction] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   acceptJob(Number(data.jobId)).then(res => {
  //     setAction(res.data);
  //     setLoading(false);
  //   });
  // }, []);
  useEffect(() => {
    axios
      .get(
        "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/job/5775d8e18a488e6c5bb08c13/reject"
      )
      .then(res => {
        setAction(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading && (
        <BtnStyle
          isBlack={isBlack}
          onClick={event => {
            event.preventDefault();
            console.log(action);
          }}
        >
          {children}
        </BtnStyle>
      )}
    </>
  );
};

export default Button;
