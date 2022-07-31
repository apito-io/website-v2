/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import a11yDark from './../../theme/a11y-dark';

const methodColor = (method) => {
  switch (method) {
    case 'post':
      return '#FFBD2E';
    case 'get':
      return '#0898E7';
  }
};

const CodeBlock = ({ icon, title, description, code, method, language }) => {
  return (
    <div sx={styles.codeBlock}>
      <Flex as="header" sx={styles.codeHeader}>
        {icon && icon}
        <span className="lang-name">{title}</span>
        {method && (
          <span
            className="method"
            sx={{ backgroundColor: methodColor(method) }}
          >
            {method}
          </span>
        )}
      </Flex>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        showLineNumbers
        //useInlineStyles={false}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

const styles = {
  codeHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: '10px 10px 0 0px',
    alignItems: 'center',
    padding: '12px 20px',
    minHeight: 45,
    svg: {
      height: 'auto',
      width: 30,
    },
    '.lang-name': {
      fontSize: 18,
      lineHeight: 1.28,
      color: '#fff',
      marginLeft: 10,
    },
    '.method': {
      borderRadius: 5,
      color: '#000000',
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.17,
      marginLeft: 'auto',
      minHeight: 26,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 10px',
      textTransform: 'uppercase',
    },
  },
  codeBlock: {
    backgroundColor: 'textAlt',
    borderRadius: 10,
    width: '100%',
    overflowX: ['scroll', null, null, null, 'unset'],
    pre: {
      backgroundColor: 'textAlt',
      padding: '1em',
      margin: 0,
      fontSize: 13,
      lineHeight: 1.9,
      borderRadius: '0 0 10px 10px',
      '.linenumber': {
        '&.react-syntax-highlighter-line-number': {
          color: '#fff',
        },
      },
    },
  },
};
