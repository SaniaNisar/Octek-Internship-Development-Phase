# Blog Fetching and Lazy Loading with MaterialUI and React

This project demonstrates how to fetch blog posts from a WordPress website using a custom React hook and implement lazy loading to load additional blogs as the user scrolls down the page. This functionality is already implemented in our mobile app, and now you can integrate it into your web application using the provided hook.

## Features

- **Fetch Blogs**: Fetch blogs from a WordPress website using a custom hook.
- **Lazy Loading**: Load more blogs as the user scrolls down the page.
- **Responsive Layout**: Display blogs in a responsive grid layout with 4 blogs per row.
- **Interactive UI**: Each blog card includes a "Read More" button that navigates to the blog's details page.

## Troubleshooting
- **400 Error on API Call**: Ensure that the WordPress API endpoint and query parameters are correct and valid. If you encounter a 400 error, check the API documentation for any required parameters or constraints.
- **Duplicate Blogs**: If you see duplicate blogs, ensure that your page state is correctly managed and that you append new posts to the existing list instead of replacing them.
