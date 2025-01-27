import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import { CalendarToday, Person } from '@mui/icons-material';

const blogPosts = [
  {
    id: 1,
    title: "Study finds link between early stages of...",
    date: "June 10, 2022",
    imageUrl: "https://i.pinimg.com/236x/61/bf/13/61bf1369c1d5dd6ac283f3519946ad28.jpg",
    author: "Themedraft",
  },
  {
    id: 2,
    title: "Every second someone develops the rare eye...",
    date: "June 10, 2022",
    imageUrl: "https://i.pinimg.com/236x/f9/b0/12/f9b0121f2b8b09aabc4c5cf89ddce36c.jpg",
    author: "Themedraft",
  },
  {
    id: 3,
    title: "Specialist doctor shares tips for your healthy...",
    date: "June 10, 2022",
    imageUrl: "https://i.pinimg.com/236x/61/bf/13/61bf1369c1d5dd6ac283f3519946ad28.jpg",
    author: "Themedraft",
  },
];

const BlogSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ fontSize: '16px', color: 'red' }}>
            Article & Tips
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1C3144' }}>
            Latest News & Blog
          </Typography>
        </Box>

        {/* Blog Cards */}
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                {/* Blog Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={post.imageUrl}
                  alt={post.title}
                />
                {/* Blog Details */}
                <CardContent sx={{ padding: '1.5rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: '#8892A2' }}>
                    <IconButton sx={{ p: 0, mr: 1, color: 'inherit' }}>
                      <Person />
                    </IconButton>
                    <Typography variant="caption" sx={{ marginRight: '10px' }}>
                      {post.author}
                    </Typography>
                    <IconButton sx={{ p: 0, mr: 1, color: 'inherit' }}>
                      <CalendarToday />
                    </IconButton>
                    <Typography variant="caption">{post.date}</Typography>
                  </Box>
                  {/* Blog Title */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1C3144' }}>
                    {post.title}
                  </Typography>
                  {/* Read More Button */}
                  <Button variant="text" sx={{ color: 'red', fontWeight: 'bold', p: 0 }}>
                    Read More &raquo;
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
