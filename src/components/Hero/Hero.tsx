import "./hero.scss";

interface HeroImageProps {
  mobileImageSrc: string;
  desktopImageSrc: string;
}

const Hero = ({ mobileImageSrc, desktopImageSrc }: HeroImageProps) => {
  return (
    <div className="hero-image">
      <img
        srcSet={`${mobileImageSrc} 375w, ${desktopImageSrc} 1440w`} //  intrinsic size is its real size
        sizes="(min-width: 300px) 375px, 800px" // ne znam kako ovo radi
      />
    </div>
  );
};

export default Hero;

// public/image-hero-mobile.png
