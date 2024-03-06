import styled from "styled-components"
import Header from "./assets/components/header/Header";
import SpaceSection from "./assets/components/Section/SpaceSection";


const BodyStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  font-family: "Space Mono", monospace;
  font-size: 18px;
  color: white;
  height: 565.522vh;
  width: 100vw;
  background-color:#1F1F1F;
`;
function App() {
  return (
    <BodyStyle>
      <Header/>
      <SpaceSection/>



    </BodyStyle>
  )
}

export default App
