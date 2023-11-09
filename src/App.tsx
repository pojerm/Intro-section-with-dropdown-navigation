import "./App.scss";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import imageHeroMobile from "/image-hero-mobile.png";
import imageHeroDesktop from "/image-hero-desktop.png";
import Article from "./components/Article/Article";

export default function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}
