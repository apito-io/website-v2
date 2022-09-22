/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';

import Carousel from 'react-multi-carousel';
import SectionHeading from '../components/section-heading';
import Rating from "./rating";
import ButtonGroup from "./button-group";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
};

const TestimonialCard = ({ data }) => {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeading redSlogan slogan="TESTIMONIAL" title="Meet Client Satisfaction" />
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            autoPlay={true}
            autoPlaySpeed={4000}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data?.map((item) => (
              <Box
                sx={styles.reviewCard}
                key={`testimonial--key${data?.item?.id}`}
              >
                <Rating rating={item?.data?.rating} />
                <Heading as="h3" sx={styles.title}>
                  {item?.data?.title}
                </Heading>
                <Text sx={styles.description}>
                  {item?.data?.quote?.text}
                </Text>
                <div className="card-footer">
                  <div className="image">
                    <Image src={item?.data?.avatar?.url} alt="People Image" />
                  </div>
                  <div className="reviewer-info">
                    <Heading as="h4" sx={styles.heading}>
                      {item?.data?.name}
                    </Heading>
                    <Heading as="h6" sx={styles.subHeading}>
                      -{item?.data?.role}
                    </Heading>
                    <Text sx={styles.designation}>
                      {item?.data?.twitter_id}
                    </Text>
                  </div>
                </div>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
};

export default TestimonialCard;

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '550px',
        '2000px',
        '3180px',
        '500px',
        'calc(50% + 665px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  subHeading: {
    fontSize: [1, null, null, 1],
    fontWeight: 300,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
