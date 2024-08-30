/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, Button, Container, Grid, Image, jsx } from "theme-ui";
import Markdown from "./markdown";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Icon } from "@iconify/react";

const FeatureBanner = ({ data, hideImage, hideIndicator }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section id="home" sx={styles.section}>
            <Container>
                <Grid sx={styles.grid}>
                    <Box sx={styles.heroContent}>
                        <div className="mb-6 flex justify-center">
                            <p
                                className="relative rounded-full px-4 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
                                <span className="hidden md:inline">Apito is Open Source.</span>
                                <a href="#" target="_blank" className="font-semibold text-lime-600">
                                    <span className="absolute inset-0"></span> Read
                                    the update <span>→</span>
                                </a>
                            </p>
                        </div>

                        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>
                            Build, Scale & Ship <span style={{ color: '#EA3A60' }}>APIs</span> Faster
                        </h1>
                        <p>{data?.description}</p>
                        <Box>
                            <code
                                class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 mt-5">
                                <span class="flex gap-4">
                                    <span class="shrink-0 text-gray-500">
                                        $
                                    </span>

                                    <span class="flex-1">
                                        <span>
                                            apito create&nbsp;
                                        </span>

                                        <span class="text-primary">
                                            project -n fitnessApp
                                        </span>
                                    </span>
                                </span>

                                <svg class="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                                    <path
                                        d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
                                    </path>
                                </svg>
                            </code>
                        </Box>
                        {data?.button && (
                            <a href={data?.button?.link}>
                                <Button>{data?.button?.label}</Button>
                            </a>
                        )}
                        <a style={{ marginLeft: '20px' }} href={'https://app.apito.io/login?action=demo'}>
                            <Button style={{ backgroundColor: '#EA3A60' }} type="secondary">Start A Project</Button>
                        </a>
                    </Box>
                    {
                        !hideImage ?

                            <Box as="figure">
                                {!hideIndicator ?
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
                                            <Icon icon={"flat-color-icons:accept-database"} className="h-6 w-6 mr-4 text-gray-900" />
                                            <span>Create Model</span>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Icon icon={"flat-color-icons:document"} className="h-6 w-6 mr-4 text-gray-900" />
                                            <span>Insert Content</span>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Icon icon={"icon-park:api"} className="h-6 w-6 mr-4 text-gray-900" />
                                            <span>Explore the API</span>
                                        </SwiperSlide>
                                    </Swiper> : null
                                }
                                <Swiper
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    thumbs={{ swiper: thumbsSwiper }}
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
        maxWidth: 660,
        mx: "auto",
        textAlign: "center",
        h1: {
            fontSize: [28, null, null, 48],
            lineHeight: 1.35,
            p: {
                fontSize: [28, null, null, 68],
                lineHeight: 1.35,
            },
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
