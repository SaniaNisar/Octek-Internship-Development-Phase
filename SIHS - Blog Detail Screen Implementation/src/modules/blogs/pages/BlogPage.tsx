import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Container, CircularProgress, Typography, Box } from '@mui/material';
import BlogList from '../components/BlogList';
import {useGetPosts} from '../api';

const BlogPage: React.FC = () => {
    const [page, setPage] = useState(1);
    const [allPosts, setAllPosts] = useState<any[]>([]);
    const [hasMorePosts, setHasMorePosts] = useState(true);
    const { posts, isLoading, error } = useGetPosts(page);

    useEffect(() => {
        if (posts && posts.length > 0) {
            setAllPosts((prevPosts) => {
                const newPosts = posts.filter(
                    (post) => !prevPosts.some((p) => p.id === post.id)
                );
                return [...prevPosts, ...newPosts];
            });
        } else if (posts && posts.length === 0) {
            setHasMorePosts(false);
        }
    }, [posts]);

    const observerRef = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useCallback(
        (node: HTMLDivElement) => {
            if (isLoading || !hasMorePosts) return;
            if (observerRef.current) observerRef.current.disconnect();
            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            if (node) observerRef.current.observe(node);
        },
        [isLoading, hasMorePosts]
    );

    useEffect(() => {
        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    return (
        <Container 
            disableGutters 
            maxWidth={false} 
            sx={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}
        >
            {allPosts && allPosts.length > 0 && (
                <BlogList posts={allPosts} />
            )}
            {isLoading && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="70vh"
                >
                    <CircularProgress />
                </Box>
            )}
            {error && <Typography color="error">{error}</Typography>}
            {!isLoading && !error && allPosts.length === 0 && (
                <Typography>No posts available</Typography>
            )}
            <Box ref={lastElementRef} textAlign="center" marginTop={2}>
                {!isLoading && !error && hasMorePosts && (
                    <Typography>Loading more posts...</Typography>
                )}
                {!hasMorePosts && (
                    <Typography>No more posts to load</Typography>
                )}
            </Box>
        </Container>
    );
};

export default BlogPage;
