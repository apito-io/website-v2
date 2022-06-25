/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid } from "theme-ui";
import SectionHeading from "./section-heading";
import ProjectCard from "./cards/project-card";

const Projects = ({ data }) => {
  return (
    <section id="build-with" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="EXPLORE EXAMPLE APPS"
          title="Few of thousands things you can build with Apito"
        />
        <Grid sx={styles.grid}>
          {data?.map((item) => {
            return <ProjectCard key={item?.id} data={item} />;
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;

const styles = {
  section: {
    pt: [40, null, null, null, 60],
    pb: [40, null, null, null, 60],
  },
  grid: {
    gridGap: "40px",
    justifyContent: [null, null, "center", "unset"],
    gridTemplateColumns: ["repeat(1, 1fr)", null, 400, "repeat(3, 1fr)"],
  },
};
