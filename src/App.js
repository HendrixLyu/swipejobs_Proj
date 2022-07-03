import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top right, #69c0ff 10%, #b7eb8f 90%); ;
`;
const Container = styled.div`
  box-shadow: 5px 10px 35px rgb(0 0 0 / 0.3);
  background-color: #fff;
  overflow: hidden;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    overflow: visible;
    border-radius: 0;
    box-shadow: 8px 2px 30px rgb(0 0 0 / 0.3);
  }
`;

function App() {
  return (
    <Wrapper>
      {/* <div>Hendrix Proj.</div> */}
      <Container>
        <Header userName={"Jim Rose"} />
        <Content />
      </Container>
    </Wrapper>
  );
}

export default App;
