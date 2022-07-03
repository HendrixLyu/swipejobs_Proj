import styled from "styled-components";
import Icon from "./Icon";
import TextInfo from "./TextInfo";

const Wrapper = styled.div`
  padding: 8px 0px;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  min-height: 60px;
  & ~ & {
    border-top: 1.5px solid #eeeeee;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    min-width: 330px;
  }
`;

const EachDetailLayout = ({ oneIcon, subTitle, p1, p2 }) => {
  return (
    <Wrapper>
      <Icon oneIcon={oneIcon} />
      <TextInfo subTitle={subTitle} p1={p1} p2={p2} />
    </Wrapper>
  );
};

export default EachDetailLayout;
