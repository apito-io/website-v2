/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx, Container, Grid, Button} from "theme-ui";
import SingleDatabaseCard from "./cards/single-database-card";
import SectionHeading from "./section-heading";
import React from "react";

const Databases = ({ data }) => {
  console.log(data);
  return (
    <section id="supported-databases" sx={styles.section}>
      <Container>
        <SectionHeading redSlogan slogan={data?.header} title={data?.title} />
        <Grid sx={styles.grid}>
          {data?.data?.map((item) => (
            <SingleDatabaseCard key={item?.id} data={item} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Databases;

const styles = {
  section: {
    pt: [40, null, null, null, 60],
    pb: [40, null, null, null, 60],
  },
  grid: {
    gridGap: "80px",
    justifyContent: [null, null, "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
      "repeat(4, 1fr)",
    ],
  },
};
