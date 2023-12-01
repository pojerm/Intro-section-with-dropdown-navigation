import "./App.scss";
import Hero from "./components/Hero/Hero";
// import Navigation from "./components/Navigation/Navigation";
import imageHeroMobile from "/image-hero-mobile.png";
import imageHeroDesktop from "/image-hero-desktop.png";
import Article from "./components/Article/Article";
import Sponsors from "./components/Sponsors/Sponsors";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      <div className="desktop">
        <Hero
          mobileImageSrc={imageHeroMobile}
          desktopImageSrc={imageHeroDesktop}
        />
        <Article
          title="Make remote work"
          text="Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar. "
          buttonText="Learn more"
        />
      </div>
      <Sponsors />
    </div>
  );
}
