'use client';

import CanvasLoader from "./components/common/CanvasLoader";
import ScrollWrapper from "./components/common/ScrollWrapper";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import AboutMe from "./components/website_sections/AboutMe";
import CertificatesSection from "./components/website_sections/CertificatesSection";
import FooterSection from "./components/website_sections/FooterSection";
import NavBar from "./components/website_sections/NavBar";
import ProjectsSection from "./components/website_sections/ProjectsSection";

const Home = () => {
  return (
    <>
      <NavBar />

      {/* 3D Canvas */}
      <CanvasLoader>
        <ScrollWrapper>
          <Hero/>
          <Experience/>
          <Footer/>
        </ScrollWrapper>
      </CanvasLoader>

      {/* Website sections below the fold */}
      <AboutMe />
      <ProjectsSection />
      <CertificatesSection />
      <FooterSection />
    </>
  );
};
export default Home;
