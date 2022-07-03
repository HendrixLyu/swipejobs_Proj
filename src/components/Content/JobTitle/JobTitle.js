import styled from "styled-components";
import PositionName from "./PositionName";
import PositionDistanceAndSalary from "./PositionDistanceAndSalary";
// import { useEffect, useState } from "react";
// import axios from "axios";

const JobTitleDisplay = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  min-width: 340px;
`;
const PositionImg = styled.div`
  background: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  height: 240px;
  @media screen and (max-width: 768px) {
    height: 135px;
  }
`;

const ImgSrc =
  "https://excellentmps.com/wp-content/uploads/2018/07/construction-helper.jpg";

const JobTitle = ({ data, setData, positionID, setPositionID }) => {
  return (
    <JobTitleDisplay>
      <PositionImg src={ImgSrc} alt="bg_img" />
      <PositionName
        currJobID={data.jobId}
        positionName={data.jobTitle.name}
        companyName={data.company.name}
        setData={setData}
        positionID={positionID}
        setPositionID={setPositionID}
      />

      <PositionDistanceAndSalary
        Distance={data.milesToTravel}
        Salary={data.wagePerHourInCents}
      />
    </JobTitleDisplay>
  );
};

export default JobTitle;
