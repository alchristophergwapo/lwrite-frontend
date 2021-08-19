import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { Metrics } from "../constants";

export default (props) => {
  let { xs, sm, md, rg, lg, xl, xxl } = props;

  let paperStyle = {
    padding: Metrics.xs,
  };

  if (sm) {
    paperStyle.padding = Metrics.sm;
  } else if (rg) {
    paperStyle.padding = Metrics.rg;
  } else if (md) {
    paperStyle.padding = Metrics.md;
  } else if (lg) {
    paperStyle.padding = Metrics.lg;
  } else if (xl) {
    paperStyle.padding = Metrics.xl;
  } else if (xxl) {
    paperStyle.padding = Metrics.xxl;
  } else {
    paperStyle.padding = Metrics.xs;
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={0} style={paperStyle} />
        </Grid>
      </Grid>
    </div>
  );
};
