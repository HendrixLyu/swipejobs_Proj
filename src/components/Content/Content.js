import styled from "styled-components";
import JobTitle from "./JobTitle";
import JobDetails from "./JobDetails";
import Button from "./Button";
import { useEffect, useState } from "react";
import getMatchedJobs from "../../apis/getMatchedJobs/getMatchedJobs";

const Layout = styled.div`
  background-color: #eeeeee;
  padding: 10px;
`;
const MainBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    border-radius: 5px;
  }
`;
const JobInfoDisplay = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    box-shadow: none;
    padding: 0;
  }
`;

const Content = () => {
  // "5775d8e18a488e6c5bb08333"; //current JobID
  const [positionID, setPositionID] = useState("5775d8e18a488e6c5bb08333");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMatchedJobs()
      // axios.get("https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches")
      .then(res => {
        res.data.forEach(item => {
          if (item.jobId !== positionID) {
            setData(item);
            // console.log(res.data);
          }
        });
        setLoading(false);
      });
  }, [positionID]);
  return (
    <>
      {!loading && (
        <Layout>
          <MainBox>
            <JobInfoDisplay>
              <JobTitle
                data={data}
                setData={setData}
                positionID={positionID}
                setPositionID={setPositionID}
              />
              <JobDetails data={data} />
            </JobInfoDisplay>
            <BtnGroup>
              <Button data={data}>No Thanks</Button>
              <Button data={data} isBlack>I'll take it!</Button>
            </BtnGroup>
          </MainBox>
        </Layout>
      )}
    </>
  );
};

export default Content;
