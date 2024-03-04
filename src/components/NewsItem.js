import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia, Button } from "@mui/material";


const defaultImageUrl = 'https://pro-comm-online.com/wp-content/uploads/2019/11/not-available.jpg'

function NewsItem({ data }) {
    console.log(data);

    // Function to truncate the description to 40 words
    const truncateDescription = (description) => {
        if (!description) return ""; // Return empty string if description is null
        const words = description.split(' ');
        if (words.length > 20) {
            return words.slice(0, 20).join(' ') + '...';
        }
        return description;
    };

    return (
        <div>
            <Box>
                <Card>
                    <CardMedia
                        height="200"
                        component="img"
                        image={data.urlToImage || defaultImageUrl}
                    />
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold" }}>
                            {data.title}
                        </Typography>
                        <Typography>
                            {truncateDescription(data.description)}
                        </Typography>
                        <Button variant="contained" color="primary" href={data.url} target="_blank" style={{ textTransform: 'none' }}>
                            Read More...
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default NewsItem;

