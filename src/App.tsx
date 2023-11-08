import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import imageHeroMobile from "/image-hero-mobile.png";
import imageHeroDesktop from "/image-hero-desktop.png";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero
        mobileImageSrc={imageHeroMobile}
        desktopImageSrc={imageHeroDesktop}
        // hero image dosent need altText because its just decorative
      />
    </div>
  );
}
