import ResultSummaryComponent from "./component/ResultSummaryComponent/ResultSummaryComponent";
// importam variable iz SCSS-A
import "./App.scss";
<<<<<<< Updated upstream
=======
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Article from "./components/Article/Article";
import imageHeroMobile from "/image-hero-mobile.png";
import imageHeroDesktop from "/image-hero-desktop.png";
>>>>>>> Stashed changes

export default function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <ResultSummaryComponent></ResultSummaryComponent>
=======
      <Navigation />
      <Hero
        mobileImageSrc={imageHeroMobile}
        desktopImageSrc={imageHeroDesktop}
        // hero image dosent need altText because its just decorative
      />
      <Article
        title="Make remote work"
        text="Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar."
        buttonText="Learn more"
      />
>>>>>>> Stashed changes
    </div>
  );
}
