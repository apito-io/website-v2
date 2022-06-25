/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid } from "theme-ui";
import SdkIntegrationCard from "./cards/sdk-integration-card";
import SectionHeading from "./section-heading";

const SdkIntegration = ({ data }) => {
  return (
    <section id="supported-langs" sx={styles.section}>
      <Container>
        <SectionHeading slogan={data?.header} title={data?.title} />
        <Grid sx={styles.grid}>
          {data?.data?.map((item) => {
            return <SdkIntegrationCard key={item?.id} data={item.data} />;
          })}
        </Grid>
        {/* <figure sx={styles.figure}>
          <a target="_blank" href={data?.link}>
            <Image
              width={"auto"}
              height={320}
              src={data?.image.url}
              alt={data?.title}
              title={data?.title}
            />
          </a>
        </figure> */}
      </Container>
    </section>
  );
};

export default SdkIntegration;

const styles = {
  grid: {
    gridGap: "24px",
    justifyContent: [null, null, "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
  },
  section: {
    pt: [40, null, null, null, 60],
    pb: [40, null, null, null, 60],
  },
  figure: {
    margin: 0,
    textAlign: "center",
    img: {
      height: "auto",
      maxWidth: "100%",
    },
  },
};
