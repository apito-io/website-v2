/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, Heading, Message, Badge} from "theme-ui";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

import SectionHeading from "./section-heading";
import CodeBlock from "./cards/code-block";
import GraphqlIcon from "../icons/graphql";
import RESTIcon from "../icons/rest";

const ExampleQueries = ({data}) => {
    return (
        <section id="example-queries" sx={styles.section}>
            <Container>
                {
                    data?.title && <SectionHeading
                        slogan={data?.slogan}
                        title={data?.title}
                    />
                }

                <Tabs sx={styles.tabs}>
                    <TabList>
                        {data?.data.map((item) => (
                            <Tab key={item.id}>{item.title}</Tab>
                        ))}
                    </TabList>
                    <div>
                        {data?.data.map((item) => (
                            <TabPanel key={item.id}>
                                <Badge style={{
                                    fontSize: '14px',
                                    padding: '15px',
                                    borderRadius: '8px'
                                }}>{item.description}</Badge>
                                <CodeBlock
                                    icon={<RESTIcon/>}
                                    title="REST API"
                                    code={item.codes.rest}
                                    method={item.restMethod ? item.restMethod : "get"}
                                    language="shell"
                                />
                                <CodeBlock
                                    icon={<GraphqlIcon/>}
                                    title="GraphQL"
                                    code={item.codes.graphql}
                                    method="post"
                                    language="graphql"
                                />
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
            </Container>
        </section>
    );
};

export default ExampleQueries;

const styles = {
    section: {
        pt: [40, null, null, null, 60],
        pb: [40, null, null, null, 60],
    },
    tabs: {
        display: ["flex", null, null, "grid"],
        flexDirection: ["column", null, null, "unset"],
        gap: [null, null, null, 35],
        gridTemplateColumns: ["1fr", null, null, "1fr 550px", "29% 68%"],
        overflow: ["hidden", null, null, "auto"],
        alignItems: "flex-start",
        ".react-tabs__tab-panel": {
            display: "grid",
            gap: 12,
        },
        ".react-tabs__tab-list": {
            listStyle: "none",
            padding: 0,
            margin: ["0 0 20px", null, null, 0],
            gridGap: 14,
            display: ["flex", null, null, "grid"],
            overflowX: ["scroll", null, null, "unset"],
            width: ["100%", null, null, "unset"],
        },
        ".react-tabs__tab": {
            border: "1px solid #DADADA",
            borderRadius: 5,
            cursor: "pointer",
            minHeight: [40, null, null, 50],
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            fontSize: [14, null, null, 18],
            lineHeight: 1.3,
            transition: "0.2s ease-in-out 0s",
            whiteSpace: "nowrap",
            px: [10, null, null, 0],
            ":hover": {
                backgroundColor: "primary",
                borderColor: "primary",
                color: "#fff",
            },
        },
        ".react-tabs__tab--selected": {
            backgroundColor: "primary",
            borderColor: "primary",
            color: "#fff",
        },
    },
};
