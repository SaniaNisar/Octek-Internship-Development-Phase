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

// Custom hook to fetch a single post by ID
export const useGetPostById = (id: number) => {
    const [post, setPost] = useState<BlogPostWithMediaDto | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setIsLoading(true);
                const postUrl = `${baseUrl}/posts/${id}`;
                console.log("Fetching post from:", postUrl);

                const response = await axios.get<BlogPostWithMediaDto>(postUrl);
                console.log("Post response:", response.data);

                const fetchedPost: BlogPostWithMediaDto = response.data;
                let media: MediaDto | undefined;

                if (fetchedPost.featured_media) {
                    const mediaUrl = `${baseUrl}/media/${fetchedPost.featured_media}`;
                    const mediaResponse = await axios.get<MediaDto>(mediaUrl);
                    media = mediaResponse.data;
                }

                const postWithMedia = { ...fetchedPost, media };

                console.log("Post with media:", postWithMedia);
                setPost(postWithMedia);
            } catch (err) {
                console.error("Error fetching post:", err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    return { post, isLoading, error };
};
