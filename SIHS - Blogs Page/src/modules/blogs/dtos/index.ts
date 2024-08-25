export interface MediaDto {
    id: number;
    date: string;
    slug: string;
    type: string;
    link: string;
    title: { rendered: string };
    caption: { rendered: string };
    alt_text: string;
    media_type: string;
    source_url: string; 
  }
  
  export interface BlogPostWithMediaDto {
    id: number;
    date: string;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    featured_media: number; 
    media?: MediaDto; 
  }
  