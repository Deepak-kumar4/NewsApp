import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem.js';
import { Grid, Button } from '@mui/material';
import Navbar from './Navbar.js';
function Home() {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const getNews = (category, page) => {
        const pageSize = 12;
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=c22552912d6f4fafa816bd5943f3f957`)
            .then(res => res.json())
            .then(json => setNews(json.articles))
            .catch(error => console.error('Error fetching news:', error));
    };

    useEffect(() => {
        getNews(category, currentPage);
    }, [category, currentPage]);

    const handleCategorySelect = (selectedCategory) => {
        setCategory(selectedCategory);
        setCurrentPage(1); 
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div style={{ margin: '20px', padding: '20px' }}>
            <Navbar onCategorySelect={handleCategorySelect} />
            <Grid container spacing={2} style={{ marginTop: '20px' }}>
                {news.map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <NewsItem data={data} />
                    </Grid>
                ))}
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button onClick={handlePrevPage} disabled={currentPage === 1}>Previous Page</Button>
                <Button onClick={handleNextPage}>Next Page</Button>
            </div>
        </div>
    );
}

export default Home;


