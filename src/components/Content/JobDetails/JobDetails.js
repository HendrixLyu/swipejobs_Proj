// import { useEffect, useState } from "react";
import styled from "styled-components";
import EachDetailLayout from "./EachDetailLayout";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const dateIcon = <i className="fa-regular fa-calendar-days" />;
const locationIcon = <i className="fa-solid fa-location-dot" />;
const requirementIcon = <i className="fa-solid fa-screwdriver-wrench" />;
const reportIcon = <i className="fa-solid fa-circle-user" />;

const JobDetails = ({ data }) => {
  let IconAndTitleList = [
    {
      key: "date",
      icon: dateIcon,
      subTitle: "Shift Dates:",
      p1: data.shifts[0].startDate,
      p2: data.shifts[0].endDate,
    },
    {
      key: "location",
      icon: locationIcon,
      subTitle: "Location:",
      p1: data.company.address.formattedAddress,
      p2: `${data.milesToTravel} miles from your search location`,
    },
    {
      key: "require",
      icon: requirementIcon,
      subTitle: "Requirements:",
      p1: data.requirements && `- ${data.requirements[0]}`,
      p2: data.requirements && `- ${data.requirements[1]}`,
    },
    {
      key: "report",
      icon: reportIcon,
      subTitle: "Report To:",
      p1: data.company.reportTo.name,
      p2: data.company.reportTo.phone && data.company.reportTo.phone,
    },
  ];
  // const [job, setJob] = useState()

  return (
    <Wrapper>
      {IconAndTitleList.map(item => (
        <EachDetailLayout
          key={item.key}
          oneIcon={item.icon}
          subTitle={item.subTitle}
          p1={item.p1}
          p2={item.p2}
        />
      ))}
    </Wrapper>
  );
};

export default JobDetails;
