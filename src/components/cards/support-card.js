/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Heading, Image} from 'theme-ui';
import Markdown from "../markdown";

const SupportCard = ({ data }) => {
  return (
    <div sx={styles.root}>
      <Image height={45} width={45} src={data.icon.url} alt={data.title} title={data.title} />
      <Heading as="h3">{data.title}</Heading>
      <Markdown source={data.description.markdown} />
    </div>
  );
};

export default SupportCard;

const styles = {
  root: {
    textAlign: 'center',
    h4: {
      color: 'heading',
      fontSize: 19,
      fontWeight: 700,
      lineHeight: 1.26,
      letterSpacing: '-0.18px',
      marginTop: 33,
    },
    p: {
      fontSize: 15,
      lineHeight: 1.87,
      color: 'textAlt',
      marginBottom: 0,
      marginTop: 10,
      a: {
        color: 'primary',
      },
    },
  },
};
