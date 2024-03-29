/** @jsxRuntime classic */
/** @jsx jsx */

import { Image, jsx } from "theme-ui";

const SingleDatabaseCard = ({ data }) => {
  console.log("fahim")
  console.log(data?.logo)
  return (
    <div sx={styles.card}>
      <div sx={styles.content}>
        <Image
          src={data.logo?.src}
          sx={styles.img}
          variant="avatar"
          alt={data?.title}
        />
      </div>
      <a sx={styles.link} href={data?.link || "#"} target="_blank">
        {data?.title}
      </a>
    </div>
  );
};

export default SingleDatabaseCard;

const styles = {
  card: {
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    transition: ".3s",
    ":hover": {
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
    },
  },
  content: {
    padding: "10px 40px",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  link: {
    // bg: "#263238",
    bg: "#f5f5f5",
    padding: "1rem 0",
    display: "block",
    color: "black",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: "2px",
    ":hover": {
      textDecoration: "none",
      color: "red",
    },
    borderRadius: "0 0 5px 5px",
  },
  img: {
    height: "auto",
    display: "block",
    margin: "0 auto",
  },
};
