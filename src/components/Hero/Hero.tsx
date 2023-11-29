import "./hero.scss";

interface HeroImageProps {
  mobileImageSrc: string;
  desktopImageSrc: string;
}

const Hero = ({ mobileImageSrc, desktopImageSrc }: HeroImageProps) => {
  return (
    <div className="hero-wrapper">
      <img
        srcSet={`${mobileImageSrc} 375w, ${desktopImageSrc} 1440w`} //  intrinsic size is its real size
        sizes="(max-width: 700px) 375px, 1440px" // do najmanje x je ovo poslje ovo drugo
      />
    </div>
  );
};

export default Hero;

// public/image-hero-mobile.png
