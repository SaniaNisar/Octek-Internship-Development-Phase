import { useEffect, useState } from 'react';
import axios from 'axios';
import { BlogPostWithMediaDto, MediaDto } from './dtos';

const baseUrl = "https://sihs.org.pk/wp-json/wp/v2";

const useGetPosts = (page: number, limit = 12) => {
    const [posts, setPosts] = useState<Array<BlogPostWithMediaDto> | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('useEffect triggered');
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const postsUrl = `${baseUrl}/posts?per_page=${limit}&page=${page}&categories=21&orderBy=date&order=desc`;
                console.log("Fetching posts from:", postsUrl);

                const response = await axios.get(postsUrl);
                console.log("Posts response:", response.data);

                const posts: Array<BlogPostWithMediaDto> = response.data;
                const promises = posts.map(post =>
                    axios.get(`${baseUrl}/media/${post.featured_media}`)
                );
                const mediaResponses = await Promise.allSettled(promises);
                const mediaItems: Array<MediaDto | undefined> = mediaResponses.map(response =>
                    response.status === "fulfilled" ? response.value.data as MediaDto : undefined
                );

                const postsWithMedia = posts.map((post, index) => ({
                    ...post,
                    media: mediaItems[index]
                }));

                console.log("Posts with media:", postsWithMedia);
                setPosts(postsWithMedia);
            } catch (err: any) {
                console.error("Error fetching posts:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [page, limit]);

    return { posts, isLoading, error };
};

export default useGetPosts;
