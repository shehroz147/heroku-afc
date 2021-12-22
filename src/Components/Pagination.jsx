import React from "react";
// import PaginationItem from "@material-ui/lab/PaginationItem";
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export default function BasicPagination({
  postsPerPage,
  totalPosts,
  paginate,
}) {
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  const handleChange = (event, value) => {
    paginate(value);
  };
  return (
    <Container maxWidth="sm">
      <Grid container direction="row" justify="center" alignItems="center">
        <Pagination
          count={pageNumbers}
          color="primary"
          style={{ marginTop: "30px", marginBottom: "20px" }}
          onChange={handleChange}
        />
      </Grid>
    </Container>
  );
}
