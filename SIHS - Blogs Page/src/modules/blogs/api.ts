import { useEffect, useState } from 'react';
import axios from 'axios';
import { BlogPostWithMediaDto, MediaDto } from './dtos';

// Base URL for API requests
const baseUrl = "https://sihs.org.pk/wp-json/wp/v2";

// Custom hook to fetch multiple posts with pagination
export const useGetPosts = (page: number, limit = 12) => {
    const [posts, setPosts] = useState<Array<BlogPostWithMediaDto> | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const postsUrl = `${baseUrl}/posts?per_page=${limit}&page=${page}&categories=21&orderBy=date&order=desc`;
                console.log("Fetching posts from:", postsUrl);

                const response = await axios.get<Array<BlogPostWithMediaDto>>(postsUrl);
                console.log("Posts response:", response.data);

                const posts: Array<BlogPostWithMediaDto> = response.data;
                const promises = posts.map(post =>
                    axios.get<MediaDto>(`${baseUrl}/media/${post.featured_media}`)
                );
                const mediaResponses = await Promise.allSettled(promises);
                const mediaItems: Array<MediaDto | undefined> = mediaResponses.map(response =>
                    response.status === "fulfilled" ? response.value.data : undefined
                );

                const postsWithMedia = posts.map((post, index) => ({
                    ...post,
                    media: mediaItems[index]
                }));

                console.log("Posts with media:", postsWithMedia);
                setPosts(postsWithMedia);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [page, limit]);

    return { posts, isLoading, error };
};
