/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, Grid, Box, Heading, Button, Image} from "theme-ui";
import Markdown from "./markdown";
import {HomePageData} from "../data/home";
import ExampleQueries from "./example-queries";
import React, {useState} from "react";
import {SwiperSlide, Swiper} from "swiper/react";
import {FreeMode, Navigation, Thumbs, Autoplay, EffectFade} from "swiper";

const FeatureBanner = ({data, hideImage, hideIndicator}) => {
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
                        <a style={{marginLeft: '20px'}} href={'https://app.apito.io/login?action=demo'}>
                            <Button style={{backgroundColor: '#EA3A60'}} type="secondary">Explore Demo App</Button>
                        </a>
                    </Box>
                    {
                        !hideImage ?

                            <Box as="figure">
                                { !hideIndicator ?
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
                                        </Swiper> : null
                                }
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    thumbs={{swiper: thumbsSwiper}}
                                    //centeredSlides={true} // Active if center mode
                                    //   centeredSlidesBounds={true}
                                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    //   effect={"fade"}
                                >
                                    {data?.images &&
                                    data?.images.map((image) => {
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
                                        );
                                    })}
                                </Swiper>
                            </Box> : null
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default FeatureBanner;

const styles = {
    section: {
        pt: [40, null, null, 30],
        pb: [60, null, null, 70],
    },
    grid: {
        gap: [40, null, null, 60],
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
            },
        },
        span: {
            color: "primary",
        },
        p: {
            fontSize: [16, null, null, 20],
            lineHeight: 2,
            maxWidth: 700,
            margin: "25px auto 0",
        },
        button: {
            mt: [25, null, null, 40],
        },
    },
    mySwiper: {
        mb: [50, null, null, 48],
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
