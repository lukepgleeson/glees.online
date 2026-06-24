import React from 'react';
import newspaperImg from '../../assets/Newspaper.png';
import ArticleSnippet from './ArticleSnippet.jsx';
import ArticleFull from './ArticleFull.jsx';
import articles from './articlesData.js';
import CloseButton from '../CloseButton.jsx';
import '../../styles/newspaper/Newspaper.css';

export default function Newspaper({ onClose }) {
  const [activeArticle, setActiveArticle] = React.useState(null);

  return (
    <div className="newspaper-overlay" onClick={onClose}>
      <CloseButton onClick={onClose} />

      {activeArticle ? (
        <ArticleFull
          article={activeArticle}
          onBack={() => setActiveArticle(null)}
        />
      ) : (
        <div className="newspaper-spread" onClick={e => e.stopPropagation()}>
          <img src={newspaperImg} alt="Newspaper" className="newspaper-bg" />
          {articles.map(article => (
            <ArticleSnippet
              key={article.id}
              article={article}
              onClick={() => setActiveArticle(article)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
