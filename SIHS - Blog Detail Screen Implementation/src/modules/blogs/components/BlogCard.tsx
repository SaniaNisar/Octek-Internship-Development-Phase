import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { BlogPostWithMediaDto } from '../dtos';

type Props = {
  post: BlogPostWithMediaDto;
};

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {post.media && (
        <CardMedia
          component="img"
          height="140"
          image={post.media.source_url}
          alt={post.title.rendered}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title.rendered}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '')} {/* Strip HTML tags */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
