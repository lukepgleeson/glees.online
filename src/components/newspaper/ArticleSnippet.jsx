export default function ArticleSnippet({ article, onClick }) {
  return (
    <button
      className="article-snippet"
      style={article.slot}
      onClick={onClick}
      aria-label={`Read article: ${article.title}`}
    >
      <h3 className="snippet-title">{article.title}</h3>
      <hr className="snippet-rule" />
      <p className="snippet-body">{article.snippet}</p>
      <span className="snippet-read-more">Read more →</span>
    </button>
  );
}
