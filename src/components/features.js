/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import {jsx, Button, Container, Flex, Heading, Image, Text} from 'theme-ui';
import SectionHeading from "./section-heading";
import Markdown from "./markdown";
import {Icon} from "@iconify/react";

const Features = ({features, hideSection}) => {
    return (
        <section id='media-cdn' sx={styles.section}>
            <Container>
                {
                    !hideSection ? <SectionHeading
                        slogan={features?.slogan}
                        title={features?.title}
                    /> : null
                }
                {features?.data?.map((feature, i) => (
                    i % 2 === 0 ?
                        <div key={i} sx={styles.grid}>
                            <div sx={styles.heading} style={feature.textAlign && {textAlign: feature.textAlign}}>
                                <Icon icon={feature.icon} style={styles.icon}/>
                                <Text as='span' className='slogan'>{feature?.header}</Text>
                                <Heading as='h2'>{feature?.title}</Heading>
                                {
                                    feature?.description?.isMarkdown ?
                                        <Markdown source={feature?.description?.markdown}/> :
                                        <Text as='p'>{feature?.description?.markdown}</Text>
                                }
                                {feature.link && (
                                    <a href={feature.link} rel="noreferrer" target="_blank">
                                        <Button variant="primary">
                                            {feature?.link_text === null ? "Learn More" : feature.link_text}
                                        </Button>
                                    </a>
                                )}
                            </div>
                            <Flex as='figure' sx={styles.figure}>
                                {feature?.cover ? <Image width={625} height={425} src={feature?.cover?.url} alt='browser'/> :
                                    feature?.component
                                }
                            </Flex>
                        </div>
                        :
                        <div style={{paddingTop: '70px'}} key={i} sx={styles.grid}>
                            <Flex as='figure' sx={styles.figure}>
                                {feature?.cover ? <Image width={625} height={425} src={feature?.cover?.url} alt='browser'/> :
                                    feature?.component
                                }
                            </Flex>
                            <div sx={styles.heading} style={feature.textAlign && {textAlign: feature.textAlign}}>
                                <Icon icon={feature.icon} style={styles.icon}/>
                                <Text as='span' className='slogan'>{feature?.header}</Text>
                                <Heading as='h2'>{feature?.title}</Heading>
                                {
                                    feature?.description?.isMarkdown ?
                                        <Markdown source={feature?.description?.markdown}/> :
                                        <Text as='p'>{feature?.description?.markdown}</Text>
                                }
                                {feature.link && (
                                    <a href={feature.link} rel="noreferrer" target="_blank">
                                        <Button variant="primary">
                                            {feature?.link_text === null ? "Learn More" : feature.link_text}
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                ))}
            </Container>
        </section>
    );
};

export default Features;

const styles = {
    icon: {
        display: 'inline',
        textAlign: 'center',
        marginRight: '8px',
        fontSize: '35px',
        color: 'primary',
    },
    section: {
        pt: [20, null, null, null, 20],
        pb: [20, null, null, null, 20],
    },
    grid: {
        display: ['flex', null, null, 'grid'],
        flexDirection: ['column', null, null, 'unset'],
        gridGap: 30,
        gridTemplateColumns: 'repeat(2,1fr)',
    },
    heading: {
        alignSelf: 'center',
        textAlign: ['center', null, null, 'center'],
        px: [20, null, null, 0],
        '.slogan': {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 2.86,
            letterSpacing: 2.1,
            textTransform: 'uppercase',
            color: 'primary',
            marginLeft: 1
        },
        h2: {
            fontSize: [24, null, null, 36],
            fontWeight: [500, null, null, 700],
            lineHeight: [1.6, null, null, 1.15],
            //letterSpacing: '-1.5px',
            color: 'heading',
        },
        p: {
            fontSize: [16, null, null, 18],
            lineHeight: [1.8, null, null, 2.33],
            color: 'text',
            marginTop: [20],
        },
        button: {
            mt: [20, null, null, 10],
        },
    },
    figure: {
        img: {
            height: 'auto',
            maxWidth: '100%',
        },
    },
};
