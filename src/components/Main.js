import React from 'react';
import { useState, useEffect } from 'react';
function Main() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let url =
      'https://newsapi.org/v2/everything?q=microsoft&apiKey=aadc8a8a9a054df7a7a8f09d14427c0b';
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  }, []);

  function readValue(value) {
    setSearch(value);
  }

  function searchNews() {
    let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=aadc8a8a9a054df7a7a8f09d14427c0b`;
    fetch(url)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      });
  }

  return (
    <div className="container">
      <div className="padd">
        <div className="filter">
          <input
            type="search"
            onChange={(event) => {
              readValue(event.target.value);
            }}
            placeholder="topic of your interest"
          />
          <button className="btn" onClick={searchNews}>
            search
          </button>
        </div>
        <h1>ALL NEWS</h1>
        {articles.length === 0 ? (
          <h2>No Data Found</h2>
        ) : (
          articles.map((article, index) => (
            <div key={index} className="article">
              <div className="padd-article">
                <div className="news-img">
                  <img src={article.urlToImage} alt="" />
                </div>
                <div className="news-detail">
                  <h2>{article.title}</h2>
                  <p>{article.author}</p>
                  <p>{article.description}</p>
                  <p>
                    <a href={article.url} target="blank">
                      <button className="btn">
                        <span>Read More</span>
                      </button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
