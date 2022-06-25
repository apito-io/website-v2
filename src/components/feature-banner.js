/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, Grid, Box, Heading, Button, Image} from "theme-ui";
import Markdown from "./markdown";
import {HomePageData} from "../data/home";
import ExampleQueries from "./example-queries";
import React, {useState} from "react";
import {SwiperSlide, Swiper} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";

const FeatureBanner = ({data}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section id="home" sx={styles.section}>
            <Container>
                <Grid sx={styles.grid}>
                    <Box sx={styles.heroContent}>
                        <h1>
                            <Markdown source={data?.description}>{data?.title}</Markdown>
                        </h1>
                        <p>{data?.description}</p>
                        {data?.button && (
                            <a href={data?.button?.link}>
                                <Button>{data?.button?.label}</Button>
                            </a>
                        )}
                    </Box>
                    <Box as="figure">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            sx={styles.mySwiper}
                        >
                            <SwiperSlide>
                                <span className="material-icons">terminal</span>
                                <span>Define Model</span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <span className="material-icons">edit_note</span>
                                <span>Write Content</span>
                            </SwiperSlide>
                            <SwiperSlide>
                                <span className="material-icons">cloud_upload</span>
                                <span>Explore API</span>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            thumbs={{swiper: thumbsSwiper}}
                            modules={[FreeMode, Navigation, Thumbs]}
                        >
                            {
                                data?.images && data?.images.map((image) => {
                                    return (
                                        <SwiperSlide>
                                            <Image
                                                src={image}
                                                width={"auto"}
                                                height={740}
                                                alt={"Apito Console"}
                                                title={"Apito Console"}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </Box>
                </Grid>
            </Container>
        </section>
    );
};

export default FeatureBanner;

const styles = {
    section: {
        pt: [40, null, null, 60],
        pb: [60, null, null, 70],
    },
    grid: {
        gap: [40, null, null, 120],
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
            p: {
                fontSize: [28, null, null, 48],
                lineHeight: 1.35,
            }
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
    mySwiper: {
        mb: [50, null, null, 110],
        ".swiper-wrapper": {
            justifyContent: "center",
            ".swiper-slide": {
                textAlign: "center",
                display: "inline-flex",
                alignItems: "center",
                fontWeight: 700,
                cursor: "pointer",
                justifyContent: "center",
                ".material-icons": {
                    mr: ["4px", "8px", 16, 16],
                },
            },
            ".swiper-slide-thumb-active": {
                color: "red",
            },
        },
    },
};
