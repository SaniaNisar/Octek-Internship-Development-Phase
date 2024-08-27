import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  CircularProgress,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import { useGetPostById } from "../api";
import { formatDistanceToNow } from "date-fns";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { post, isLoading, error } = useGetPostById(Number(id));

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!post) {
    return <Typography>No post found</Typography>;
  }

  // Log to check the post data
  console.log("Post Data:", post);

  return (
    <Container
      maxWidth={false} // Make the container full width
      sx={{ paddingLeft: 10, paddingRight: 10, marginTop: 2 }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", marginTop: 2 }}
      >
        {post.title.rendered}
      </Typography>
      <Box
        sx={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center align items
          width: "100%", // Full width for Box
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 1 }}
        >
          {formatDistanceToNow(new Date(post.date))} ago
        </Typography>
        {post.media && post.media.source_url && (
          <CardMedia
            component="img"
            sx={{
              width: "100%", // Ensure the image takes up the full width of the container
              height: "auto", // Maintain aspect ratio
              objectFit: "cover", // Cover the container while maintaining aspect ratio
            }}
            image={post.media.source_url}
            alt={post.title.rendered}
          />
        )}
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          sx={{ textAlign: "justify", marginTop: 2, width: "100%" }} // Ensure content spans full width
        />
      </Box>
    </Container>
  );
};

export default BlogDetailPage;
