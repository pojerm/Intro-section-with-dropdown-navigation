import "./sponsors.scss";

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="row">
        <div className="image-wrapper">
          <img className="brand-image" src="/client-databiz.svg" alt="" />
        </div>
        <div className="image-wrapper">
          <img className="brand-image" src="/client-audiophile.svg" alt="" />
        </div>
        <div className="image-wrapper">
          <img className="brand-image" src="/client-meet.svg" alt="" />
        </div>
        <div className="image-wrapper">
          <img className="brand-image" src="/client-maker.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
