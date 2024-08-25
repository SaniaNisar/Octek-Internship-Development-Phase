import React from 'react';
import { BlogPostWithMediaDto } from '../dtos';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type BlogListProps = {
    posts: Array<BlogPostWithMediaDto>;
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    const navigate = useNavigate();
    
    const handleReadMore = (postId: number) => {
        navigate(`/posts/${postId}`);
    };

    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap={2}
        >
            {posts.map(post => (
                <Card
                    key={post.id}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '430px',
                        boxSizing: 'border-box',
                    }}
                >
                    {post.media && (
                        <CardMedia
                            component="img"
                            height="260"
                            image={post.media.source_url}
                            alt={post.title.rendered}
                        />
                    )}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" component="div">
                            {post.title.rendered}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                marginTop: 'auto', 
                                width: '100%',
                                marginBottom: 0,
                                backgroundColor: '#FFE0E1',
                                color: '#CF2128',
                                ":hover": {
                                    backgroundColor: '#CF2128',
                                    color: '#FFE0E1',
                                }
                            }}
                            onClick={() => handleReadMore(post.id)}
                        >
                            Read More
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default BlogList;
