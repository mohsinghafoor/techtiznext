import { LandingPage } from "./components/landingpage/LandingPage";
import styled from "@emotion/styled";

export default function HomePage() {
  return (
    <>
      <LandingPage />
    </>
  )
}

const Section = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
`;

const Section1 = styled(Section)`
  background-color: red;
  z-index: 3;
`;

const Section2 = styled(Section)`
  background-color: green;
  z-index: 2;
  transform: translate3d(0, 0, 0);
`;

const Section3 = styled(Section)`
  background-color: blue;
  z-index: 1;
  transform: translate3d(0, 0, 0);
`;