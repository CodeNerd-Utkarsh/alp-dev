import React from "react";
import About from "./About";
import Advice from "./Advice";
import Blog from "./Blog";
import Contact from "./Contact";
import Investments from "./Investments";
import LandingImage from "./LandingImage";
import OurTeam from "./OurTeam";
import VideoIntro from "./VideoIntro";

const Landing = () => {
    return (
        <>
            <LandingImage/>
            <VideoIntro />
            <About />
            <Investments />
            <Advice />
            <OurTeam />
            <Blog />
            <Contact />
        </>
    );
};

export default Landing;
