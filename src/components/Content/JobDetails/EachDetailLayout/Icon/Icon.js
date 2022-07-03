import styled from "styled-components";

const IconStyle = styled.div`
  margin-right: 20px;
`;

const Icon = ({ oneIcon }) => {
  return <IconStyle> {oneIcon} </IconStyle>;
};

export default Icon;
