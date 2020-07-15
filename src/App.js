import React from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import IndexComponent from "./components/IndexComponent";

export default function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>USER MANAGEMENT</h1>
        </Grid>
        <Grid item xs={12}>
          <IndexComponent />
        </Grid>
      </Grid>
    </Container>
  );
}
