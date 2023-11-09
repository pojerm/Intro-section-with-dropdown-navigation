import "./hero.scss";

interface HeroImageProps {
  mobileImageSrc: string;
  desktopImageSrc: string;
  altText: string;
}

const Hero = ({ mobileImageSrc, desktopImageSrc, altText }: HeroImageProps) => {
  return (
    <div className="hero-image">
      <img
        srcSet={`${mobileImageSrc} 300w, ${desktopImageSrc} 600w`} //ne znam sta ovo znaci
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 75vw, 50vw"
        alt={altText}
      />
    </div>
  );
};

export default Hero;

// public/image-hero-mobile.png
