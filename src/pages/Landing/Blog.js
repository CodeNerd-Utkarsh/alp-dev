import React from "react";
import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import TwinHeading from "components/TwinHeading/TwinHeading";
import { makeStyles } from "tss-react/mui";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FETCH_MULTIPLE_BLOGS } from "graphql/query/cms_query_gql";
import { DocumentRenderer } from "@keystone-6/document-renderer";

const useStyles = makeStyles()(() => {
  return {
    container: {
      maxWidth: "max(calc(100% - 40px), 80%)",
      margin: "0 auto"
    },
    blogImage: {
      display: "block",
      height: "auto",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      objectFit: "cover"
    },
  };
});

const Blog = () => {
  const { classes } = useStyles();

  const [blogs, setBlogs] = React.useState([]);

  const { data: blogData } = useQuery(FETCH_MULTIPLE_BLOGS, {
    variables: {
      filter: {}
    }
  });

  React.useEffect(() => {
    if (blogData) {
      setBlogs(blogData?.blogs);
    }
  }, [blogData]);

  return (
    <Container maxWidth="xl">
      <div className={classes.container}>
        <TwinHeading text="Blog" />
        <Grid container spacing={8} mb={4}>
          {blogs.map((blog) => (
            <Grid item md={4} key={blog?.id}>
              <Paper className={classes.blogContainer} elevation={0}>
                <img src={`${process.env.REACT_APP_CMS_HOST}${blog?.image?.url}`} className={classes.blogImage} />
              </Paper>
              <Box>
                <Typography variant="body2" component="p" mt={1} color="text.secondary">
                  {new Date(blog?.timePosted).toLocaleDateString('en-GB')}
                </Typography>
                <Typography variant="h6" color="primary" mt={1}>
                  {blog?.blogTitle}
                </Typography>
                <div>
                  <DocumentRenderer document={blog?.blogContent?.document} />
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Blog;
