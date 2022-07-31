/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text, Link, Button, Image } from "theme-ui";
import Markdown from "../markdown";

const ProjectCard = ({ data }) => {
  return (
    <div sx={styles.card}>
      <Flex as="figure">
        <Image
          height={200}
          src={data.data.cover.url}
          alt={data.data.title}
          title={data.data.title}
        />
      </Flex>
      <div sx={styles.content}>
        <Heading as="h3">{data.data.title}</Heading>
        <Text as="p">
          <Markdown source={data.data.description.markdown} />
        </Text>
      </div>
      <div sx={styles.links}>
        <a href={data.data.admin_link} rel="noreferrer" target="_blank">
          <Button variant="outlinedPrimary"> Login </Button>
        </a>
        <a href={data.data.repo_link} rel="noreferrer" target="_blank">
          <Button variant="primary">Sign Up</Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
    figure: {
      img: {
        height: "auto",
        maxWidth: "100%",
      },
    },
  },
  content: {
    flexGrow: 1,
    minHeight: ["auto", null, null, null],
    margin: ["25px 0 20px", null, null, "35px 0 30px"],
    padding: "0 40px",
    h3: {
      color: "heading",
      fontWeight: 700,
      fontSize: [18, null, null, 18],
      lineHeight: 1.32,
    },
    p: {
      fontSize: [16, null, null, 18],
      lineHeight: 1.7,
      color: "text",
      marginTop: [20],
      maxWidth: 280,
    },
  },
  links: {
    gridTemplateColumns: "repeat(2,1fr)",
    margin: ["0 0 15px 0", null, null, "0 40px 35px"],
    a: {
      display: "inline-block",
      marginRight: 24,
    },
    span: {
      display: "inline-flex",
      justifyContent: "center",
    },
  },
};
