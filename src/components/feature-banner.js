/** @jsxRuntime classic */
/** @jsx jsx */
import {Box, Button, Container, Grid, Image, jsx} from "theme-ui";
import Markdown from "./markdown";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode, Navigation, Thumbs} from "swiper";

const FeatureBanner = ({data, hideImage, hideIndicator}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section id="home" sx={styles.section}>
            <Container>
                <Grid sx={styles.grid}>
                    <Box sx={styles.heroContent}>
                        <h1 style={{ fontSize: '4rem', fontWeight: 'bold'}}>
                            Build, Scale & Ship <span style={{ color: '#EA3A60'}}>APIs</span>  Faster
                        </h1>
                        <p>{data?.description}</p>
                        <Box>
                            <code
                                className="text-sm sm:text-base inline-flex text-left items-center space-x-4 text-white rounded-lg p-4 pl-6 mt-10">
                                <span className="flex gap-4">
                                    <span className="shrink-0 text-gray-500">
                                        $
                                    </span>

                                    <span className="flex-1">
                                        <span>
                                            apito create
                                        </span>
                                        <span className="ml-3 text-yellow-500">
                                             project -n fitnessApp
                                        </span>
                                    </span>
                                </span>
                                <svg className="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white"
                                     xmlns="http://www.w3.org/2000/svg"
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
                        <a style={{marginLeft: '20px'}} href={'https://app.apito.io/login?action=demo'}>
                            <Button style={{backgroundColor: '#EA3A60'}} type="secondary">Start A Project</Button>
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
