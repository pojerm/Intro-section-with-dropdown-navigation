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
    </section>
  );
};

export default Article;
