import styled from "styled-components";
import AttributeLayout from "./AttributeLayout";

const Wrapper = styled.div`
  background: #30d5ab;
  padding: 5px 15px;
  line-height: 0;
`;

const AttributeName = styled(AttributeLayout)`
  font-size: 0.18rem;
  letter-spacing: -1px;
  margin-top: 5px;
  > h3 {
    margin: 8px 0px;
    line-height: 5px;
  }
`;
const AttributeValue = styled(AttributeLayout)`
  color: #fff;
  font-size: 1.5rem;
  > h4 {
    margin: 0px;
    line-height: 30px;
  }
`;
const PositionDistanceAndSalary = ({ Distance, Salary }) => {
  return (
    <Wrapper>
      <AttributeName>
        <h3>Distance</h3>
        <h3>Hourly Rate</h3>
      </AttributeName>
      <AttributeValue>
        <h4>{Distance} miles</h4>
        <h4>${Salary}</h4>
      </AttributeValue>
    </Wrapper>
  );
};

export default PositionDistanceAndSalary;
