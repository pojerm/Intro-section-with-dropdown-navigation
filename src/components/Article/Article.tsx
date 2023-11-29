import "./article.scss";

interface ArticleProps {
  title: string;
  text: string;
  buttonText: string;
}

const Article = ({ title, text, buttonText }: ArticleProps) => {
  return (
    <section className="article-section">
      <div className="article">
        <h1 className="article__title">{title}</h1>
        <p className="article__text">{text}</p>
        <button className="article__button">{buttonText}</button>
      </div>
      {/* sponzori  */}
      <section className="sponsors-desktop">
        <div className="row-desktop">
          <div className="image-wrapper-desktop">
            <img
              className="brand-image-desktop"
              src="/client-databiz.svg"
              alt=""
            />
          </div>
          <div className="image-wrapper-desktop">
            <img
              className="brand-image-desktop"
              src="/client-audiophile.svg"
              alt=""
            />
          </div>
          <div className="image-wrapper-desktop">
            <img
              className="brand-image-desktop"
              src="/client-meet.svg"
              alt=""
            />
          </div>
          <div className="image-wrapper-desktop">
            <img
              className="brand-image-desktop"
              src="/client-maker.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Article;
