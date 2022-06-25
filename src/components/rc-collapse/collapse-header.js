/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';

const AccordionHeader = ({ title, as }) => {
  return (
    <div sx={styles.header}>
      <Heading as={as} sx={styles.title}>
        {title}
      </Heading>
    </div>
  );
};

export default AccordionHeader;

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    position: 'relative',
  },
  title: {
    color: 'headingSecondary',
    fontSize: [2, 2, 2, 2, 2, 18, 3],
    fontWeight: 500,
    letterSpacing: -0.5,
    lineHeight: [1.5, 1.8],
  },
};
