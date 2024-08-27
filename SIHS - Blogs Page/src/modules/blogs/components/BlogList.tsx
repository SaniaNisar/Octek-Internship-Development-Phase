import React from 'react';
import { BlogPostWithMediaDto } from '../dtos';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

type BlogListProps = {
    posts: Array<BlogPostWithMediaDto>;
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    const navigate = useNavigate();
    
    const handleReadMore = (postId: number) => {
        navigate(`/blogs/${postId}`);
    };

    return (
        <Box
            display="grid"
            gridTemplateColumns={{
                xs: 'repeat(1, 1fr)', 
                sm: 'repeat(1, 1fr)', 
                md: 'repeat(2, 1fr)', 
                lg: 'repeat(4, 1fr)', 
            }}
            gap={1}
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
                        <Box sx={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                                {formatDistanceToNow(new Date(post.date))} ago
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '100%',
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
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default BlogList;
