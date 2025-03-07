import { createBrowserRouter, Routes, Route, RouterProvider} from 'react-router-dom';
import styled from 'styled-components';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from './components/Home';
import Education from './components/Education';
import Employment from './components/Employment';
import Achievements from './components/Achievements';
import References from './components/References';
import Projects from './components/Projects';

const StyledMain = styled.main`
  width: 70%;
  flex-direction: column;
  background-color: #F5F5F5;
  color: #303030;
  padding: 2vh 2vw;
    

  @media screen and (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      width:100%;
      min-height: 100vh;
  }
`;

const StyledPage = styled.div`
    width: 80vw;
    margin: 0 auto;
    
    @media screen and (max-width: 1000px) {
        width: 90vw;
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #fff;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

function Root(){
    return(
            <StyledPage>
                <Header />
                <StyledContainer>
                    <Nav />
                    <StyledMain>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/employment" element={<Employment />} />
                            <Route path="/achievements" element={<Achievements />} />
                            <Route path="/references" element={<References />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </StyledMain>
                </StyledContainer>
                <Footer />
            </StyledPage>
    );
}

const router = createBrowserRouter([
    { path: '*', Component: Root }
]);

export default function App() {
    return <RouterProvider router={router} />;
}