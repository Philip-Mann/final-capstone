import './news.css';
import { useState, useEffect } from 'react';

const News = () => {

    const [newsData, setNewsData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(0);

    useEffect(() => {
        const fetchNews = () => {
            setIsLoading(true);
            fetch(`/api/news`)
                .then(res => res.json())
                .then(newsData => {
                    setNewsData(newsData.articles[selectedArticle]);
                    setIsLoading(false);
                    // console.log(newsData);
                });
        };
        fetchNews();
    }, [selectedArticle]);

    return (
        <>
        {isLoading ? <h1>Loading Articles...</h1> : 
        <div className="news-card">
            <div className="news-image">
                <img src={newsData.image} alt={newsData.title} />
            </div>
            <div className="news-content">
                <div className="news-title">
                    <a 
                        href={newsData.url}
                        rel="noreferrer"
                        target="_blank"
                    >
                        <h2>{newsData.name}</h2>
                    </a>
                </div>
                <div className="news-description">
                    <p>{newsData.description}</p>
                </div>
            </div>
        </div>
        }
            <button
                onClick={() => setSelectedArticle(0)}
            >
                Article 1
            </button>
            <button
                onClick={() => setSelectedArticle(1)}
            >
                Article 2
            </button>
            <button
                onClick={() => setSelectedArticle(2)}
            >
                Article 3
            </button>
        </>
    )

}

export default News;