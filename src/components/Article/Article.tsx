import "./article.scss";

interface ArticleProps {
  title: string;
  text: string;
  buttonText: string;
}

const Article = ({ title, text, buttonText }: ArticleProps) => {
  return (
    <div className="article-section">
      <h1 className="article-section__title">{title}</h1>
      <p className="article-section__text">{text}</p>
      <button className="article-section__button">{buttonText}</button>
    </div>
  );
};

export default Article;
