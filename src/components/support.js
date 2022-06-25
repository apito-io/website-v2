/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';
import SupportCard from "./cards/support-card";

const Support = ({ data }) => {
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          {data?.map((support) => (
            <SupportCard key={support.id} data={support.data} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Support;

const styles = {
  grid: {
    borderBottom: '1px solid #E5ECF4',
    gridGap: [40, null, null, 70],
    gridTemplateColumns: ['repeat(1, 1fr)', null, 'repeat(3, 1fr)'],
    maxWidth: 980,
    mx: 'auto',
    pt: [40, null, null, null, 50],
    pb: [40, null, null, null, 60],
  },
};
