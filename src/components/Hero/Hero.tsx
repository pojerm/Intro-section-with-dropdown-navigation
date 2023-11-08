import "./hero.scss";

interface HeroImageProps {
  mobileImageSrc: string;
  desktopImageSrc: string;
}

const Hero = ({ mobileImageSrc, desktopImageSrc }: HeroImageProps) => {
  return (
    <div className="hero-image">
      <img
        srcSet={`${mobileImageSrc} 750w, ${desktopImageSrc} 1000w`} //treba postavit ovaj width koretnoee
      />
    </div>
  );
};

export default Hero;

// public/image-hero-mobile.png
