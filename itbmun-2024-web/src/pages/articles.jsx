import React from 'react';
import '../styles/articles.css';
import { articles1, articles2, articles3 } from '../components/articlescontent.jsx';

const Articles = () => {
  const renderArticles = (articles) => {
    return articles.map((article, index) => (
      <div className="article-box" key={index}>
        <h2>{article.header.title}</h2>
        <p>{article.content[0].text}</p>
        <img src={article.header.thumbnail} alt="Article Thumbnail" />
        <p>Date: {article.header.date.toDateString()}</p>
      </div>
    ));
  };

  return (
    <div className='article-list'>
      <div className="article-list-child">
        {renderArticles(articles1)}
      </div>
      <div className='article-list-child'>
        {renderArticles(articles2)}
      </div>
      <div className='article-list-child'>
        {renderArticles(articles3)}
      </div>
    </div>
  );
};

export default Articles;
