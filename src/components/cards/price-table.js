/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Heading, Text, Button } from 'theme-ui';
import CheckCircleFilled from "../../icons/check-circle-filled";

const PriceTable = ({ id, data, isMonthly }) => {
  return (
    <div sx={styles.root}>
      <header sx={styles.header}>
        <Heading as="h3">{data.title}</Heading>
        <Text as="p">{data.description}</Text>
      </header>
      <ul sx={styles.features}>
        {data?.features?.map((feat, i) => (
          <li key={i}>
            <CheckCircleFilled />
            {feat}
          </li>
        ))}
      </ul>
        {data?.price && (
            <div sx={styles.price}>
                {isMonthly ? (
                    <Fragment>
                        {data?.price?.monthly_discounted > 0 && (
                            <del sx={styles.regularPrice}>
                                <span>${data?.price?.monthly}</span> /Project/Month
                            </del>
                        )}
                        <span sx={styles.discountedPrice}>
              <span>${data?.price?.monthly_discounted}</span> /Project/Month
            </span>
                    </Fragment>
                ) : (
                    <Fragment>
                        {data?.price?.yearly_discounted > 0 && (
                            <del sx={styles.regularPrice}>
                                <span sx={{ fontSize: 18 }}>${data?.price?.yearly}</span> /Project/Annual
                            </del>
                        )}
                        {data?.price?.yearly_discounted > 0 && (
                            <span sx={styles.discountedPrice}>
                    <span>${data?.price?.yearly_discounted.toFixed(1)}</span> /Project/Annual
                </span>
                        )}
                    </Fragment>
                )}
            </div>
        )}
        {data?.buttonLabel && (
                <footer sx={styles.footer}>
                    <a target="_blank" rel="noreferrer" href={(id === 3 || id === 10 || id === 11) ? 'mailto:accounts@apito.io' : 'https://app.apito.io'}>
                        <Button variant="primary">{data.buttonLabel}</Button>
                    </a>
                </footer>
        )}
    </div>
  );
};

export default PriceTable;

const styles = {
  root: {
    boxShadow: '0px 6px 47px rgb(38 78 118 / 10%)',
    padding: '50px 40px 80px',
    borderRadius: 20,
  },
  header: {
    h3: {
      color: 'heading',
      fontSize: 22,
      lineHeight: 1.32,
      fontWeight: 700,
    },
    p: {
      fontSize: 16,
      lineHeight: 1.75,
      color: 'textAlt',
      mt: [10],
    },
  },
  features: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 2.62,
    color: 'textAlt',
    margin: ['30px 0 0', null, null, '30px 0 0'],
    padding: 0,
    listStyle: 'none',
    minHeight: [null, null, null, 450],
    li: {
      alignItems: 'center',
      display: 'flex',
      svg: {
        mr: 13,
      },
    },
  },
  price: {
    fontSize: 16,
    lineHeight: 1.75,
    display: 'flex',
    marginTop: [30, null, null, 50],
    minHeight: [null, null, null, 75],
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    del: {
      display: 'flex',
      justifyContent: 'center',
      lineHeight: 1.3,
      span: {
        fontWeight: 500,
      },
    },
    span: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      span: {
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 1.3,
        mr: 1,
      },
    },
  },
  regularPrice: {
    mb: 10,
  },
  footer: {
    marginTop: 25,
    textAlign: 'center',
  },
};
