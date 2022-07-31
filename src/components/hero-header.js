/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Box, Heading, Button, Image } from "theme-ui";
import Markdown from "./markdown";
import { HomePageData } from "../data/home";
import ExampleQueries from "./example-queries";
import React from "react";

const HeroHeader = ({ data }) => {
  return (
    <section id="home" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.heroContent}>
            <Heading as="h1">{data?.title}</Heading>
            <p>{data?.description}</p>
            {data?.button && (
                <a href={data?.button?.link}>
                  <Button>{data?.button?.label}</Button>
                </a>
            )}
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroHeader;

const styles = {
  section: {
    pt: [40, null, null, 60],
    pb: [60, null, null, 70],
  },
  grid: {
    gap: [40, null, null, 60],
    alignItems: "center",
    // minHeight: ["auto", null, null, "calc(100vh - 119px)"],
  },
  heroContent: {
    maxWidth: 960,
    mx: "auto",
    textAlign: "center",
    h1: {
      fontSize: [28, null, null, 48],
      lineHeight: 1.35,
    },
    span: {
      color: "primary",
    },
    p: {
      fontSize: [16, null, null, 20],
      lineHeight: 2,
      maxWidth: 620,
      margin: "25px auto 0",
    },
    button: {
      mt: [25, null, null, 40],
    },
  },
};
