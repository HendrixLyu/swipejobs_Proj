import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0px;
  letter-spacing: -0.5px;
  /* margin: 0; */
  > p {
    margin: 10px 2px;
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;
const SubTitle = styled.h4`
  margin: 10px 1px;
  font-size: 1rem;
`;

const TextInfo = ({ subTitle: Title, p1, p2 }) => {
  return (
    <Wrapper>
      <SubTitle>{Title}</SubTitle>
      <p>{p1}</p>
      <p>{p2}</p>
    </Wrapper>
  );
};

export default TextInfo;
